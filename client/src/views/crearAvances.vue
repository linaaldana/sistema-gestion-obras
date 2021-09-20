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
                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="nombre"
                      label="Titulo del avance"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="descripcion"
                      label="Descripcion"
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
import AvanceDataService from '../services/AvanceDataService';
// import FotosDataService from '../services/FotosDataService';
// import AudioDataService from '../services/AudioDataService';

export default {
  data() {
    return {
      showResult: false,
      modal: false,
      modal2: false,
      result: '',
      nombre: '',
      descripcion: '',
      idObra: this.$route.params.id,
    };
  },
  methods: {
    submit() {
      const data = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        idObra: this.idObra,
      };

      console.log(data);

      AvanceDataService.crearAvance(data).then(
        (res) => {
          this.result = res.data.message;
          this.showResult = true;
          this.$router.push({ name: 'getAvances' });
        },
        (err) => {
          console.log(err.response);
        },
      );
    },
  },
  mounted() {
  },
};
</script>
