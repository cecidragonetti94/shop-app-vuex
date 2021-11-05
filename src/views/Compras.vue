.<template>
<div class="text-center">
<h1>Compras</h1>
  <Carrito/>
</div>
  
</template>

<script>
import Carrito from '../components/Shop/Carrito.vue'
export default {
  components: { Carrito },

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Russo+One&family=Zen+Antique&display=swap");
h1 {
  font-family: "Zen Antique", serif;
  font-size: 80px;
  color: rgb(161, 159, 159);
}
</style>