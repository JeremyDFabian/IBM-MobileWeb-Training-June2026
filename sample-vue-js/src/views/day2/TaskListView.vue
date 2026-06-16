<!-- ─── TaskListView.vue — parent component ─── -->
<script setup>
import { ref } from 'vue'
import TaskCard from '../../components/TaskCard.vue'

// TODO 1: Hold a tasks ref array with at least 3 sample tasks
const tasks = ref([
  { id: 1, name: 'Buy groceries', done: false, dueDate: 'Jun 16' },
  { id: 2, name: 'Call the dentist', done: false, dueDate: 'Jun 17' },
  { id: 3, name: 'Clean the apartment', done: false, dueDate: 'Jun 18' },
])

// TODO 2: Handle @complete → toggle that task's done property
function handleComplete(id) {
  const task = tasks.value.find(t => t.id === id)
  if (task) task.done = !task.done
}

// TODO 3: Handle @delete → remove that task from the array
function handleDelete(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <div class="task-list-view">
    <h2 class="list-title">My Tasks</h2>

    <!-- TODO 4: Render a TaskCard for each task using v-for -->
    <!--         Pass :task, listen @complete and @delete -->
    <!--         Fill the "meta" named slot with the due date -->
    <TaskCard
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @complete="handleComplete"
      @delete="handleDelete"
    >
      <!-- TODO 5: Fill the "meta" named slot with the due date -->
      <template #meta>Due: {{ task.dueDate }}</template>
    </TaskCard>

    <p v-if="tasks.length === 0" class="empty">No tasks left!</p>
  </div>
</template>

<style scoped>
.task-list-view {
  max-width: 540px;
  margin: 48px auto;
  padding: 0 16px;
  text-align: left;
}
.list-title {
  font-size: 22px;
  font-weight: 700;
  color: #1b2a4a;
  margin-bottom: 20px;
}
.empty {
  text-align: center;
  color: #9ca3af;
  font-size: 14px;
  margin-top: 32px;
}

@media (prefers-color-scheme: dark) {
  .list-title {
    color: #f3f4f6;
  }
}
</style>
