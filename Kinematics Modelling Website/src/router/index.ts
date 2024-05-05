import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('../views/TaskMaster.vue'),
      children: [
        {
          path: 'overview',
          name: 'taskOverviews',
          component: () => import('../views/tasks/TaskOverviews.vue')
        },
        {
          path: 'task1',
          name: 'task1',
          component: () => import('../views/tasks/TaskOne.vue')
        },
        {
          path: 'task2',
          name: 'task2',
          component: () => import('../views/tasks/TaskTwo.vue')
        },
        {
          path: 'task3',
          name: 'task3',
          component: () => import('../views/tasks/TaskThree.vue')
        }
      ]
    },
    {
      path: '/writeup',
      name: 'writeup',
      component: () => import('../views/WriteUp.vue')
    }
  ]
})

export default router