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
                    <v-select
                      v-model="tipoIdentificacion"
                      :items="items"
                      :rules="[(v) => !!v || 'Por favor seleccione el tipo de identificación']"
                      label="Tipo Documento de Identificación"
                      required
                    ></v-select>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="numeroIdentificacion"
                      label="Número de Identificación"
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
                      v-model="direccion"
                      label="Dirección"
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
import ClienteDataService from '../services/ClienteDataService';

export default {
  data() {
    return {
      showResult: false,
      result: '',
      nameRules: [
        (v) => !!v || 'Por favor ingrese el nombre completo del cliente',
      ],

      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      nombre: '',
      tipoIdentificacion: '',
      numeroIdentificacion: '',
      direccion: '',
      telefono: '',
      email: '',
      items: [
        'Cédula Ciudadanía',
        'Cédula de Extranjería',
        'NIT Persona Natural',
        'NIT Persona Jurídica',
        'Pasaporte',
        'Registro Civil',
      ],
    };
  },
  methods: {
    submit() {
      const data = {
        nombre: this.nombre,
        tipoIdentificacion: this.tipoIdentificacion,
        numeroIdentificacion: this.numeroIdentificacion,
        direccion: this.direccion,
        telefono: this.telefono,
        email: this.email,
        usuario: 3,
      };

      ClienteDataService.crearCliente(data).then(
        (res) => {
          this.result = res.data.message;
          this.showResult = true;
          this.$router.push({ name: 'Clientes' });
        }, (err) => {
          console.log(err.response);
        },
      );
    },

  },
};
</script>
