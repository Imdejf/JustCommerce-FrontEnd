import { createRouter, createWebHashHistory } from 'vue-router'
import routesParams from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesParams
})

router.beforeEach((to, from) => {
 
})

export default router