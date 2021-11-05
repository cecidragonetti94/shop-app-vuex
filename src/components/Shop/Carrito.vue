<template>
    <div class="my-5">
        <h4 class="text-center" color="accent">Carrito de compras</h4>
        <v-simple-table >
        
            <thead >
            <tr>
                <th scope="col" class="text-center">#id</th>
                <th scope="col" class="text-center">Item</th>
                <th scope="col" class="text-center">Cantidad</th>
                <th scope="col" class="text-center">Precio</th>
                <th scope="col" class="text-center">Total</th>
                <th scope="col" class="text-center">Acción</th>
                <th class="text-center"> <v-icon> fa-trash</v-icon> </th>
            </tr>
            </thead>
            <tbody id="items">
              <!-- {{carrito}} -->
              <Item v-for="item in carrito" :key="item.id"
              :item="item"/>
            </tbody>

     </v-simple-table>
    </div>
</template>
<script>
import { mapState } from "vuex";
import Item from './Item.vue';
export default {
    components:{Item},
   computed:{
         ...mapState(["carrito"]),
    },
    }
    
//      mounted() {
    
//     this.$store.dispatch("agregarCarrito", this.item);
  
//   },
//    methods: {
//     ...mapActions(["agregarCarrito"]),
    
//   },

</script>