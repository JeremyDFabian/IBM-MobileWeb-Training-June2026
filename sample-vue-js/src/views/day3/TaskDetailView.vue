<!--
=============================================================
  DAY 3 ASSIGNMENT — TaskDetailView.vue
  Displays full details for a single task
=============================================================
-->
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'

// TODO 1: Get the current route and router instances
// const route  = useRoute()
// const router = useRouter()
const route  = useRoute()
const router = useRouter()

const taskStore = useTaskStore()

// TODO 2: Find the task matching the route param
// Remember: route.params.id is a STRING — cast to Number before comparing
// const task = computed(() => taskStore.tasks.find(t => t.id === Number(???)))
const task = computed(() => taskStore.tasks.find(t => t.id === Number(route.params.id)))

// TODO 3: Write goBack() using router.push() to navigate to '/home'
function goBack() {
  // your code here
  router.push('/home')
}
</script>

<template>
  <div class="detail-view">

    <!-- TODO 4: Show this only if task is found (v-if="task") -->
    <!-- <div v-if="task"> -->
    <div v-if="task">
      <button class="back-btn" @click="goBack">← Back</button>

      <!-- TODO 5: Display task.name, task.dueDate, and task.done status -->
      <h1>{{ task.name }}</h1>
      <p>Status: {{ task.done ? 'Done' : 'Pending' }}</p>
      <p>Due: {{ task.dueDate }}</p>
    </div>

    <!-- This case is handled by the router guard, but good to have a fallback -->
    <div v-if="!task">
      <p>Task not found.</p>
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<style scoped>
.detail-view {
  max-width: 540px;
  margin: 48px auto;
  padding: 0 16px;
  font-family: Arial, sans-serif;
  text-align: left;
}

.back-btn {
  background: none;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 16px;
  transition: background 0.15s, transform 0.1s;
}
.back-btn:hover { background: #f3f4f6; }
.back-btn:active { transform: scale(0.96); }

.detail-view > div:first-child {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px 18px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

h1 {
  font-size: 20px;
  font-weight: 700;
  color: #1b2a4a;
  margin: 0 0 12px;
  letter-spacing: normal;
}

p {
  font-size: 14px;
  color: #9ca3af;
  margin: 6px 0;
}

@media (prefers-color-scheme: dark) {
  .back-btn { border-color: #2e303a; color: #9ca3af; }
  .back-btn:hover { background: #1f2028; }
  .detail-view > div:first-child {
    background: #1f2028;
    border-color: #2e303a;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  h1 { color: #f3f4f6; }
}
</style>
