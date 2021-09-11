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

                  <v-flex xs12 sm12>
                    <v-select
                      v-model="cliente"
                      :items="items"
                      :rules="[(v) => !!v || 'Por favor seleccione el cliente']"
                      label="Cliente"
                      required
                    >
                    <template slot="selection" slot-scope="data">
                      {{ data.item.numeroIdentificacion }} - {{ data.item.nombre }}
                    </template>
                    <template slot="item" slot-scope="data">
                      {{ data.item.numeroIdentificacion }} - {{ data.item.nombre }}
                    </template>
                    </v-select>
                  </v-flex>

                  <v-flex xs12 sm12>
                    <v-select
                      v-model="jefeObra"
                      :items="jefes"
                      :rules="[(v) => !!v || 'Por favor seleccione el jefe de obra']"
                      label="Jefe de Obra"
                      required
                    >
                    <template slot="selection" slot-scope="data2">
                      {{ data2.item.nombre }}
                    </template>
                    <template slot="item" slot-scope="data2">
                      {{ data2.item.nombre }}
                    </template>
                    </v-select>
                  </v-flex>
                  <v-flex xs12 sm12>
                    <v-select
                      v-model="trabajadores"
                      :items="trabajadoresItems"
                      :rules="[(v) => !!v || 'Por favor seleccione los trabajadores de la obra']"
                      label="Trabajadores"
                      multiple
                      required
                    >
                    <template slot="selection" slot-scope="data3">
                      {{ data3.item.nombre }}
                    </template>
                    <template slot="item" slot-scope="data3">
                      {{ data3.item.nombre }}
                    </template>
                    </v-select>
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
import ClienteDataService from '../services/ClienteDataService';
import UsuarioDataService from '../services/UsuarioDataService';
import TrabajadorDataService from '../services/TrabajadorDataService';

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
      items: [],
      cliente: '',
      jefeObra: '',
      jefes: [],
      trabajadoresItems: [],
      trabajadores: [],
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
        cliente: this.cliente.id,
        jefeObra: this.jefeObra.id,
        trabajadores: this.trabajadores,
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
    getClientes() {
      ClienteDataService.getClientes().then((response) => {
        const result = response && response.data;
        this.items = result;
      }).catch((e) => {
        console.log(e.response.data.error);
      });
    },
    getJefesObra() {
      UsuarioDataService.getJefesObra().then((response) => {
        const result = response && response.data;
        this.jefes = result;
      }).catch((e) => {
        console.log(e.response.data.error);
      });
    },
    getTrabajadores() {
      TrabajadorDataService.getTrabajadores().then((response) => {
        const result = response && response.data;
        this.trabajadoresItems = result;
      }).catch((e) => {
        console.log(e.response.data.error);
      });
    },
  },
  mounted() {
    this.getClientes();
    this.getJefesObra();
    this.getTrabajadores();
    console.log(this.items);
    console.log(this.jefes);
    console.log(this.trabajadoresItems);
  },
};
</script>
