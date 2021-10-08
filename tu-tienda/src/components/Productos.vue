<template>
  <div class="container mt-500 mb-400 text-center">
    <div class="card mb-3 mt-500 mb-100">
      <img
        src="https://res.cloudinary.com/dgjrfgl2e/image/upload/v1633319763/Tu%20Tienda%20Cercana/productos_zqgusu.png"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <div id="wraper">
          <b-button class="btn" variant="warning" href="/productos-lista">IR</b-button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Productos",
};
</script>

<style scoped>


.btn{
  width: 200px;
  height: 50px;
  font-family: "Poppins";
  border-radius: 15px;  
  text-decoration: none;  
  font-size: 20px;
  color: var(--letter);
  background: var(--yellow);
  border-radius: 30px;
  justify-self: center;
  align-self: center;
  border: none;
  position: inherit;
  transition: transform 0.2s;
  
  
}





</style>