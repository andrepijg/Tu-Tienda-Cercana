<template>
  <div >
    <section id="team" class="container-fluid row">
      <h2>Tiendas</h2>
      <section
        v-for="item in productos"
        :key="item._id"
        class="container col-12"
      >
        <article class="card card-1  row">
          <img
            src="https://i.ibb.co/7g6Lh9m/logo-20180910-114107.png"
            alt="logo-20180910-114107"
          />

          <p>
            <strong>Nombre: </strong> {{ item.nombre_tienda }} 
          </p>
          <p>
            Teléfono: <strong>{{ item.telefono_tienda }} </strong>
          </p>
          <p class="ultima">
            E-mail <strong> {{ item.email_tienda }} </strong>
          </p>
        </article>
      </section>
    </section>
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
:root {
  --green: #2f7a2c;
  --backgroud: #faf7ef;
  --yellow: #f4a94d;
  --letter: #eceeec;
  --hueso: #faf7ee;
  --verde: #2f7a2c;
  --amarillo: #ffab49;
  --gris-oscuro: #444444;
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------------------Jorge-estilos-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
h2 {
  font-size: 1.4rem;
  background: var(--amarillo);
  padding: 10px;
  border-radius: 10px;
}

#team h2 {
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

#team {
  width: 100%;
  min-width: 320px;
}

#team .container {
  display: flex;
  flex-wrap: inherit;
  justify-content: center;
  position: relative;
}

#team .container .card {
  width: 300px;
  height: 370px;
  margin: 20px;
  display: grid;
  grid-template-columns: 100%;
  box-shadow: 1px 6px 21px -1px #000000;
  position: relative;
  border-radius: 10px;
  background: var(--green);
}

#team .container .card img {
  width: 80px;
  height: 60px;
  border-radius: 20px;
  display: flex;
  justify-self: center;
  align-self: center;
  background-color: var(--green);
}

#team .container .card p {
  color: var(--letter);
  background: var(--green);
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  /* font-size: 2rem; */
}

.card a {
  justify-self: center;
  align-self: center;
}

.card p {
  color: var(--letter);
  font-weight: 600;
  font-size: 20px;
  background: var(--green);
}

.card p strong {
  background: var(--green);
  color: var(--letter);
}

.card a button {
  text-decoration: none;
  font-size: 20px;
  color: var(--letter);
  background: var(--yellow);
  border-radius: 30px;
  width: 200px;
  height: 40px;
  justify-self: center;
  align-self: center;
  border: none;
  left: 45px;
  top: 320px;
  position: absolute;
  transition: transform 0.2s;
}

.card a button:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
