<template>
    <v-container>
        <AppTopBarMenorIdade/>
        <v-main class="pa-0">
        <h1>Drinks para Menores de Idade</h1>
        <v-img class="inicio-imagem mb-4" src="https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        </v-img>
        <p>Vários drinks sem álcool!</p>
        </v-main>
    </v-container>
</template>




<script>
import AppTopBarMenorIdade from '../components/shared/AppTopBarMenorIdade.vue'

export default {
    name: 'AppMenorIdade',
      components: {
    AppTopBarMenorIdade,
  },
}
    
</script>

<style scoped>
    .inicio-imagem {
        border-radius: 5px;
    }
    h1 {
        text-align: center;
    }
</style>