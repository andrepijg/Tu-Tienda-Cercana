import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    users: []
  },
  mutations: {
    setProductos(state, payload) {
      state.productos = payload;
    },

    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {

    async getProductos({ commit }) {
      const peticion = await fetch('http://localhost:3000/productos');
      const data = await peticion.json();
      console.log(data);
      commit('setProductos', data);
    },
    async deleteProductos({ commit }, productos) {
      const peticion = await fetch('http://localhost:3000/productos', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productos)
      });
    },
    async insertProductos({ commit }, productos) {
      const peticion = await fetch('http://localhost:3000/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productos)
      });
    },
    async updateProductos({ commit }, productos) {
      const peticion = await fetch('http://localhost:3000/productos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productos)
      });
    },

    async getUsers({ commit }) {
      const peticion = await fetch('http://localhost:3000/users');
      const data = await peticion.json();
      console.log(data);
      commit('setUsers', data);
    },
    async deleteUsers({ commit }, users) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
    },
    async insertUsers({ commit }, users) {
      const peticion = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
    },
    async updateUsers({ commit }, users) {
      const peticion = await fetch('http://localhost:3000/productos', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(users)
      });
    },

  },


  modules: {
  }
})