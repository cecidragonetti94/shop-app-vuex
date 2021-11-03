import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload
    },
    setCategories(state,payload){
      state.categories=payload
    }
  },
  actions: {
    async getProducts({commit}){
      
    await axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(response => {
        commit('setProducts', response.data)
      })
    }
  },
  modules: {
  }
})
