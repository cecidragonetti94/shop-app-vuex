import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    cate: null,
  },
  mutations: {
    setProducts(state,payload){
      state.products = payload
    },
    setCategories(state,payload){
      state.categories=payload
    },
    setClick(state,payload){
      state.cate = payload
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
      commit('setClick', item)
      console.log("el item", item)
      await axios.get(`https://fakestoreapi.com/products/category/${item}`)
      .then(response => {
        commit('setProducts', response.data)
        console.log("data",response.data)
      })
    
    
    },
    clickSelect({commit},item){
      commit('setClick', item)
      console.log("el item", item)
    }
  },
  // getters:{
  //   setCategoriesGetter(param){
  //     this.cate = param
  //   }
  // },
  modules: {
  }
})
