<template>
  <v-footer height="auto" dark>
    <v-card
      flat
      tile
      :color="$root.themeColor"
      class="text-xs-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum t. Ma
        uris cursus codoa consectetur dignissim a sit amet dui. Duis commodo vitae velit et uada.
        dsakopkopds kdospa kdosapkdop sakopd kospa kopsa dkospa kdops
      </v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    };
  },
};
</script>

<style>

</style>
