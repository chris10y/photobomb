import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
	  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  routes
})

export default router
