<template>
  <h1>Detalle del Pais</h1>
  <!-- Forma antigua de acceder al nombre -->
  <!-- <h2>Detalle: {{$route.params.nombre}}</h2> -->
  <!-- Forma actual en vue 3 con los props -->
  <h2>Detalle:{{nombre}}</h2>
  <p v-for="(pais, index) in arrayData" :key="index">
    {{pais.name}} - {{pais.region}}
  </p>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetch} from '../hooks/useFetch'

export default {
  // Si ocupamos pasar el props como el la siguiente linea entonces en el index del router
  // debemos de activar los props en true
  props:['nombre'],
  setup(props){
    // Para acceder a los parametros del nombre dentro del setup
    const nombreParams = useRoute()
    // console.log(nombreParams.params.nombre)
    
    return {...useFetch(`https://restcountries.eu/rest/v2/name/${nombreParams.params.nombre}`)}
    
  }
}
</script>
