// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array
// cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

//ejemplo array
const animal = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

// Sugerencia de función:
findArrayIndex = (array, texto) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === texto) {
      return i
    }
  }
}
console.log(findArrayIndex(animal, 'Mosquito'))
