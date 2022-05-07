<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-app-bar app color="primary" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
