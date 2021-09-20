<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex d-flex lg2 sm12 xs12 />
      <v-flex d-flex lg8 sm12 xs12>
        <v-card>
            <v-card-text>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12 sm12>
                      <h3>Nombre de la obra: {{ obra.nombre }}</h3>
                      <h3>Descripción: {{ obra.descripcion }}</h3>
                      <h3>Dirección: {{ obra.direccion }}</h3>
                      <h3>Fecha de inicio: {{ obra.fechaInicio }}</h3>
                      <h3>Fecha de finalización: {{ obra.fechaFin }}</h3>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-btn color="success" @click="getAvances()">Avances de obra</v-btn>
            </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex lg2 sm12 xs12 />
    </v-layout>
  </v-container>
</template>

<script>
import ObraDataService from '../services/ObraDataService';

export default {
  data() {
    return {
      obra: null,
      showResult: false,
      result: '',
    };
  },
  methods: {
    getObra(id) {
      ObraDataService.getObra(id).then((res) => {
        this.obra = res.data.obra;
      }).catch((e) => {
        console.log(e.response.data.error);
      });
    },
    updateObra() {
      ObraDataService.updateObra(this.obra).then(
        (res) => {
          this.result = res.data.message;
          this.showResult = true;
          this.$router.push({ name: 'Obras' });
        }, (err) => {
          console.log(err.response);
        },
      );
    },
    getAvances() {
      this.$router.push({ name: 'getAvances', params: { id: this.obra.id } });
    },
  },
  mounted() {
    this.getObra(this.$route.params.id);
  },
};
</script>
