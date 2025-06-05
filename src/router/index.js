import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import EstudianteView from '../views/EstudianteView.vue'
import EstudianteTablaView from '../views/EstudianteTablaView.vue'
import MotoView from '../views/MotoView.vue'
import PokemonView from '../views/PokemonView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Estudiante/:apellido',
    name: 'EstudianteView',
    component: EstudianteView
  },
  ,
  {
    path: '/Estudiante/tabla',
    name: 'EstudianteTablaView',
    component: EstudianteTablaView
  },
   {
    path: '/Moto',
    name: 'MotoView',
    component: MotoView
  },
  {
    path: '/pokemon',
    name: 'PokemonView',
    component: PokemonView
  },
  {
    path: '/ContadorView',
    name: 'ContadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ContadorView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/HolaMundoVue',
    name: 'HolaMundoVue',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HolaMundoVue.vue')
  }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
