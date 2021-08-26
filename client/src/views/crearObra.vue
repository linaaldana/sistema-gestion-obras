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
                    <v-dialog
                      ref="dialog"
                      v-model="modal"
                      :return-value.sync="fechaInicio"
                      persistent
                      lazy
                      full-width
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="fechaInicio"
                          label="Fecha de inicio"
                          prepend-icon="event"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="fechaInicio" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn flat color="primary"
                        @click="$refs.dialog.save(fechaInicio)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-dialog
                      ref="dialog2"
                      v-model="modal2"
                      :return-value.sync="fechaFin"
                      persistent
                      lazy
                      full-width
                      width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="fechaFin"
                          label="Fecha de finalización"
                          prepend-icon="event"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="fechaFin" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="modal2 = false">Cancel</v-btn>
                        <v-btn flat color="primary"
                        @click="$refs.dialog2.save(fechaFin)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="nombre"
                      label="Nombre de la obra"
                      required
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs6 sm6>
                    <v-text-field
                      v-model="descripcion"
                      label="Descripcion"
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
import ObraDataService from '../services/ObraDataService';

export default {
  data() {
    return {
      showResult: false,
      modal: false,
      modal2: false,
      result: '',
      fechaInicio: '',
      fechaFin: '',
      nombre: '',
      descripcion: '',
      direccion: '',
    };
  },
  methods: {
    submit() {
      const data = {
        fechaInicio: this.fechaInicio,
        fechaFin: this.fechaFin,
        nombre: this.nombre,
        descripcion: this.descripcion,
        direccion: this.direccion,
      };

      console.log(data);

      ObraDataService.crearObra(data).then(
        (res) => {
          this.result = res.data.message;
          this.showResult = true;
          this.$router.push({ name: 'Obras' });
        },
        (err) => {
          console.log(err.response);
        },
      );
    },
  },
};
</script>
