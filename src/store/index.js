import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    carrito:{},
   
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload
    },
    setCategories(state,payload){
      state.categories=payload
    },
    setCarrito(state,payload){
       state.carrito[payload.id] = {...payload}
      console.log("carrito",state.carrito)
    }
   
  
  },
  actions: {
    async getCategories({commit}){
      await axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        commit('setCategories', response.data)
        console.log("categtories",response.data)
      })
    },

    async getProducts({commit},item){
     
      console.log("el item", item)
      await axios.get(`https://fakestoreapi.com/products/category/${item}`)
      .then(response => {
        commit('setProducts', response.data)
        console.log("data",response.data)
      })
    
    },
    agregarCarrito({commit,state}, products){
      state.carrito.hasOwnProperty(products.id)// si hay un indice no vacio en carrito
      ? products.cantidad = state.carrito[products.id].cantidad + 1
      : products.cantidad = 1
      commit('setCarrito', products)
  
    }
    
  },

  modules: {
  }
})
