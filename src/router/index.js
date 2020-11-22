import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contador from '../views/Contador.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contador',
    name: 'Contador',
    component: Contador
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/paises',
    name:'Paises',
    component: () => import('../views/Paises.vue')
  },
  {
    // creando una ruta dinamica para cada pais
    path: '/paises/:nombre',
    name:'Pais',
    // activamos los true para poder acceder al nombre en los params de la url de la ruta dinamica
    props:true,
    component: () => import('../views/Pais.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
