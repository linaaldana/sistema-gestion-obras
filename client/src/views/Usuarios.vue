<template>
  <v-container fluid>
    <v-layout row>
      <v-spacer></v-spacer>
      <v-btn round  color="teal" dark>
         <router-link to="/usuarios/crear" class="nav-link">AgregarUsuario</router-link>
      </v-btn>
    </v-layout>
    <v-layout column style="height: 90vh">
    <v-flex md6 style="overflow: auto">
    <data-table />
    </v-flex>
    </v-layout>
  </v-container>
</template>
