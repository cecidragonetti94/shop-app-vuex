.<template>
  <tr class="text-center">
    <th scope="row">{{ item.id }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.cantidad }}</td>
    <td>US${{ item.price }}</td>
    <td>US${{ item.price * item.cantidad }}</td>
    <td>
      <!-- <v-btn color="success" @click="aumentar(item.id)"> + </v-btn>
      <v-btn color="error" @click="disminuir(item.id)"> - </v-btn> -->
    </td>

    <td>
     
    </td>
    
  </tr>
  
</template>

<script>

// import {mapMutations} from 'vuex'
export default {
  props: ["item"],

//   methods: {
 
//     ...mapMutations(["aumentar"]),
//      ...mapMutations(["disminuir"]),
//   },
};
</script>

<style>
</style>