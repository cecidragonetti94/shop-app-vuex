<template>
  <div class="my-5">
    <h4 class="text-center" color="accent">Carrito de compras</h4>
    <v-simple-table>
      <thead>
        <tr>
          <th scope="col" class="text-center">#id</th>
          <th scope="col" class="text-center">Producto</th>
          <th scope="col" class="text-center">Cantidad</th>
          <th scope="col" class="text-center">Precio</th>
          <th scope="col" class="text-center">Total</th>
          <!-- <th scope="col" class="text-center">Acción</th> -->
        </tr>
      </thead>
      <tbody id="items">
        <Item v-for="item in carrito" :key="item.id" :item="item" />
      </tbody>
    </v-simple-table>
    <h3>Cantidad de productos :{{ totalCantidad }}</h3>
    <h3>Total a pagar US${{ totalPrecio }}</h3>
    <br />
    <v-btn icon @click="setVaciar()" color="primary">
      vaciar carrito
      <v-icon> fa-trash</v-icon>
    </v-btn>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import Item from "./Item.vue";
export default {
  components: { Item },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["totalCantidad"]),
    ...mapGetters(["totalPrecio"]),
  },
  methods: {
    ...mapMutations(["setVaciar"]),
  },
};
</script>