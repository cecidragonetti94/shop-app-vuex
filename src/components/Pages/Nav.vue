<template>
  <div>
    <v-app-bar
      color="secondary"
      dense
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My shop</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>fa-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>fa-search</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>fa-ellipsis-v</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary dark align-center  color="secondary">
        <v-container class="mt-4 text-center">
          <v-col>
            <v-avatar >
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
              <v-btn color="primary" to="/">Home</v-btn>
          </v-col>
          <v-col>
              <v-btn color="primary" to="/weatherCity">Electronics</v-btn>
          </v-col>
          
           <v-col>
              <v-btn color="primary" to="/argentina">Jewelery</v-btn>
          </v-col>
          <v-col>
              <v-btn color="primary" to="/zipCode">Men's clothing</v-btn>
          </v-col>
           <v-col>
              <v-btn color="primary" to="/zipCode">Women's clothing"</v-btn>
          </v-col>
        </v-container> 
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
   data() {
    return {
      drawer: true,
    };
  },
}
</script>