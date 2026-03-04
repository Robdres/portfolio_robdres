<template>
  <section class="terminal-shell mx-auto w-full max-w-5xl rounded border border-white/30 bg-gold p-3 sm:p-4">
    <div class="mb-2 text-xs sm:text-sm text-white/80">Roberto Portfolio DOS v1.0</div>

    <div ref="outputRef" class="terminal-output rounded border border-white/20 bg-black/20 p-3">
      <div v-for="entry in output" :key="entry.id" class="mb-1 whitespace-pre-wrap break-words text-sm sm:text-base">
        {{ entry.text }}
      </div>
    </div>

    <div v-if="showGame" class="mt-3">
      <GameOfLife @close="closeGame" />
    </div>

    <div class="mt-3 flex flex-wrap gap-2 sm:hidden">
      <button v-for="chip in quickCommands" :key="chip" class="cmd-chip" @click="runQuickCommand(chip)">
        {{ chip }}
      </button>
    </div>

    <form class="mt-3 sticky-input" @submit.prevent="submitCommand">
      <label class="sr-only" for="terminal-input">Terminal command</label>
      <div class="flex items-center gap-2">
        <span class="text-sm sm:text-base text-white">C:{{ cwd }}&gt;</span>
        <input
          id="terminal-input"
          ref="inputRef"
          v-model="commandInput"
          type="text"
          class="terminal-input w-full"
          autocomplete="off"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          @keydown.up.prevent="navigateHistory('up')"
          @keydown.down.prevent="navigateHistory('down')"
        />
      </div>
    </form>

    <div class="mt-3 flex gap-2">
      <button class="cmd-chip" @click="$emit('backToIntro')">Back to intro</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import expData from '@/resources/exp.json';
import projectsData from '@/resources/projects.json';
import blogData from '@/resources/blog.json';
import GameOfLife from '@/components/GameOfLife.vue';

type OutputEntry = {
  id: number;
  text: string;
};

type Experience = {
  name: string;
  place: string;
  location: string;
  description: string;
  skills: string[];
};

type Project = {
  name: string;
  time: string;
  description: string;
  skills: string[];
  github: string;
};

type Article = {
  title: string;
  date: string;
  text: string;
};

const emit = defineEmits<{ (e: 'backToIntro'): void }>();

const localCvPath = '/cv.pdf';
const fallbackCvPath = 'https://github.com/Robdres/CV/blob/main/cv_en/cv.pdf';
const directories = ['about', 'experience', 'projects', 'blog', 'books', 'contact'];
const quickCommands = ['help', 'dir', 'cv', 'game', 'clear'];

const output = ref<OutputEntry[]>([]);
const commandInput = ref('');
const cwd = ref('/');
const showGame = ref(false);
const outputRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const history = ref<string[]>([]);
const historyIndex = ref(-1);
let entryId = 0;

const experiences = (expData.experiences || []) as Experience[];
const projects = (projectsData.experiences || []) as Project[];
const articles = (blogData.articles || []) as Article[];

const pushOutput = (text: string) => {
  entryId += 1;
  output.value.push({ id: entryId, text });
};

const scrollToBottom = async () => {
  await nextTick();
  if (outputRef.value) {
    outputRef.value.scrollTop = outputRef.value.scrollHeight;
  }
};

const printWelcome = () => {
  pushOutput('Welcome to Roberto\'s portfolio terminal.');
  pushOutput('Type "help" to see available commands.');
  pushOutput('Available commands: help, ls, dir, cd <dir>, cv, clear, cowsay <text>, game.');
};

const formatSection = (directory: string): string[] => {
  if (directory === 'about') {
    return [
      'ABOUT',
      'I am Roberto Alvarado, software engineer focused on backend and ML tooling.',
      'I enjoy building practical products, clean codebases, and learning continuously.'
    ];
  }

  if (directory === 'experience') {
    return [
      'EXPERIENCE',
      ...experiences.map((item) => `${item.name} @ ${item.place} (${item.location})\n- ${item.description}\n- Skills: ${item.skills.join(', ')}`)
    ];
  }

  if (directory === 'projects') {
    return [
      'PROJECTS',
      ...projects.map((item) => `${item.name} (${item.time})\n- ${item.description}\n- Stack: ${item.skills.join(', ')}\n- ${item.github}`)
    ];
  }

  if (directory === 'blog') {
    return [
      'BLOG',
      ...articles.map((item) => `${item.title} - ${item.date}\n${item.text || 'No summary yet.'}`)
    ];
  }

  if (directory === 'books') {
    return [
      'BOOKS',
      'I like reading engineering, finance, and product design books.',
      'This section is being expanded with full notes soon.'
    ];
  }

  if (directory === 'contact') {
    return [
      'CONTACT',
      'GitHub: https://github.com/Robdres',
      'Email: raalvaradom@hotmail.com',
      'Twitter: https://twitter.com/Robdre3'
    ];
  }

  return ['Directory not found.'];
};

