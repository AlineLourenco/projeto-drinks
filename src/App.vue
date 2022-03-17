<template>
  <v-app>
    <container v-if="maior">
      <AppTopBarMaior />
    </container>
    <container v-else>
      <AppTopBarMenor />
    </container>
    <v-main>
      <DialogMaior />
    </v-main>
  </v-app>
</template>

<script>
import AppTopBarMaior from "./components/shared/AppTopBarMaior.vue";
import AppTopBarMenor from "./components/shared/AppTopBarMenor.vue";
import DialogMaior from "./components/DialogMaior.vue";

export default {
  name: "App",
  components: {
    AppTopBarMaior,
    AppTopBarMenor,
    DialogMaior,
  },
};
</script>
