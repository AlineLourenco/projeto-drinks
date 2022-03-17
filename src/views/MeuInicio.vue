<template>
<<<<<<< HEAD
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = true"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = true"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
=======
    <v-container>
        <h1>Início</h1>
        <v-img class="inicio-imagem mb-4" src="https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
        </v-img>
        <p>Aplicativo voltado para a venda de bebidas alcoólicas a maiores de 18 anos com uma ampla variedades de drinks e bebidas não acoólicas a todos.</p>
    </v-container>
>>>>>>> d4d31cd32bf8b1fa93a0b5d18795fe9ba6d0f7e9
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