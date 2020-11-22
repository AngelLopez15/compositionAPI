<template>
  <h1>Lista de paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">
    <!-- haciendo el link a la ruta dinamica -->
    <router-link :to="`/paises/${pais.name}`">
      {{pais.name}}
    </router-link>
  </p>
</template>

<script>
// import {onMounted, ref} from 'vue'
// Peticiones a una API con Composition API

// importanto el hook de peticiones
import {useFetch} from '../hooks/useFetch'

export default {
  setup(){

    // Ocupando el Hook que hicimos para hacer peticiones
    return {...useFetch('api.json')}


    // **** Esta seria la forma de hacer la peticion sin un hook ****
    // const arrayData =  ref([])

    // const fectchData = async() => {
    //   try {
        
        // const res = await fetch('https://restcountries.eu/rest/v2/all')
        
        // Como es una API publica y guardamos la API para no gastar los recursos de las personas
        // que pagan el servidor podemos usarla directamente 
        // const res = await fetch('api.json')
        
        // almacenamos la respuesta en el arreglo
        // arrayData.value = await res.json()

    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    // fectchData()

    // La forma para escribir menos codigo y hacer la peticion en vue 3 seria con 
    // onMounted y asi evitamos ejecutar la funcion explicitamente

    // onMounted(async()=>{
    //   try {
    //     const res = await fetch('api.json')
    //     arrayData.value = await res.json()
    //   } catch (error) {
    //     console.log(error)
    //   }
    // })

    // return {arrayData}
  }
}
</script>