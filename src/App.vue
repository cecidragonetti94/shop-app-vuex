<template>
<v-app>
  <Nav/>   
  <v-main>
    <router-v/>
  </v-main>
  <Footer/>
</v-app>
</template>

<script>
import Nav from './components/Pages/Nav.vue'
import Footer from './components/Pages/Footer.vue'
export default {
  name: 'App',
components: {Nav, Footer},
  data: () => ({
    //
  }),
};
</script>
