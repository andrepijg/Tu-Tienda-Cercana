import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import ProductosInt from '../views/Productos.vue'
import RegistroProductos from '../views/RegistroProductos.vue'
import Tiendas from '../views/Tiendas'


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
    component: ProductosInt
  },

  {
    path: '/registro-productos',
    name: 'registro',
    component: RegistroProductos
  },

  {
    path: '/tiendas',
    name: 'tiendas',
    component: Tiendas
  },

      
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
