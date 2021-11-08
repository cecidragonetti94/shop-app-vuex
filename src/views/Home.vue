
   <template>
  <div cols="12">
    <h1 class="text-center mb-5">Shopping App</h1>

    <v-card flat tile cols=12> 
      <v-window v-model="onboarding" reverse>
        <v-window-item v-for="item in categories" :key="item">
          <v-card color="grey" height="200">
            <v-row class="fill-height" align="center" justify="center">
              <h1 style="font-size: 5rem" class="white--text"> {{ item }}</h1>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn text @click="prev">
          <v-icon color="primary">fa-chevron-left</v-icon>
        </v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in categories"
            :key="`btn-${n}`"
            v-slot="{ active, toggle }"
          >
            <v-btn :input-value="active" icon @click="toggle">
              <v-icon  color="secondary">fa-record-vinyl</v-icon>
            </v-btn>
          </v-item>
        </v-item-group>
        <v-btn text @click="next">
          <v-icon  color="primary">fa-chevron-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-img contain height="500px" src="https://newsd.in/wp-content/uploads/2018/11/online-shopping.jpg"></v-img>
  </div>
</template>


<script>
import {mapState} from 'vuex'
  export default {
    data: () => ({
      length: 4,
      onboarding: 0,
    }),
  computed:{
    ...mapState(["categories"]),
  },
  mounted() {
    this.$store.dispatch("getCategories")
    
  },
    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding -1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Russo+One&family=Zen+Antique&display=swap");
h1 {
  font-family: "Zen Antique", serif;
  font-size: 50px;
  color: rgb(161, 159, 159);
}
</style>
