<template>
  <v-container fluid grid-list-xl>
    <div v-if='cliente'>
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
                      v-model="cliente.nombre"
                      :counter="10"
                      :rules="nameRules"
                      label="Nombre"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-select
                      v-model="cliente.tipoIdentificacion"
                      :items="items"
                      :rules="[(v) => !!v || 'Por favor seleccione el tipo de identificación']"
                      label="Tipo Documento de Identificación"
                      required
                    ></v-select>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="cliente.numeroIdentificacion"
                      label="Número de Identificación"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="cliente.telefono"
                      label="Teléfono"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="cliente.direccion"
                      label="Dirección"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="cliente.email"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-btn color="success" @click="updateCliente"> Actualizar </v-btn>
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
import ClienteDataService from '../services/ClienteDataService';

export default {
  data() {
    return {
      cliente: null,
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
    getCliente(id) {
      ClienteDataService.getCliente(id).then((res) => {
        this.cliente = res.data.cliente;
      }).catch((e) => {
        console.log(e.response.data.error);
      });
    },
    updateCliente() {
      ClienteDataService.updateCliente(this.cliente).then(
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
  mounted() {
    console.log(this.$route.params.id);
    this.getCliente(this.$route.params.id);
  },
};
</script>
