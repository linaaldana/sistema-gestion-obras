<template>
  <v-navigation-drawer
    v-model="toggle"
    fixed app>
    <v-toolbar flat dark :color="$root.themeColor" class="toolbar">
      <router-link :to="{ name: 'Clientes' }">
        <img :src="'/static/logo.png'" width="36px">
      </router-link>
      <router-link :to="{ name: 'Clientes' }" class="text">
         SGO
      </router-link>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="changeRoute('Clientes', 1)">
        <v-list-tile-action>
          <v-icon>assignment_ind</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 1}, 'item-title' ]" >
          Clientes</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Usuarios', 2)">
        <v-list-tile-action>
          <v-icon>account_circle</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 2}, 'item-title' ]">
        Usuarios</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Trabajadores', 3)">
        <v-list-tile-action>
          <v-icon>group</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 3}, 'item-title' ]">
          Técnicos / Constructores</v-list-tile-title>
      </v-list-tile>

      <v-list-tile @click="changeRoute('Obras', 4)">
        <v-list-tile-action>
          <v-icon>group</v-icon>
        </v-list-tile-action>
        <v-list-tile-title :class="[{'active': selectedIndex === 4}, 'item-title' ]">
          Obras</v-list-tile-title>
      </v-list-tile>

      <v-list-group
        prepend-icon="select_all">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Inventarios</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeRoute('Snackbar', 7)">
          <v-list-tile-action>
            <v-icon>event_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-title :class="[{'active': selectedIndex === 7}, 'item-title' ]">
            Tecnicos</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

      <v-list-group
        prepend-icon="fingerprint">
        <v-list-tile slot="activator">
          <v-list-tile-title class="item-title">Reportes</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '403' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">403</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '404' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">404</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Error', params: { errorCode: '500' } })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">500</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="$router.push({ name: 'Login' })">
          <v-list-tile-action>
            <v-icon>cancel</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="item-title">Iniciar Sesión</v-list-tile-title>
        </v-list-tile>
    </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      required: false,
      default: true,
    },
  },

  data() {
    return {
      selectedIndex: 1,
    };
  },

  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;

      vm.selectedIndex = selectedIndex;

      return vm.$router.push({ name: routeName });
    },
  },
};
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }

  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }

  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }

  .active {
    font-weight: bold;
  }
</style>
