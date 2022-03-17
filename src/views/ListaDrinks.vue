<template>
  <v-app>
    <AppTopBarMaiorIdade />
    <v-main>
      <router-view />
      <h2>Drinks Maior Idade</h2>
      <ul>
        <li v-for="item of listaMaiores" :key="item.idDrink">
          <v-img :src="item.strDrinkThumb">{{ item.strDrink }}</v-img>
        </li>
      </ul>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBarMaiorIdade from "../components/shared/AppTopBarMaiorIdade.vue";

export default {
  name: "AppMaiorIdade",
  components: {
    AppTopBarMaiorIdade,
  },
  data() {
    return {
      listaMaiores: [],
    };
  },
  created() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.listaMaiores = json;
        console.log(this.listaMaiores);
      });
  },
};
</script>

<style scoped>
</style>