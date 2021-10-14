<template>
  <div>
    <navbar/>
    <usuario/>
  </div>
</template>


<script>
import Login from "../components/Login.vue";
import Navbar from '../components/Navbar.vue';

export default {
  components: {Login, Navbar },
};
</script>