const createCowSay = (text: string) => {
  const message = text.trim().length > 0 ? text.trim() : 'Hello from this portfolio.';
  const width = message.length;
  const top = ` ${'_'.repeat(width + 2)}`;
  const middle = `< ${message} >`;
  const bottom = ` ${'-'.repeat(width + 2)}`;
  return [
    top,
    middle,
    bottom,
    '        \\   ^__^',
    '         \\  (oo)\\_______',
    '            (__)\\       )\\/\\',
    '                ||----w |',
    '                ||     ||'
  ].join('\n');
};

const openCv = async () => {
  try {
    const response = await fetch(localCvPath, { method: 'HEAD' });
    if (response.ok) {
      window.open(localCvPath, '_blank');
      pushOutput('Opening local CV...');
      return;
    }
  } catch (error) {
    pushOutput('Local CV not found, opening external CV...');
  }

  window.open(fallbackCvPath, '_blank');
};

const runCommand = async (rawCommand: string) => {
  const input = rawCommand.trim();

  if (!input) {
    return;
  }

  pushOutput(`C:${cwd.value}> ${input}`);

  const [command, ...rest] = input.split(' ');
  const arg = rest.join(' ').trim();

  if (command === 'help') {
    pushOutput('help              Show available commands');
    pushOutput('ls                List profile sections');
    pushOutput('dir               List profile sections (DOS alias)');
    pushOutput('cd <dir>          Open section (about, experience, projects, blog, books, contact)');
    pushOutput('cv                Open CV (local first, then external)');
    pushOutput('clear             Clear terminal output');
    pushOutput('cowsay <text>     Print a cowsay message');
    pushOutput('game              Start Game of Life panel');
    pushOutput('game stop         Close Game of Life panel');
    pushOutput('intro             Return to intro page');
    return;
  }

  if (command === 'ls' || command === 'dir') {
    pushOutput(directories.join('   '));
    return;
  }

  if (command === 'cd') {
    if (!arg) {
      pushOutput('Usage: cd <dir>');
      return;
    }

    if (arg === '..') {
      cwd.value = '/';
      pushOutput('Moved to root.');
      return;
    }

    if (!directories.includes(arg)) {
      pushOutput(`Directory not found: ${arg}`);
      return;
    }

    cwd.value = `/${arg}`;
    formatSection(arg).forEach((line) => pushOutput(line));
    return;
  }

  if (command === 'cv') {
    await openCv();
    return;
  }

  if (command === 'clear') {
    output.value = [];
    return;
  }

  if (command === 'cowsay') {
    pushOutput(createCowSay(arg));
    return;
  }

  if (command === 'game') {
    if (arg === 'stop') {
      showGame.value = false;
      pushOutput('Game panel closed.');
      return;
    }
    showGame.value = true;
    pushOutput('Game of Life started below terminal output.');
    return;
  }

  if (command === 'intro') {
    emit('backToIntro');
    return;
  }

  pushOutput(`Unknown command: ${command}. Type "help".`);
};

const submitCommand = async () => {
  const current = commandInput.value;
  await runCommand(current);

  if (current.trim()) {
    history.value.push(current.trim());
  }
  historyIndex.value = -1;
  commandInput.value = '';
  await scrollToBottom();
  inputRef.value?.focus();
};

const navigateHistory = (direction: 'up' | 'down') => {
  if (history.value.length === 0) {
    return;
  }

  if (direction === 'up') {
    if (historyIndex.value < history.value.length - 1) {
      historyIndex.value += 1;
    }
  }

  if (direction === 'down') {
    if (historyIndex.value > -1) {
      historyIndex.value -= 1;
    }
  }

  if (historyIndex.value === -1) {
    commandInput.value = '';
    return;
  }

  const command = history.value[history.value.length - 1 - historyIndex.value];
  commandInput.value = command;
};

const runQuickCommand = async (command: string) => {
  commandInput.value = command;
  await submitCommand();
};

const closeGame = () => {
  showGame.value = false;
  pushOutput('Game panel closed.');
};

watch(output, () => {
  scrollToBottom();
}, { deep: true });

watch(showGame, () => {
  scrollToBottom();
});

onMounted(() => {
  printWelcome();
  inputRef.value?.focus();
});
</script>

<style scoped>
.terminal-shell {
  min-height: 70vh;
}

.terminal-output {
  min-height: 50vh;
  max-height: 60vh;
  overflow-y: auto;
  font-family: 'Courier New', Courier, monospace;
}

.terminal-input {
  border: 1px solid var(--primary-bg);
  background: var(--bg);
  color: var(--primary-bg);
  padding: 0.55rem 0.65rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.95rem;
}

.terminal-input:focus {
  outline: 1px solid var(--primary-bg);
}

.cmd-chip {
  border: 1px solid var(--primary-bg);
  background: transparent;
  color: var(--primary-bg);
  padding: 0.38rem 0.7rem;
  font-size: 0.84rem;
}

.sticky-input {
  position: sticky;
  bottom: 0;
  background: var(--bg);
  padding-top: 0.2rem;
}

@media (max-width: 640px) {
  .terminal-shell {
    min-height: 78vh;
    border-radius: 0.5rem;
  }

  .terminal-output {
    min-height: 54vh;
    max-height: 62vh;
    font-size: 0.88rem;
  }

  .terminal-input {
    font-size: 1rem;
    padding: 0.65rem 0.7rem;
  }
}
</style>
