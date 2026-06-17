<!--
=============================================================
  DAY 3 ASSIGNMENT — HomeView.vue
  Shows the task list with router-link navigation to each task
=============================================================
-->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()
const route     = useRoute()

// TODO 1: Read route.query.error — if it equals 'notfound', show a warning banner
// const showErrorBanner = computed(() => ???)
const showErrorBanner = computed(() => route.query.error === 'notfound')
</script>

<template>
  <div class="home-view">
    <h1>📝 My Tasks</h1>

    <!-- TODO 2: Show a warning banner if showErrorBanner is true -->
    <!-- <div class="error-banner" v-if="showErrorBanner">
      ⚠️ Task not found. Redirected back to home.
    </div> -->
    <div class="error-banner" v-if="showErrorBanner">
      ⚠️ Task not found. Redirected back to home.
    </div>

    <nav class="page-nav">
      <!-- TODO 3: Add a RouterLink to /about -->
      <!-- <RouterLink to="/about">About</RouterLink> -->
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
    </nav>

    <!-- TODO 4: Render each task as a RouterLink to /task/:id -->
    <!-- Use <RouterLink :to="`/task/${task.id}`"> as the wrapper -->
    <ul class="task-list">
      <li v-for="task in taskStore.tasks" :key="task.id">
        <!-- TODO 5: Wrap this in a RouterLink -->
        <RouterLink :to="`/task/${task.id}`">
          <span :class="{ done: task.done }">{{ task.name }}</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.home-view {
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
  margin: 0 0 20px;
  letter-spacing: normal;
}

.error-banner {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 8px;
  padding: 10px 14px;
  margin-bottom: 16px;
  color: #92400e;
  font-size: 14px;
}

.page-nav {
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
}
.page-nav a {
  color: #42b883;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.15s;
}
.page-nav a.router-link-active {
  border-bottom-color: #42b883;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.task-list li {
  margin-bottom: 12px;
}
.task-list li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px 18px;
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.task-list li a:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #42b883;
}

.task-list span {
  font-weight: 600;
  font-size: 15px;
  color: #1b2a4a;
}
.done {
  text-decoration: line-through;
  color: #9ca3af !important;
}

@media (prefers-color-scheme: dark) {
  h1 { color: #f3f4f6; }
  .task-list li a {
    background: #1f2028;
    border-color: #2e303a;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
  .task-list li a:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    border-color: #42b883;
  }
  .task-list span { color: #f3f4f6; }
}
</style>
