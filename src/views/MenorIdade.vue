<template>
  <v-app>
    <AppTopBarMenorIdade/>
      <v-main>
        <router-view/>
      </v-main>
  </v-app>
</template>

<script>
import AppTopBarMenorIdade from '../components/shared/AppTopBarMenorIdade.vue'

export default {
  name: 'AppMenorIdade',
  components: {
    AppTopBarMenorIdade,
  },
};
</script>

<style scoped>

</style>