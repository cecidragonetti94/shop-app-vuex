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
    async getCategories({commit}){
      await axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        commit('setCategories', response.data)
      })
    },

    async getProducts({commit,state}){
    const map = state.categories.map(cate => (cate.categories))
    try {
      await axios.get(`https://fakestoreapi.com/products/category/${map}`)
      .then(response => {
        commit('setProducts', response.data)
        console.log("data",response.data)
      })
    } catch (error) {
      console.log(error)
    } 
    
    }
  },
  modules: {
  }
})
