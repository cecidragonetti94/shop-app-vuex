<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
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
      <validation-provider
        v-slot="{ errors }"
        name="contraseña"
        rules="required|max:10"
      >
        <v-text-field
          v-model="contraseña"
          :counter="10"
          :error-messages="errors"
          label="Contraseña"
          required
        ></v-text-field>
      </validation-provider>
        <validation-provider
        v-slot="{ errors }"
        name="contraseña"
        rules="required|max:10"
      >
        <v-text-field
          v-model="contraseña"
          :counter="10"
          :error-messages="errors"
          label="Repetir Contraseña"
          required
        ></v-text-field>
      </validation-provider>
      

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
        color="success"
      >
        submit
      </v-btn>
      <v-btn @click="clear" color="celes">
        clear
      </v-btn>
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
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'El e-mail debe ser valido',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      nombre: '',
      email: '',
     
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.nombre = ''
   
        this.email = ''

        this.$refs.observer.reset()
      },
    },
  }
</script>