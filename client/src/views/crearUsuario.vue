<template>
  <v-container fluid grid-list-xl>
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
                      v-model="nombre"
                      :counter="10"
                      :rules="nameRules"
                      label="Nombre"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="username"
                      label="Nombre de usuario"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="direccion"
                      label="Dirección"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="telefono"
                      label="Teléfono"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="password"
                      label="Contraseña"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-select
                      v-model="rol"
                      :items="items"
                      :rules="[(v) => !!v || 'Item is required']"
                      label="Rol"
                      required
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-btn color="success" @click="submit"> Guardar </v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex d-flex lg2 sm12 xs12 />
    </v-layout>
     <v-snackbar v-model="showResult" :timeout="2000" top>
        {{ result }}
      </v-snackbar>
  </v-container>
</template>

<script>
import UsuarioDataService from '../services/UsuarioDataService';

export default {
  data() {
    return {
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
      nombre: '',
      username: '',
      direccion: '',
      telefono: '',
      email: '',
      password: '',
      items: [
        'Administrador',
        'Subcontratista',
        'Técnico',
        'Jefe de Obra',
      ],
      rol: 'Administrador',
    };
  },
  methods: {
    submit() {
      const data = {
        nombre: this.nombre,
        direccion: this.direccion,
        telefono: this.telefono,
        username: this.username,
        email: this.email,
        password: this.password,
        role: this.rol,
      };

      console.log(data);

      UsuarioDataService.crearUsuario(data).then(
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
};
</script>
