import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Productos_Int from '../views/Productos.vue'
import RegistroProductos from '../views/RegistroProductos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },

  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },

  {
    path: '/productos-lista',
    name: 'Productos',
    component: Productos_Int
  },

  {
    path: '/registro-productos',
    name: 'registro',
    component: RegistroProductos
  },

      
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
