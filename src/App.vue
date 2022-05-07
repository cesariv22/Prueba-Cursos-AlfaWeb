<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <v-toolbar-side-icon app></v-toolbar-side-icon>
      <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->
    <NavBar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
