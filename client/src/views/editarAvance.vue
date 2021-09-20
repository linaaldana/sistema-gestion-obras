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
                  <input type="file" @change="onPhotoChange" accept="image/*">
              <v-btn color="blue" @click="addPhoto"> Añadir imagen </v-btn>
              <audio-recorder
                upload-url="localhost:3000"
                :attempts="3"
                :time="2"
                :headers="headers"
                :before-recording="callback"
                :pause-recording="callback"
                :after-recording="callback"
                :select-record="callback"
                :before-upload="callback"
                :successful-upload="callback"
                :failed-upload="callback"/>
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
import FotosDataService from '../services/FotosDataService';
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
      selectedPhoto: null,
    };
  },
  methods: {
    callback(data) {
      console.debug(data);
    },
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
    onPhotoChange(event) {
      this.selectedPhoto = event.target.files[0];
      console.log(this.selectedPhoto);
    },
    addPhoto() {
      FotosDataService.crearFoto('').then(
        (res) => {
          this.result = res.data.message;
          this.showResult = true;
        },
        (err) => {
          console.log(err.response);
        },
      );
    },
    addAudio() {
    },
  },
  mounted() {
    this.getAvance(this.$route.params.idAvance);
  },
};
</script>
