<template>
    <v-container>
        <h1>Início</h1>
        <v-img class="inicio-imagem mb-4" src="https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        </v-img>
        <p>Aplicativo voltado para a venda de bebidas alcoólicas a maiores de 18 anos com uma ampla variedades de drinks e bebidas não acoólicas a todos.</p>
    </v-container>
</template>

<script>
export default {
    name: 'MeuInicio',
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