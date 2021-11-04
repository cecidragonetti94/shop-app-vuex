<template>
<div class="container">

<v-select :items="items"
        label="Precio máximo">

</v-select>
    <card/>



</div>

</template>
<script>
import Card from '../components/Shop/Card.vue'

export default {
  components: { Card },
  data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
 
})
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