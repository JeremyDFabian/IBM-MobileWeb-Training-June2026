// =============================================================
//  DAY 4 ROUTER — routes for the Pinia task list
// =============================================================

import { createRouter, createWebHistory } from 'vue-router'
import TaskListView from '@/views/day4/TaskListView.vue'

const routes = [
  { path: '/', redirect: '/tasks' },
  { path: '/tasks', component: TaskListView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
