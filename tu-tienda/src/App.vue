<template>

  <div id="app">
    <div class="barra">

      <router-link to="/">Inicio</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/registro-productos">Registro</router-link> |
      <router-link to="/productos-lista">Productos</router-link> |   

      <router-view />
    </div>
  </div>
</template>
