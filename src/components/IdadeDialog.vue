<template>
  <v-container>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            Você é maior de 18 anos?
          </v-card-title>
          <v-card-text>Não se preocupe, tem drink para todo mundo!</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <router-link to="/menoridade">
              <v-btn color="green darken-1" text @click="dialog = false">
                Não
              </v-btn>
            </router-link>
            <router-link to="/listadrinks">
              <v-btn color="green darken-1" text @click="dialog = false">
                Sim
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: "IdadeDialog",
  data() {
    return {
      dialog: true,
    };
  },
};
</script>

<style scoped></style>
