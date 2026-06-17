import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([
    { id: 1, name: 'Buy groceries', done: false, dueDate: 'Jun 16' },
    { id: 2, name: 'Call the dentist', done: false, dueDate: 'Jun 17' },
    { id: 3, name: 'Clean the apartment', done: false, dueDate: 'Jun 18' },
  ])
  return { tasks }
})
