<template>
  <div class="about">
    <!-- Pasando props al componente para que sea dinamico el titulo -->
    <Titulo :contador="contador" :color="color" />
    <h1
      :style="{'color':color}"
    >
      Contador:{{contador}}
    </h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>

    <hr>

    <input type="text" v-model="texto">
    <p>{{texto}}</p>

    <hr>
    <!-- Ocupando el componente hijo (boton) en el componente padre (About) -->
    <!-- Para pasar el evento debemos usar el accion -->
    <Btn :textoBoton="'Aumentar'" @accion="aumentar" />
    <Btn :textoBoton="'Disminuir'" @accion="disminuir" />

  </div>
</template>

<script>
// ref se necesita para que nuestros valores sean reactivos
import { computed, ref } from 'vue'
import Titulo from '../components/Titulo'
import Btn from '../components/Btn'

// Asi seria trabajar el contador con la API de composicion
export default {
  // tenemos el setup. El setup se ejecuta antes de que se cree el componente,
  // una vez que se resuelven los props y sirve como punto de entrada de la composition API
  // Una ventaja es que dentro del setup podemos hacer un llamado a una API externa
  // antes de que se pinte toda la informacion del template.

  // Los componentes se digue trabajando igual que en vue 2
  components:{
    Titulo,
    Btn
  },

  // En el setup NO se incorporan los componentes, No se incorporan los props, No se incorpora
  // el nombre de la vista

  // El setup SI tiene todas las configuraciones de las propiedades computadas, los metodos
  // El ciclo de vida
  setup(){
    // para que nuestro contador sea reactivo debemos crear una referencia
    // entonces debemos hacer uso del metodo ref
    // ref puede recibir numeros, booleanos, objetos, arreglos. 
    const contador = ref(0)

    // Para los declarar los metodos ya no necesitamos usar la palabra methods 
    // simplemente creamos funciones
    const aumentar = () => {
      // para acceder al valor de la referencia debemos acceder con el operador punto
      contador.value ++
    }

    const disminuir = () => {
      contador.value --
    }

    // para hacer uso de las propiedades computadas en vue 3 debemos crear una constante
    const color = computed(()=>{
      // Recordar que para acceder al valor de contador debemos usar el .value
      if (contador.value<0) {
        return 'red'
      }
      return 'blue'
    })

    // para usar el v-model en vue 3
    const texto = ref('')
    
    
    return { contador, aumentar, disminuir, color, texto }
  }

}
</script>
