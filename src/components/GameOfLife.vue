<template>
  <section class="rounded border border-white/30 bg-gold p-3 text-white">
    <div class="mb-3 flex flex-wrap items-center gap-2">
      <button class="ctl-btn" @click="toggleRunning">{{ running ? 'Pause' : 'Start' }}</button>
      <button class="ctl-btn" @click="stepOnce">Step</button>
      <button class="ctl-btn" @click="resetGrid">Reset</button>
      <button class="ctl-btn" @click="randomizeGrid">Random</button>
      <select v-model.number="gridSize" class="ctl-select" @change="changeSize">
        <option :value="16">16 x 16</option>
        <option :value="24">24 x 24</option>
        <option :value="32">32 x 32</option>
      </select>
      <button class="ctl-btn" @click="$emit('close')">Close</button>
    </div>

    <div class="text-sm mb-2">Generation: {{ generation }}</div>

    <div
      class="grid-board"
      :style="{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }"
    >
      <button
        v-for="(cell, index) in flatGrid"
        :key="index"
        class="cell"
        :class="cell ? 'alive' : 'dead'"
        @click="toggleCell(index)"
        :aria-label="`Cell ${index}`"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue';

const gridSize = ref(24);
const generation = ref(0);
const running = ref(false);
const frameMs = 220;
let intervalId: number | null = null;

const createEmptyGrid = (size: number): boolean[][] => {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => false));
};

const grid = ref<boolean[][]>(createEmptyGrid(gridSize.value));

const flatGrid = computed(() => grid.value.flat());

const stopLoop = () => {
  if (intervalId !== null) {
    window.clearInterval(intervalId);
    intervalId = null;
  }
  running.value = false;
};

const startLoop = () => {
  stopLoop();
  running.value = true;
  intervalId = window.setInterval(() => {
    tick();
  }, frameMs);
};

const toggleRunning = () => {
  if (running.value) {
    stopLoop();
    return;
  }
  startLoop();
};

const randomizeGrid = () => {
  generation.value = 0;
  grid.value = grid.value.map((row) => row.map(() => Math.random() > 0.72));
};

const resetGrid = () => {
  stopLoop();
  generation.value = 0;
  grid.value = createEmptyGrid(gridSize.value);
};

const countNeighbors = (rowIndex: number, colIndex: number) => {
  let neighbors = 0;

  for (let rowDelta = -1; rowDelta <= 1; rowDelta += 1) {
    for (let colDelta = -1; colDelta <= 1; colDelta += 1) {
      if (rowDelta === 0 && colDelta === 0) {
        continue;
      }
      const nextRow = rowIndex + rowDelta;
      const nextCol = colIndex + colDelta;
      if (nextRow < 0 || nextCol < 0 || nextRow >= gridSize.value || nextCol >= gridSize.value) {
        continue;
      }
      if (grid.value[nextRow][nextCol]) {
        neighbors += 1;
      }
    }
  }

  return neighbors;
};

const tick = () => {
  const next = createEmptyGrid(gridSize.value);
  for (let rowIndex = 0; rowIndex < gridSize.value; rowIndex += 1) {
    for (let colIndex = 0; colIndex < gridSize.value; colIndex += 1) {
      const alive = grid.value[rowIndex][colIndex];
      const neighbors = countNeighbors(rowIndex, colIndex);
      next[rowIndex][colIndex] = neighbors === 3 || (alive && neighbors === 2);
    }
  }
  grid.value = next;
  generation.value += 1;
};

const stepOnce = () => {
  tick();
};

const changeSize = () => {
  resetGrid();
  grid.value = createEmptyGrid(gridSize.value);
};

const toggleCell = (flatIndex: number) => {
  const rowIndex = Math.floor(flatIndex / gridSize.value);
  const colIndex = flatIndex % gridSize.value;
  grid.value[rowIndex][colIndex] = !grid.value[rowIndex][colIndex];
};

onBeforeUnmount(() => {
  stopLoop();
});
</script>

<style scoped>
.ctl-btn {
  border: 1px solid var(--primary-bg);
  background: transparent;
  color: var(--primary-bg);
  font-size: 0.82rem;
  padding: 0.35rem 0.7rem;
}

.ctl-select {
  border: 1px solid var(--primary-bg);
  background: var(--bg);
  color: var(--primary-bg);
  font-size: 0.82rem;
  padding: 0.35rem 0.5rem;
}

.grid-board {
  display: grid;
  gap: 2px;
}

.cell {
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 1px solid var(--primary-fg);
}

.alive {
  background: var(--primary-bg);
}

.dead {
  background: var(--bg);
}

@media (max-width: 640px) {
  .ctl-btn,
  .ctl-select {
    font-size: 0.78rem;
    padding: 0.4rem 0.65rem;
  }
}
</style>
