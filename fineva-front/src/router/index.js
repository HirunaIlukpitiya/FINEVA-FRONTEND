import { createRouter, createWebHistory } from 'vue-router'
import store from "../store"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/",
      name:"Home",
      component:()=>import('../views/Home.vue')
    },
    {
      path:"/signIn",
      name:"signIn",
      component:()=>import('../views/Signin.vue')

    },
    {
      path:"/driverReg",
      name:"driverReg",
      component:()=>import('../views/driverReg.vue'),
    },
    {
      path:"/policeReg",
      name:"policeReg",
      component:()=>import('../views/policeReg.vue'),
    },
    {
      path:"/policeHome",
      name:"policeHome",
      component:()=>import('../views/policeHome.vue'),
    },
    {
      path:"/policeResult",
      name:"policeResult",
      component:()=>import('../views/policeResult.vue')
    },
    {
      path:"/policeAddfine",
      name:"policeAddfine",
      component:()=>import('../views/policeAddfine.vue')
    },
    {
      path:"/driverHome",
      name:"driverHome",
      component:()=>import('../views/driverHome.vue')
    },
    {
      path:"/payment",
      name:"payment",
      component:()=>import('../views/payment.vue')
    },
  ]
})

export default router
