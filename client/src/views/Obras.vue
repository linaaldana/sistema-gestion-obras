<template>
  <v-container fluid>
    <v-layout row>
      <v-spacer></v-spacer>
      <v-btn fab dark color="teal" to="/obras/crear">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-layout>
    <v-layout column style="height: 80vh">
    <v-flex md6 style="overflow: auto">
    <data-table-obras />
    </v-flex>
    </v-layout>
  </v-container>
</template>
