.<template>
  <v-container>
    <!-- <pre>
 {{ this.item }} 
    </pre> -->

    <v-row>
        <Loading v-if="loading"/>
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
            <v-container>
              <v-btn
                color="deep-purple lighten-2"
                text
                dark
                @click="agregarCarrito(item)"
              >
                Comprar
              </v-btn>
              <v-btn icon to="/favoritos" >
                <v-icon color="deep-purple lighten-2">fa-heart</v-icon>
              </v-btn>
            </v-container>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Loading from '../Pages/Loading.vue';
export default {
  components: { Loading },
  data() {
    return {
      dialog: false,
      loading: false,
    
    };
  },
 created() {
   this.loading = true 
 },
  computed: {
    ...mapState(["products"]),
    ...mapState(["carrito"]),
  },
  mounted() {
    
    this.$store.dispatch("getProducts").then(()=>{
    this.loading = false
    });
    
    this.$store.dispatch("agregarCarrito");
  
  },
  methods: {
    ...mapActions(["agregarCarrito"]),
  },
};
</script>

<style>

</style>