.<template>
   <validation-observer 
    ref="observer"
    v-slot="{ invalid }"
  >
   <form @submit="submit" class="form" >
        <v-container class="mt-6">
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
        name="contraseña"
        rules="required|password"
        v-slot="{ errors }"
      >
       <v-text-field
          v-model="contraseña"
          :error-messages="errors"
          label="Contraseña"
          required
         type="password"
           
        ></v-text-field>
       </validation-provider>
      
    <v-container class="d-flex justify-center ">
  
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
        </v-container>
    </form>
  </validation-observer>
</template>
<script>import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
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


  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      email: '',
      contraseña: '',
  
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.email = ''
        this.contraseña = ''
       

        this.$refs.observer.reset()
      },
    },
  }
</script>

