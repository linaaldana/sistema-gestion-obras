<template>
  <v-data-table
    class="table"
    :headers="headers"
    :items="avances"
    :rows-per-page-items="[5, 10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.id }}</td>
      <td class="text-xs-left" @click.stop="verDetalleAvance(props.item)">{{ props.item.nombre }}
      </td>
      <td class="text-xs-left">{{ props.item.fecha }}</td>
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
import AvanceDataService from '../services/AvanceDataService';

export default {
  data() {
    return {
      avances: [],
      headers: [
        {
          text: 'ID',
          value: 'id',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Nombre',
          value: 'nombre',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Fecha',
          value: 'fecha',
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
    verDetalleAvance(item) {
      this.$router.push({ name: 'verAvance', params: { id: item.id } });
    },
    deleteItem(item) {
      console.log(item.id);
      const index = this.avances.indexOf(item);
      this.avances.splice(index, 1);
      AvanceDataService.deleteAvance(item.id);
    },
    updateItem(item) {
      this.$router.push({ name: 'editarAvance', params: { idAvance: item.id } });
    },
  },

  created() {
    const vm = this;

    AvanceDataService.getAvances().then((response) => {
      const result = response && response.data;
      vm.avances = result;
      console.log(vm.avances);
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
