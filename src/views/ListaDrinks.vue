<template>
  <v-app>
    <v-main>
      <router-view />
      <h2>Drinks Maior Idade</h2>
      <ul>
        <li v-for="item of listaMaiores" :key="item.name">
          <v-img :src="item.imageURL"></v-img>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ListaDrinks",
  components: {},
  data() {
    return {
      listaMaiores: [],
    };
  },
  created() {
    fetch(
      "https://raw.githubusercontent.com/raywenderlich/recipes/master/Recipes.json"
    )
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