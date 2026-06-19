<script setup>
import { computed } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()

const total = computed(() => taskStore.tasks.length)
const done = computed(() => taskStore.tasks.filter(t => t.done).length)
const pending = computed(() => total.value - done.value)
</script>

<template>
  <div class="stats-view">
    <h1>📊 Stats</h1>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-number">{{ total }}</span>
        <span class="stat-label">Total</span>
      </div>
      <div class="stat-card done">
        <span class="stat-number">{{ done }}</span>
        <span class="stat-label">Done</span>
      </div>
      <div class="stat-card pending">
        <span class="stat-number">{{ pending }}</span>
        <span class="stat-label">Pending</span>
      </div>
    </div>

    <RouterLink to="/home" class="back-link">← Back to Tasks</RouterLink>
  </div>
</template>

<style scoped>
.stats-view {
  max-width: 540px;
  margin: 48px auto;
  padding: 0 16px;
  font-family: Arial, sans-serif;
  text-align: left;
}

h1 {
  font-size: 22px;
  font-weight: 700;
  color: #1b2a4a;
  margin: 0 0 24px;
  letter-spacing: normal;
}

.stats-grid {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}

.stat-card {
  flex: 1;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.stat-card.done    { border-color: #86efac; background: #f0fdf4; }
.stat-card.pending { border-color: #fcd34d; background: #fffbeb; }

.stat-number {
  font-size: 36px;
  font-weight: 700;
  color: #1b2a4a;
  line-height: 1;
}
.stat-card.done    .stat-number { color: #16a34a; }
.stat-card.pending .stat-number { color: #d97706; }

.stat-label {
  font-size: 13px;
  font-weight: 600;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.back-link {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
}

@media (prefers-color-scheme: dark) {
  h1 { color: #f3f4f6; }
  .stat-card {
    background: #1f2028;
    border-color: #2e303a;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  .stat-card.done    { background: #052e16; border-color: #166534; }
  .stat-card.pending { background: #1c1107; border-color: #92400e; }
  .stat-number { color: #f3f4f6; }
}
</style>
