// En este hooks debemos poner toda la logiaca que queramos reutilizar
// como estamos ocuapando el ref debemos de importarlo
import {ref} from 'vue'

export const useContador = () => {
  const contador = ref(0)

  const aumentar = () => {
    contador.value ++
  }

  const disminuir = () => {
    contador.value --
  }

  return {contador, aumentar, disminuir}

}