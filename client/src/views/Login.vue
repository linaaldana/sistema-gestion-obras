<template>
  <v-app id="login" class="secondary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="/static/logo.png"
                    alt="Vue Material Admin"
                    width="180"
                    height="180"
                  />
                  <h1 class="flex my-4 primary--text">
                    Sistema de Gestión de Obras
                  </h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="username"
                    label="Nombre de Usuario"
                    type="text"
                    v-model="username"
                    :error="error"
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="
                      hidePassword ? 'visibility_off' : 'visibility'
                    "
                    name="password"
                    label="Contraseña"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">
                  INICIAR SESIÓN</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar v-model="showResult" :timeout="2000" top>
        {{ result }}
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
import LoginDataService from '../services/LoginDataService';

export default {
  data() {
    return {
      loading: false,
      username: 'ejemplo@gmail.com',
      password: '123456',
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        required: (value) => !!value || 'Required.',
      },
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };

      console.log('hola');

      LoginDataService.signin(data).then(
        (res) => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            this.$router.push({ name: 'Usuarios' });
          }
        },
        (err) => {
          this.result = err.response.data.error;
          this.error = true;
          this.showResult = true;
        },
      );
    },
  },
};
</script>

<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
