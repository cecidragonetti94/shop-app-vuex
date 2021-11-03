.<template>
  <v-container>
     
    <v-row >
      <v-card 
       elevation="15"
        class="mx-auto text-center mb-5"
        max-width="400"
        v-for="item in products"
        :key="item.id"
      >
        <v-col cols="12">
          <v-img contain="false" height="200px" :src="item.image"></v-img>
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
            <v-btn color="deep-purple lighten-2" text @click="reserve">
              buy
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
 
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