<template>
<div class="container">
   <h1 class="text-center">Jewelery</h1>
   <br>
<CardJewelery/>

</div>

</template>
<script>
import CardJewelery from '../components/Shop/CardJewelery.vue'
export default {
    components: {CardJewelery}
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