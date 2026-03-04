<template>
  <main class="landing-shell min-h-screen bg-gold text-white">
    <section
      v-if="mode === 'intro'"
      class="intro-frame relative mx-auto min-h-screen w-full max-w-5xl border-x border-white/20 px-4 py-6 sm:px-10 sm:py-10"
    >
      <div class="pointer-events-none absolute left-0 top-0 h-full w-full opacity-20">
        <div class="noise-layer h-full w-full"></div>
      </div>

      <div class="intro-top">
        <img src="/profile.png" alt="Roberto Alvarado" class="profile-image" />
      </div>

      <p class="text-sm uppercase tracking-widest text-white/80">Portfolio</p>
      <h1 class="mt-2 text-3xl sm:text-5xl font-bold crt-glow">Roberto Alvarado</h1>
      <p class="mt-4 max-w-4xl text-base sm:text-lg text-white/90">
        Software engineer focused on backend systems, machine learning tooling, and practical product development.
      </p>

      <div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <article class="icon-card">
          <span class="pi pi-server text-2xl"></span>
          <p>Backend</p>
        </article>
        <article class="icon-card">
          <span class="pi pi-chart-line text-2xl"></span>
          <p>ML Tools</p>
        </article>
        <article class="icon-card">
          <span class="pi pi-code text-2xl"></span>
          <p>C++/Python</p>
        </article>
        <article class="icon-card">
          <span class="pi pi-cog text-2xl"></span>
          <p>Systems</p>
        </article>
      </div>

      <article class="mt-6 rounded border border-white/20 p-4 panel-fx">
        <h2 class="font-semibold text-lg">What I do</h2>
        <p class="mt-2 text-sm sm:text-base text-white/90">
          I build reliable software, from algorithmic tools to full-stack features, with strong attention to performance and maintainability.
        </p>
      </article>

      <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <article class="rounded border border-white/20 p-4 panel-fx">
          <h2 class="font-semibold text-lg">What I work with</h2>
          <p class="mt-2 text-sm sm:text-base text-white/90">
            C++, Python, TypeScript, formal verification, APIs, and developer tooling.
          </p>
          <div class="mt-3 flex flex-wrap gap-2 text-xs sm:text-sm">
            <span class="tool-pill"><i class="pi pi-code"></i> C++</span>
            <span class="tool-pill"><i class="pi pi-chart-line"></i> Python</span>
            <span class="tool-pill"><i class="pi pi-server"></i> APIs</span>
            <span class="tool-pill"><i class="pi pi-sitemap"></i> Formal</span>
            <span class="tool-pill"><i class="pi pi-wrench"></i> Tooling</span>
            <span class="tool-pill"><i class="pi pi-github"></i> GitHub</span>
          </div>
        </article>

        <article class="rounded border border-white/20 p-4 panel-fx">
          <h2 class="font-semibold text-lg">What I like</h2>
          <p class="mt-2 text-sm sm:text-base text-white/90">
            Building useful products, reading, game development experiments, and learning new systems deeply.
          </p>
        </article>

        <article class="rounded border border-white/20 p-4 sm:col-span-2 panel-fx">
          <h2 class="font-semibold text-lg">Featured Work</h2>
          <div class="mt-2 flex flex-col gap-2 text-sm sm:text-base">
            <a class="work-link" href="https://github.com/Robdres/Deep_learning" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-github"></i>
              <span>Deep Learning code repository</span>
            </a>
            <a class="work-link" href="https://github.com/Robdres/RoughSetTheory" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-github"></i>
              <span>Rough Set Theory repository</span>
            </a>
            <a class="work-link" href="https://research.usfq.edu.ec/es/publications/new-approach-tofacial-expression-recognition-andclassification-us/" target="_blank" rel="noopener noreferrer">
              <i class="pi pi-file"></i>
              <span>Paper: Facial Expression Recognition and Classification</span>
            </a>
          </div>
        </article>
      </div>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button class="intro-btn" @click="openCv">View CV</button>
        <button class="intro-btn intro-btn-primary" @click="mode = 'terminal'">Start Terminal</button>
      </div>
    </section>

    <section v-else class="mx-auto w-full max-w-5xl">
      <TerminalPortfolio @back-to-intro="mode = 'intro'" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TerminalPortfolio from '@/components/TerminalPortfolio.vue';

