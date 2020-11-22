<template>
  <h1
    :style="{'color':color}"
  >Titulo Dinamico:{{contador}}</h1>
  <h1
    :style="{'color':color}"
  >Titulo Dinamico2: {{signoPeso}}</h1>
</template>

<script>
import { computed } from 'vue'
export default {
  // Los props se sigue trabajando de la misma manera que en vue 2
  props:['contador', 'color'],
  // podemos combinar las propiedades computadas con el prop de otro componente
  // Podemos mezclar el API de composicion con el API de opciones
  // computed:{
  //   signoPeso(){
  //     return '$' + this.contador
  //   }
  // }
  
  // Haciendo el mismo computed pero con setup
  // para acceder a contador debemos de pasar los props
  setup(props){
    const signoPeso = computed(()=>{
      return '$' + props.contador
    })

    return {signoPeso}
  }

}
</script>