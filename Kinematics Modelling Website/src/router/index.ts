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
        },
        {
          path: 'task4',
          name: 'task4',
          component: () => import('../views/tasks/TaskFour.vue')
        },
        {
          path: 'task5',
          name: 'task5',
          component: () => import('../views/tasks/TaskFive.vue')
        },
        {
          path: 'task6',
          name: 'task6',
          component: () => import('../views/tasks/TaskSix.vue')
        },
        {
          path: 'task7',
          name: 'task7',
          component: () => import('../views/tasks/TaskSeven.vue')
        },
        {
          path: 'task8',
          name: 'task8',
          component: () => import('../views/tasks/TaskEight.vue')
        },
        {
          path: 'task9',
          name: 'task9',
          component: () => import('../views/tasks/TaskNine.vue')
        },
        {
          path: 'extension1',
          name: 'extension1',
          component: () => import('../views/tasks/ExtensionOne.vue')
        },
        {
          path: 'extension2',
          name: 'extension2',
          component: () => import('../views/tasks/ExtensionTwo.vue')
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
