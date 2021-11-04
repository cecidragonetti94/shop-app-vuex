.<template>
  <v-container>
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
            
           
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="310"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="deep-purple lighten-2"
          text
          dark
          v-bind="attrs"
          v-on="on"
        >
          Buy
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Agregar al carrito?
        </v-card-title>
        <v-card-text>{{item.title}} </v-card-text>
        <v-card-title> US${{item.price}}</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="deep-purple darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="deep-purple darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>

          </v-card-actions>
        </v-col>
      </v-card>
       
    </v-row>
    
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data () {
      return {
        dialog: false,
      }
    },
  computed: {
    ...mapState(["products"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style>
</style>