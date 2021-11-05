.<template>
  <v-container>
     <!-- <pre>
 {{ this.item }} 
    </pre> -->

    <v-row>
      <v-card
        elevation="15"
        class="mx-auto text-center mb-5"
        max-width="400"
        v-for="item in products"
        :key="item.id"
      >
        <v-col cols="12">
          <v-img contain height="200px" :src="item.image"></v-img>
          <v-card-title>{{ item.title }} </v-card-title>
          <v-rating
            :value="item.rating.rate"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
          <div class="grey--text ms-4">
            {{ item.rating.rate }} - ({{ item.rating.count }})
          </div>
          <v-card-subtitle>US${{ item.price }} </v-card-subtitle>
          <v-card-subtitle>{{ item.description }} </v-card-subtitle>
          <v-card-actions>
       
            <v-btn
              color="deep-purple lighten-2"
              text
              dark
              @click="agregarCarrito(item)"
            >
              Comprar
            </v-btn>
           
          </v-card-actions>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      
    };
  },
  computed: {
    ...mapState(["products"]),
    ...mapState(["carrito"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("agregarCarrito");
  
  },
  methods: {
    ...mapActions(["agregarCarrito"]),
    
  },
};
</script>

<style>
</style>