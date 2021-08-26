<template>
  <v-data-table
    class="table"
    :headers="headers"
    :items="obras"
    :rows-per-page-items="[5, 10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left" @click.stop="verDetalleObra(props.item)">{{ props.item.nombre }}</td>
      <td class="text-xs-left">{{ props.item.fechaInicio }}</td>
      <td class="text-xs-left">{{ props.item.fechaFin }}</td>
      <td class="text-xs-left">{{ props.item.descripcion }}</td>
      <td class="text-xs-left">{{ props.item.direccion }}</td>
      <td class="justify-center">
          <v-icon @click="updateItem(props.item)">
            edit
          </v-icon>
          <v-icon @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
    </template>
  </v-data-table>
</template>

<script>
import ObraDataService from '../services/ObraDataService';

export default {
  data() {
    return {
      obras: [],
      headers: [
        {
          text: 'Nombre',
          value: 'nombre',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Fecha Inicio',
          value: 'fechaInicio',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Fecha Fin',
          value: 'fechaFin',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Descripción',
          value: 'descripcion',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Dirección',
          value: 'direccion',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Acciones',
          value: 'actions',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
      ],
    };
  },

  methods: {
    verDetalleObra(item) {
      this.$router.push({ name: 'verObra', params: { id: item.id } });
    },
    deleteItem(item) {
      console.log(item.id);
      const index = this.obras.indexOf(item);
      this.obras.splice(index, 1);
      ObraDataService.deleteObra(item.id);
    },
    updateItem(item) {
      this.$router.push({ name: 'editarUsuario', params: { id: item.id } });
    },
  },

  created() {
    const vm = this;

    ObraDataService.getObras().then((response) => {
      const result = response && response.data;
      vm.obras = result;
      console.log(vm.obras);
    });
  },
};
</script>

<style>
  .table {
    border-radius: 3px;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
    background-color: #444444;
  }
  thead{
    background-color: #00ADAA;
  }
</style>
