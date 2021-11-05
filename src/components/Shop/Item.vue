.<template>
  <tr>
    <th scope="row">{{item.id}}</th>
    <td>{{item.title}}</td>
    <td>{{item.cantidad}}</td>
    <td>
        <v-btn color="success" @click="aumentar(item.id)">
            +
        </v-btn>
        <v-btn color="error" @click="disminuir(item.id)">
            -
        </v-btn>
    </td>
    <td>${{item.price * item.cantidad}}</td>
    <th scope="row" colspan="2">Total productos</th>
    <td>{{totalCantidad}}</td>
    <td>
        <v-btn color="info" id="vaciar-carrito" @click="vaciar">
            vaciar todo
        </v-btn>
    </td>
  </tr>
  
    
</template>

<script>
// import {mapActions} from 'vuex'
export default {
props:['item'],
//  methods:{
//      ...mapActions(['aumentar', id]),
//      ...mapActions(['disminuir',id])
//  }
}
</script>

<style>

</style>