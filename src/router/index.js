import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ListaDrinks from '../views/ListaDrinks.vue'
import MenorIdade from '../views/MenorIdade.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/listadrinks',
    name: 'ListaDrinks',
    component: ListaDrinks
  },
  {
    path: '/menoridade',
    name: 'MenorIdade',
    component: MenorIdade
  },
]

const router = new VueRouter({
  routes
})

export default router
