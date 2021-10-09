<template>
<div>
<navbar/>
<registro-productos />
</div>

</template>


<script>

import RegistroProductos from "../components/RegistroProductos.vue";
import Navbar from "../components/Navbar.vue"


export default {
  components: { RegistroProductos, Navbar},
};
</script>

