<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <IdadeDialog />
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar.vue";
import IdadeDialog from './components/IdadeDialog.vue'

export default {
  name: "App",
  components: {
    AppTopBar,
    IdadeDialog,
  },
};
</script>
