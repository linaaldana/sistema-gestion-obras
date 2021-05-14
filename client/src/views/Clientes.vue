<template>
  <v-container fluid>
    <v-layout column style="height: 90vh">
      <v-flex md6 style="overflow: auto">
        <data-table />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, mel at clita quando.',
    };
  },
};
</script>

<style>
</style>
