<template>
  <div id="cards" class="container-fluid row mt-200 mb-3">
    <b-card
      deck
      v-for="item in productos"
      :key="item._id"
      no-body
      style="max-width: 20rem"
    >
      <b-card-header>
        <b-card-img :src="item.url_img" alt="Image" top></b-card-img>
      </b-card-header>
      <b-card-body>
        <b-card-title>{{ item.nombre_producto }}</b-card-title>
        <b-card-sub-title class="mb-2">{{
          item.tipo_producto
        }}</b-card-sub-title>
      </b-card-body>

      <b-list-group flush>
        <b-list-group-item>{{ item.nombre_tienda }}</b-list-group-item>
        <b-list-group-item>{{ item.telefono_tienda }}</b-list-group-item>
      </b-list-group>
      <b-card-body>
        <h4>$ {{ item.precio_kg }}</h4>
      </b-card-body>

      <b-card-body>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import store from "../store/index.js";

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

<style>
card {
  margin-top: 250px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 30px;
  box-shadow: 1px 6px 21px -1px #000000;
  border: none;
  padding-top: 200px;
}

#cards .container-fluid  {
  margin: 150px;
}
</style>
