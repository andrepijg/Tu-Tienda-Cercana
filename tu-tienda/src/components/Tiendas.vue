<template>
  <div id="team" class="mt-200 mb-200">
    <br>
    <br>
    <h2>TIENDAS</h2>
    <br>
    <br>
    <div class="container-fluid col-12 row mt-200px mb-3">
      <b-card
        deck
        v-for="item in productos"
        :key="item._id"
        style="max-width:20rem"
        text-variant="white"
      >
        <b-card-body>
          <b-img
            center
            src="https://i.ibb.co/7g6Lh9m/logo-20180910-114107.png"
            alt="image"
            width="80"
            class="mb-20"            
          >
          </b-img>

          <b-card-title class="mt-10"
            ><strong>{{ item.nombre_tienda }}</strong></b-card-title
          >
          <b-card-sub-title text-variant="white" class="card-sub mb-2 mt-4"
            ><p><strong>Teléfono:</strong>{{item.telefono_tienda}}</p></b-card-sub-title
          >
          <b-card-sub-title text-varitan="white" class="card-sub mb-2 mt-4"
            ><p><strong>Email:  </strong>  {{ item.email_tienda }}</p></b-card-sub-title
          >
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import store from "../store/index.js";
import db from "@/database";

export default {
  data() {
    return {};
  },

  methods: {
    eliminarProductos(id) {
      let obj = { id };
      store.dispatch("deleteProductos", obj).then(() => {
        store.dispatch("getProductos");
      });
    },

    insertarProductos() {
      let obj = {
        nombre_tienda: this.form.nombre_tienda,
        telefono_tienda: this.form.telefono_tienda,
        email_tienda: this.form.email_tienda,
        tipo_producto: this.form.tipo_producto,
        nombre_producto: this.form.nombre_producto,
        precio_kg: this.form.precio_kg,
        url_img: this.form.url_img,
      };

      console.log("producto -->", obj);
      store.dispatch("insertProductos", obj).then(() => {
        store.dispatch("getProductos");
      });
    },
    
    db.productos.aggregate( [
      {$group:nombre_tienda}
    ])
  },

  created: () => {
    //accede a las acciones del store
    store.dispatch("getProductos");
  },

  computed: {
    productos: () => {
      return store.state.productos;
    },
  },

  
};
</script>

<style scoped>

:root {
  --green: #2f7a2c;
  --yellow: #f4a94d;
  --letter: #eceeec;
  --hueso: #faf7ee;
 
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------Jorge-estilos-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
.card {
  font-family: "Poppins";
  color: var(--hueso);
  align-content: center;
  background-color: #2f7a2c;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 6px 21px -1px #000000;
  border: none;
}

.card-body p {
  background-color: var(--green);
  padding: 10px;
  font-family: "Krub";
  color: var(--hueso);
  text-align: justify;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
  color: var(--hueso);
  width: 200px;
  height: 50px;
  background: var(--amarillo);
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
}


</style>
