<template>
<div class = "app-top-bar-menor-idade">
        <v-app-bar app color="light-green darken-3" dark>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Lista de Drinks Para menores de idade 🍸</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
                v-model="group"
                active-class="green--text text--light-green darken-3">
                <router-link to="/">
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Início</v-list-item-title>
                    </v-list-item>
                </router-link>

                <router-link to="/menoridade">
                    <v-list-item>
                        <v-list-item-icon>
                        <v-icon>mdi-glass-cocktail</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Lista de Drinks menores de idade</v-list-item-title>
                    </v-list-item>
                </router-link>

            </v-list-item-group>
        </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'AppTopBarMenorIdade',
    data: () => ({
        drawer: false,
        group: null,
    }),
}
</script>

<style scoped>
    .app-top-bar-menor-idade a {
        text-decoration: none;
    }
</style>