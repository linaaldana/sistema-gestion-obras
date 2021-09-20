<template>
  <v-container fluid>
    <v-layout row>
      <v-spacer></v-spacer>
      <v-btn fab dark color="teal" @click.stop="createAvance()">
        <v-icon dark>add</v-icon>
      </v-btn>
    </v-layout>
    <v-layout column style="height: 80vh">
    <v-flex md6 style="overflow: auto">
    <data-table-avances />
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  methods: {
    createAvance() {
      this.$router.push({ name: 'crearAvance' });
    },
  },
};
</script>
