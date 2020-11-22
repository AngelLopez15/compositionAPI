<template>
  <!-- Si quisieramos reutilizar toda la logica del contador debemos usar los hooks-->
  <!-- Esta es una de las cartas fuertes de vue 3 -->
  <h1>Contador: {{contador}} </h1>
  <Btn :textoBoton="'Aumentar'" @accion="aumentar" />
  <Btn :textoBoton="'Disminuir'" @accion="disminuir" />

</template>

<script>
// Para usar el hook debemos de importarlo
import {useContador} from '../hooks/useContador'
import Btn from '../components/Btn'

export default {
  components:{
    Btn
  },
  setup(){
    // Con el spred opetator accedemos a todas las propiedades que nos retorna el hook
    return {...useContador()}

    // La forma larga de hacer lo mismo de la linea de arriba seria:
    
    // const {contador, aumentar, disminuir} = useContador()
    // return {contador, aumentar, disminuir}  

  }
}
</script>

<style>

</style>