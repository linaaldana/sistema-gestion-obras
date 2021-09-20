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
                      v-model="currentAvance.nombre"
                      label="Titulo del avance"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-text-field
                      v-model="currentAvance.descripcion"
                      label="Descripcion"
                      required
                    ></v-text-field>
                  </v-flex>
              <v-btn color="blue" @click="addPhoto"> Añadir imagen </v-btn>
              <v-btn color="blue" @click="addAudio"> Añadir audio </v-btn>
                </v-layout>
              </v-container>
              <v-btn color="success" @click="editarAvance"> Actualizar </v-btn>
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
      currentAvance: null,
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
    getAvance(idAvance) {
      AvanceDataService.getAvance(idAvance).then((res) => {
        this.currentAvance = res.data.avance;
      }).catch((e) => {
        console.log(e.response.data.error);
      });
    },
    updateAvance() {
      AvanceDataService.updateAvance(this.currentAvance).then(
        (res) => {
          this.result = res.data.message;
          this.showResult = true;
          this.$router.push({ name: 'getAvances' });
        }, (err) => {
          console.log(err.response);
        },
      );
    },
    addPhoto() {
    },
    addAudio() {
    },
  },
  mounted() {
    this.getAvance(this.$route.params.idAvance);
  },
};
</script>
