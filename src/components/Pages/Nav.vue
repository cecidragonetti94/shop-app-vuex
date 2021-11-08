<template>
  <div>
    <v-app-bar color="secondary" dense dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Shopping App
        <v-avatar>
            <img
              src="https://png.pngtree.com/element_our/png_detail/20181229/vector-shop-icon-png_302739.jpg"
              alt=""
            />
          </v-avatar>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon to="/favoritos"> 
        <v-icon>fa-heart</v-icon>
      </v-btn>

      <v-btn icon to="/compras">
        <v-icon>fa-cart-plus</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>fa-ellipsis-v</v-icon>
          </v-btn>
        </template>

      <ItemUser/>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      dark
      align-center
      color="secondary"
    >
      <v-container class="mt-4 text-center">
        <v-col>
          <v-avatar>
            <img
              src="https://png.pngtree.com/element_our/png_detail/20181229/vector-shop-icon-png_302739.jpg"
              alt=""
            />
          </v-avatar>
        </v-col>
        <v-col>
          <p class="white--text nt-3 headline">Shopping App</p>
        </v-col>
       
        <v-col>
          <v-btn
            block
            color="primary"
            elevation="2"
            outlined
            raised
            rounded
            to="/"
            >Home</v-btn
          >
        </v-col>
         <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn  block
            elevation="2"
            outlined
            raised
            rounded
            color="primary" v-bind="attrs" v-on="on">
            Categories
          </v-btn>
        </template>
        <v-list color="primary">
          <v-list-item  v-model="select" v-for="item in categories" :key="item"  @click="getProducts(item)">
        
            <v-btn block rounded outlined
            raised color="secondary" text-center v-model="select" to="/categories"> {{item}} </v-btn>
          </v-list-item>
        </v-list>
         </v-menu>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import ItemUser from './ItemUser.vue';
export default {
  components: { ItemUser },
  data() {
    return {
      drawer: true,
      select: "",
     
    };
  },
  computed: {
    ...mapState(["categories"]),
  },
  mounted() {
    this.$store.dispatch("getCategories");
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
};
</script>