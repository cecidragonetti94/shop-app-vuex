import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    carrito:{},
    favoritos: {}
   
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
      // console.log("carrito",state.carrito)
  
    },
    setVaciar(state){
      state.carrito = {}
    
    },
    aumentar(state,payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1
      // console.log("aumentar", state.carrito[payload].cantidad)
    },
    disminuir(state,payload){
      state.carrito[payload].cantidad = state.carrito[payload].cantidad -1
      if(state.carrito[payload].cantidad ===0){
        delete state.carrito[payload]
      }
      // console.log("disminuir", state.carrito[payload].cantidad)
    },
    setFavoritos(state,payload){
      state.favoritos = payload
    }
   
  
  },
  actions: {
    async getCategories({commit}){
      await axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        commit('setCategories', response.data)
        // console.log("categtories",response.data)
      })
    },

    async getProducts({commit},item){
     
      console.log("el item", item)
      await axios.get(`https://fakestoreapi.com/products/category/${item}`)
      .then(response => {
        commit('setProducts', response.data)
        // console.log("data",response.data)
      })
    
    },
    agregarCarrito({commit,state}, item){
        state.carrito.hasOwnProperty(item.id)// si hay un indice no vacio en carrito
        ? item.cantidad = state.carrito[item.id].cantidad + 1
        : item.cantidad = 1
         commit('setCarrito', item)
         // console.log("item", item)
      }
      
    },
   
 
  getters:{
    totalCantidad(state){
      return Object.values(state.carrito).reduce((acc,{cantidad})=> acc + cantidad,0)
      //suma de todos los item
    },
    totalPrecio(state){
      return Object.values(state.carrito).reduce((acc, {cantidad,price})=> acc + cantidad * price,0)
    },
    
  },

  modules: {
  }
})
