import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: []
  },
  mutations: {    
      setProductos(state, payload){
      state.productos = payload;
    }
  },
  actions: {  
    
    async getProductos({commit}){
      const peticion = await fetch('http://localhost:3000/productos');
      const data = await peticion.json();
      console.log(data);
      commit('setProductos', data);
    },
    async deleteProductos({commit}, productos){
      const peticion = await fetch('http://localhost:3000/productos', {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(productos)
      });
    }
  },

  async insertProductos({commit}, productos){
    const peticion = await fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(productos)
    });
  },


  modules: {
  }
})