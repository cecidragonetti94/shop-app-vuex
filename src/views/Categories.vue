<template>
<div class="container">
 
<card/>

</div>

</template>
<script>
import Card from '../components/Shop/Card.vue'
import { mapState } from "vuex";
export default {
  components: { Card },
  
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Zen+Antique&display=swap');
h1{
font-family: 'Zen Antique', serif;
font-size: 50px;
color: rgb(161, 159, 159);
}
</style>