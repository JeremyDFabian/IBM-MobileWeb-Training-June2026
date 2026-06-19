// =============================================================
//  DAY 5 ROUTER — routes for the Todo List (API Integration)
// =============================================================

import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '@/views/day4/TaskListView.vue'
import TodoListView from '@/views/day 5/TodoListView.vue'

const routes = [
  { path: '/', redirect: '/todos' },
  { path: '/tasks', component: TaskListView },
  { path: '/todos', component: TodoListView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
