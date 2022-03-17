<template>
    <v-app>
    <v-main>
      <IdadeDialog />
    </v-main>
    </v-app>
</template>

<script>
import IdadeDialog from './components/IdadeDialog.vue'

export default {
  name: 'App',
 components: {
   IdadeDialog,
 }
}
</script>