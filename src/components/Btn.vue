<template>
  <!-- Recibimos el evento -->
  <!-- Esta es la opcion rapida y es valida -->
  <!-- <button @click="$emit('accion')" >{{textoBoton}}</button> -->

  <!-- Esta es la forma si queremos trabajar con el setup de a composition API -->
  <button @click="accionHijo" >{{textoBoton}}</button>
</template>

<script>
export default {
  props:['textoBoton'],
  // Para acceder a las props del padre debemos pasarlas como parametro al setup
  // tambien debemos pasar el contexto
  setup(props, context){
    const accionHijo = () =>{
      // Con el contexto ya podemos acceder a la accion del componente padre
      context.emit('accion')
    }
  
    return{accionHijo}

  }

}
</script>
