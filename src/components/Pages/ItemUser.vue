.<template>
    <v-list dense>
     
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item to="ingresoUsuario">
          <v-list-item-icon>
            <v-icon>fa-sign-in-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Ingresar</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item to="/userRegister"> 
            <v-list-item-icon>
            <v-icon>fa-user-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Registrarse</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
           <v-list-item to="/">
           <v-list-item-icon>
            <v-icon>fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Cerrar Sesión</v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list-item-group>
    </v-list>
</template>

<script>
export default {
 data() {
    return {
     
      selectedItem: 1,
    };
  },
}
</script>

<style>

</style>