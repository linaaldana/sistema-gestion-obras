<template>
  <v-container fluid grid-list-xl>
    <div v-if='currentUsuario'>
        <v-layout row wrap>
        <v-flex d-flex lg2 sm12 xs12 />
        <v-flex d-flex lg8 sm12 xs12>
            <v-card>
            <v-form ref="form" lazy-validation>
                <v-card-text>
                <v-container fluid>
                    <v-layout row wrap>
                    <v-flex xs12 sm12>
                        <v-text-field
                        v-model="currentUsuario.nombre"
                        :counter="10"
                        :rules="nameRules"
                        label="Nombre"
                        required
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12>
                        <v-text-field
                        v-model="currentUsuario.username"
                        label="Nombre de usuario"
                        required
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs6 sm6>
                        <v-text-field
                        v-model="currentUsuario.direccion"
                        label="Dirección"
                        required
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs6 sm6>
                        <v-text-field
                        v-model="currentUsuario.telefono"
                        label="Teléfono"
                        required
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12>
                        <v-text-field
                        v-model="currentUsuario.email"
                        label="E-mail"
                        required
                        ></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm12>
                        <v-select
                        v-model="currentUsuario.rol"
                        :items="items"
                        :rules="[(v) => !!v || 'Item is required']"
                        label="Rol"
                        required
                        ></v-select>
                    </v-flex>
                    </v-layout>
                </v-container>
                <v-btn color="success" @click="updateUsuario"> Actualizar </v-btn>
                </v-card-text>
            </v-form>
            </v-card>
        </v-flex>
        <v-flex d-flex lg2 sm12 xs12 />
        </v-layout>
    </div>
    <div v-else>
     <v-snackbar v-model="showResult" :timeout="2000" top>
        {{ result }}
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import UsuarioDataService from '../services/UsuarioDataService';

export default {
  data() {
    return {
      currentUsuario: null,
      showResult: false,
      result: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      items: [
        'Administrador',
        'Subcontratista',
        'Técnico',
        'Jefe de Obra',
      ],
    };
  },
  methods: {
    getUsuario(id) {
      UsuarioDataService.getUsuario(id).then((res) => {
        this.currentUsuario = res.data.usuario;
      }).catch((e) => {
        console.log(e.response.data.error);
      });
    },
    updateUsuario() {
      UsuarioDataService.updateUsuario(this.currentUsuario).then(
        (res) => {
          this.result = res.data.message;
          this.showResult = true;
          this.$router.push({ name: 'Usuarios' });
        }, (err) => {
          console.log(err.response);
        },
      );
    },
  },
  mounted() {
    this.getUsuario(this.$route.params.id);
  },
};
</script>
