import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#FF1BA9', //fuccia
        secondary: '#FEC6D1',//rosa
        accent: '#DACACD',//gris
        error: '#F49A8E',//rojo
        info: '#E0A2F9',//violeta
        success: '#B8F3B2', //verde manzana
        warning: '#FFF469',//amarillo
        celes: '#A4DCF6' //celeste

      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
