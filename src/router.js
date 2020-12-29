// router.js
import { RouterMount, createRouter } from 'uni-simple-router'

console.log(ROUTES)
const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [
    ...ROUTES,
    {
      path: '*',
      redirect: () => ({ name: '404' }),
    },
  ],
})
// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  next()
})

export { router, RouterMount }
