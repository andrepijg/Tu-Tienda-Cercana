<template>
  <div>
    <b-card class="container-fluid col-4">
      <b-form v-if="show">
        <h2>REGISTRO PRODUCTOS</h2>
        <b-form-group
          id="input-group-1"
          label="Nombre Tienda:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.nombre_tienda"
            placeholder="Ingresar nombre de la Tienda"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Telefono:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.telefono_tienda"
            placeholder="Ingresar Teléfono"
            type="number"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="E-mail:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.email_tienda"
            type="email"
            placeholder="Ingresar email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Tipo Producto:"
          label-for="input-4"
        >
          <b-form-select
            id="input-4"
            v-model="form.tipo_producto"
            :options="tipo_producto"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-5"
          label="Nombre Producto:"
          label-for="input-5"
        >
          <b-form-select
            id="input-5"
            v-model="form.nombre_producto"
            :options="nombre_producto"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group
          id="input-group-7"
          label="Precio por Kilo"
          label-for="input-7"
        >
          <b-input-group prepend="$">
            <b-form-input
              id="input-7"
              v-model="form.precio_kg"
              placeholder="Ingresar precio Kg"
              type="number"
              required
            >
            </b-form-input>
          </b-input-group>

          <b-form-group id="input-group-8" label="Imagen:" label-for="input-8">
            <b-form-select
              id="input-8"
              v-model="form.url_img"
              :options="url_img"
              required
            ></b-form-select>
          </b-form-group>
        </b-form-group>

        <b-button
          v-if="id == null"
          v-on:click="insertarProductos()"
          variant="success"
          class="btn my-10"
          >Registrar</b-button
        >
        <b-button
          v-if="id !== null"
          v-on:click="actualizarProductos(id)"
          variant="primary"
          class="btn my-10"
          >Actualizar</b-button
        >

        <b-button 
        type="reset" 
        variant="danger">
        Limpiar</b-button>
        
      </b-form>
    </b-card>

    <!-- Tabla con los registros generados luego del registro -->
    <div class="container-fluid col-10">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre Tienda</th>
            <th scope="col">Telefono</th>
            <th scope="col">Email</th>
            <th scope="col">Tipo Producto</th>
            <th scope="col">Nombre Producto</th>
            <th scope="col">Precio Kg</th>
            <th scope="col">Cambiar/Borrar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in productos" :key="item._id">
            <td>{{ item.nombre_tienda }}</td>
            <td>{{ item.telefono_tienda }}</td>
            <td>{{ item.email_tienda }}</td>
            <td>{{ item.tipo_producto }}</td>
            <td>{{ item.nombre_producto }}</td>
            <td>$ {{ item.precio_kg }}</td>
            <td>
              <b-button
                @click="eliminarProductos(item._id)"
                variant="danger"
                rounded
                small
              >
                Borrar
              </b-button>

              <b-button
                @click="
                  btnActualizar(
                    item._id,
                    item.nombre_tienda,
                    item.telefono_tienda,
                    item.email_tienda,
                    item.tipo_producto,
                    item.nombre_producto,
                    item.precio_kg,
                    item.url_img
                  )"
                variant="primary"
                rounded
                small
              >
                Cambiar
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import store from "../store/index.js";

export default {
  data() {
    return {
      form: {
        nombre_tienda: null,
        telefono_tienda: null,
        email_tienda: null,
        tipo_producto: null,
        nombre_producto: null,
        precio_kg: null,
        url_img: null,
      },
      tipo_producto: [
        { text: "Seleccione uno", value: null },
        "Frutas",
        "Verduras",
        "Carnes",
      ],

      nombre_producto: [
        { text: "Seleccione uno", value: null },
        "Ajo",
        "Banano",
        "Coco",
        "Kiwi",
        "Lomo",
        "Mango",
        "Manzana Roja",
        "Pechuga",
        "Pepino",
        "Piña",
        "Sobrebarriga",
        "Tomate",
        "Zanahoria",
        "Naranja",
      ],

      url_img: [
        { text: "Seleccione uno", value: null },
        "https://bit.ly/Ajo_",
        "https://bit.ly/Banano_",
        "https://bit.ly/Coco_coco",
        "https://bit.ly/Kiwi_Kiwi",
        "https://bit.ly/Lomo_res",
        "https://bit.ly/Mango_oneco",
        "https://bit.ly/Manzana_Roja",
        "https://bit.ly/Naranja_Naranja",
        "https://bit.ly/Pechuga_",
        "https://bit.ly/Pepino_",
        "https://bit.ly/Piña_",
        "https://bit.ly/Sobrebarriga_",
        "https://bit.ly/Tomate_Tomate",
        "https://bit.ly/Zanahoria_",
      ],
      show: true,
    };
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
      this.form.nombre_tienda = "";
      this.form.telefono_tienda = "";
      this.form.email_tienda = "";
      this.form.tipo_producto = null;
      this.form.nombre_producto = null;
      this.form.precio_kg = "";
      this.form.url_img = null;

    },

    actualizarProductos(id) {
      let obj = {
        id: id,
        nombre_tienda: this.form.nombre_tienda,
        telefono_tienda: this.form.telefono_tienda,
        email_tienda: this.form.email_tienda,
        tipo_producto: this.form.tipo_producto,
        nombre_producto: this.form.nombre_producto,
        precio_kg: this.form.precio_kg,
        url_img: this.form.url_img,
      };
      store.dispatch("updateProductos", obj).then(() => {
        store.dispatch("getProductos");
        this.id = null; //volver id nulo
      });
    },

    btnActualizar(id, nombre_tienda, telefono_tienda, email_tienda, tipo_producto, nombre_producto, precio_kg, url_img) {
      this.id = id;
      this.form.nombre_tienda = nombre_tienda;
      this.form.telefono_tienda = telefono_tienda;
      this.form.email_tienda = email_tienda;
      this.form.tipo_producto = tipo_producto;
      this.form.nombre_producto = nombre_producto;
      this.form.precio_kg = precio_kg;
      this.form.url_img = url_img;
    },

  onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.id = id;
      this.form.nombre_tienda = "";
      this.form.telefono_tienda = "";
      this.form.email_tienda = "";
      this.form.tipo_producto = null;
      this.form.nombre_producto = null;
      this.form.precio_kg = "";
      this.form.url_img = null;
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
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
  --hueso: #faf7ee;
  --gris-oscuro: #444444;
  font-family: "Poppins" "Krub";
}

.container-fluid {
  font-family: "Krub";
  background: var(--hueso);
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  margin-top: 100px;
}

.container-fluid h2 {
  font-family: "Poppins";
  color: var(--green);
  text-align: center;
}

.btn {
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
}
</style>