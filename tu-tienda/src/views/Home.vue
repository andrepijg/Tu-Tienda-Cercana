<template>
  <div class="home">
  <navbar/>
  <carousel/>
  <productos/>
  <productos-lista/>
  <tiendas/>
  <news/>
  <pie/>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import Carousel from '../components/Carousel.vue'
import Productos from '../components/Productos.vue'
import Productos_Int from '../components/Productos_Int.vue'
import News from '../components/News.vue'
import Pie from '../components/Pie.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    Carousel,
    Productos,
    Productos_Int,
    News,
    Pie
  }
}
</script>
