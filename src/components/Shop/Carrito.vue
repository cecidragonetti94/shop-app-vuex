<template>
    <div class="my-5">
        <h4 class="text-center">Carrito de compras</h4>
        <v-simple-table>
        
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
                <th scope="col">Total</th>
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