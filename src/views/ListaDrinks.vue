<template>
  <v-app>
    <AppTopBarMaiorIdade/>
      <v-main>
        <router-view/>
      </v-main>
  </v-app>
</template>

<script>
import AppTopBarMaiorIdade from '../components/shared/AppTopBarMaiorIdade.vue'

export default {
  name: 'AppMaiorIdade',
  components: {
    AppTopBarMaiorIdade,
  },
};
</script>

<style scoped>

</style>