const mode = ref<'intro' | 'terminal'>('intro');
const localCvPath = '/cv.pdf';
const fallbackCvPath = 'https://github.com/Robdres/CV/blob/main/cv_en/cv.pdf';

const openCv = async () => {
  try {
    const response = await fetch(localCvPath, { method: 'HEAD' });
    if (response.ok) {
      window.open(localCvPath, '_blank');
      return;
    }
  } catch (error) {
    window.open(fallbackCvPath, '_blank');
    return;
  }

  window.open(fallbackCvPath, '_blank');
};
</script>

<style scoped>
.landing-shell {
  position: relative;
  overflow: hidden;
}

.landing-shell::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 2px,
    rgba(255, 255, 255, 0.035) 3px,
    transparent 4px
  );
  animation: scanlines 8s linear infinite;
}

.landing-shell::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 50% 50%, transparent 25%, rgba(0, 0, 0, 0.25) 100%);
}

.intro-frame {
  background: linear-gradient(180deg, rgba(28, 87, 117, 0.2) 0%, rgba(40, 40, 40, 0.95) 40%, rgba(40, 40, 40, 1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.intro-top {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.profile-image {
  width: min(170px, 38vw);
  height: min(170px, 38vw);
  border-radius: 9999px;
  object-fit: cover;
  border: 2px solid rgba(255, 252, 251, 0.35);
  box-shadow: 0 0 18px rgba(255, 252, 251, 0.22);
}

.noise-layer {
  background-image: radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px);
  background-size: 3px 3px;
  animation: staticFlicker 180ms steps(2, end) infinite;
}

.crt-glow {
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.35);
  animation: twitch 2.4s steps(2, end) infinite;
}

.icon-card {
  border: 1px solid rgba(255, 252, 251, 0.25);
  background: rgba(255, 252, 251, 0.06);
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  font-size: 0.88rem;
  animation: pulseSoft 2.5s ease-in-out infinite;
}

.panel-fx {
  background: rgba(255, 252, 251, 0.04);
  transition: transform 0.2s ease;
}

.panel-fx:hover {
  transform: translateY(-2px);
}

.tool-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1px solid rgba(255, 252, 251, 0.28);
  padding: 0.22rem 0.55rem;
  background: rgba(255, 252, 251, 0.06);
}

.work-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-bg);
  text-decoration: none;
}

.work-link:hover {
  text-decoration: underline;
}

.intro-btn {
  border: 1px solid var(--primary-bg);
  padding: 0.65rem 1rem;
  font-size: 0.95rem;
  color: var(--primary-bg);
  background: rgba(255, 252, 251, 0.06);
  transition: transform 0.2s ease, background 0.2s ease;
}

.intro-btn-primary {
  background: var(--primary-sc);
  font-weight: 700;
}

.intro-btn:hover {
  transform: translateY(-1px);
  background: rgba(255, 252, 251, 0.14);
}

@keyframes twitch {
  0%,
  96%,
  100% {
    transform: translateX(0);
  }
  97% {
    transform: translateX(-1px);
  }
  98% {
    transform: translateX(1px);
  }
}

@keyframes staticFlicker {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.28;
  }
}

@keyframes pulseSoft {
  0%,
  100% {
    background: rgba(255, 252, 251, 0.06);
  }
  50% {
    background: rgba(255, 252, 251, 0.12);
  }
}

@keyframes scanlines {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(12px);
  }
}

@media (max-width: 640px) {
  .intro-frame {
    padding-top: 1.25rem;
  }

  .intro-top {
    margin-bottom: 0.75rem;
  }
}
</style>

