<template>
  <div>
      <navbar/>
    <tiendas/>
  </div>
</template>


<script>
import Tiendas from "../components/Tiendas.vue";
import Navbar from '../components/Navbar.vue';

export default {
  components: { Tiendas, Navbar },
};
</script>