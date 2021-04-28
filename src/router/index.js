import Vue from 'vue'
import VueRouter from 'vue-router'
import FormOne from '@/views/FormOne.vue'
import FormTwo from '@/views/FormTwo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/formone',
    name: 'FormOne',
    component: FormOne
  },
  {
    path: '/formtwo',
    name: 'FormTwo',
    component: FormTwo
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
