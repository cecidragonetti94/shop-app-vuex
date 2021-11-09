<template>
  <validation-observer 
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit="submit" class="form" >
      <validation-provider
        v-slot="{ errors }"
        name="nombre"
        rules="required|max:10"
      >
        <v-text-field
          v-model="nombre"
          :counter="10"
          :error-messages="errors"
          label="Nombre"
          required
        ></v-text-field>
      </validation-provider>
      
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>
      <validationObserver>
      <validation-provider
        v-slot="{ errors }"
        name="contraseña"
        rules="required|password:@confirm"
        
      >
        <v-text-field
          v-model="contraseña"
          :error-messages="errors"
          label="Contraseña"
          required
           type="password"
           
        ></v-text-field>
      </validation-provider>
        <validation-provider
        v-slot="{ errors }"
        name="confirm"
        rules="required"
      >
        <v-text-field
          v-model="confirmation"
          :error-messages="errors"
          label="Repetir Contraseña"
          required
          type="password"
        ></v-text-field>
      </validation-provider>
      </validationObserver>
    <v-container class="container">
  
      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
        color="info"
      >
        submit
      </v-btn>
      <v-btn @click="clear" color="celes">
        clear
      </v-btn>
          
    </v-container>
    </form>
  </validation-observer>
</template>
<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} debe tener {length} digitos. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} no puede estar vacio',
  })

  extend('max', {
    ...max,
    message: 'El {_field_} no puede tener mas de {length} caracteres',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} no coincide {regex}',
  })

  extend('email', {
    ...email,
    message: 'El e-mail debe ser valido',
  })
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Las contraseñas no coinciden'
});


  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      nombre: '',
      email: '',
      contraseña: '',
     confirmation: ''
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.nombre = ''
   
        this.email = ''
        this.contraseña = ''
        this.confirmation = ''

        this.$refs.observer.reset()
      },
    },
  }
</script>
<style scoped>
.form{
  background-color: rgb(193, 248, 168);
  max-width: 500px;
  min-height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 300px;
  margin-top:100px;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
}
.container{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>