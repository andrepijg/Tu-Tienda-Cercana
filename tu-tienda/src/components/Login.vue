<template>
    <div>
    <b-form @submit.prevent="buscarUsuario()" v-if="show">
        
      <b-form-group
        id="input-group-1"
        label="Nombre usuario:"
        label-for="input-1"
              >
        <b-form-input
          id="input-1"
          v-model="form.username"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          placeholder="Ingresar COntraseña"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    </div>
</template>

<script>
export default {
    form:{
        usesrname:"",
        password:""
    },
    show: true,

    methods: {
    buscarUsuario(){
        console.log("Se ejecuta la función")

    }

}
}

</script>

<style>

</style>