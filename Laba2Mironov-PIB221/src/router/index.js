import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/views/ProductsPage.vue')
  },
  {
    path: '/receptionists',
    name: 'Receptionists',
    component: () => import('@/views/ReceptionistsPage.vue'),
  },
  {
    path: '/product-edit/:id?',
    name: 'ProductEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/ProductEdit.vue'),
  },
  {
    path: '/receptionist-edit/:id?',
    name: 'ReceptionistEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/ReceptionistEdit.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/ProductsPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
