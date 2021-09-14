<template>
  <v-data-table
    class="table"
    :headers="headers"
    :items="trabajadores"
    :rows-per-page-items="[5, 10, 25]">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">
        <v-avatar size="42">
          <img :src="randomAvatar()" alt="avatar">
        </v-avatar>
      </td>
      <td class="text-xs-left" @click.stop="verDetalleObra(props.item)">{{ props.item.nombre }}</td>
      <td class="text-xs-left">{{ props.item.tipoIdentificacion }}</td>
      <td class="text-xs-left">{{ props.item.numeroIdentificacion }}</td>
      <td class="text-xs-left">{{ props.item.direccion }}</td>
      <td class="text-xs-left">{{ props.item.telefono }}</td>
      <td class="text-xs-left">{{ props.item.email }}</td>
      <td class="text-xs-left">{{ props.item.cargo }}</td>
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
import TrabajadorDataService from '../services/TrabajadorDataService';

const avatars = [
  'https://avataaars.io/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
  'https://avataaars.io/?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
  'https://avataaars.io/?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
  'https://avataaars.io/?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
  'https://avataaars.io/?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
  'https://avataaars.io/?',
];

export default {
  data() {
    return {
      trabajadores: [],
      headers: [
        {
          value: 'Avatar',
          align: 'left',
          sortable: false,
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
          text: 'Tipo de Identificación',
          value: 'tipoIdentificacion',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Número de Identificación',
          value: 'numeroIdentificacion',
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
          text: 'Teléfono',
          value: 'telefono',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Email',
          value: 'email',
          align: 'left',
          sortable: true,
          class: 'white--text',
        },
        {
          text: 'Cargo',
          value: 'cargo',
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
    randomAvatar() {
      return avatars[Math.floor(Math.random() * avatars.length)];
    },
    deleteItem(item) {
      console.log(item.id);
      const index = this.trabajadores.indexOf(item);
      this.trabajadores.splice(index, 1);
      TrabajadorDataService.deleteTrabajador(item.id);
    },
    updateItem(item) {
      this.$router.push({ name: 'editarCliente', params: { id: item.id } });
    },
  },

  created() {
    const vm = this;

    TrabajadorDataService.getTrabajadores().then((response) => {
      const result = response && response.data;
      vm.trabajadores = result;
      console.log(vm.trabajadores);
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
