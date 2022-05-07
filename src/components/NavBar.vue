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
        <v-navigation-drawer absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
              <v-list-item>
                <v-list-item-title>Foo</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
