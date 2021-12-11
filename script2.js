// Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
  {
    name: 'Manolo el del bombo',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 },
    },
  },
  {
    name: 'Mortadelo',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 },
    },
  },
  {
    name: 'Super Lopez',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 },
    },
  },
  {
    name: 'El culebra',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 },
    },
  },
]

let getMediaByUser = (array) => {
  let tabla = {}
  let cantidad = 0
  let totalVolumen = 0

  for (let value of array) {
    for (let propiedad in value.favoritesSounds) {
      //un for por cada posicion de mi array que este recorriendo
      totalVolumen += value.favoritesSounds[propiedad].volume
      cantidad++
    }

    tabla[value.name] = totalVolumen / cantidad
    calidad = 0
    totalVolumen = 0
  }

  return tabla
}
console.log(getMediaByUser(users))

// let getMedia = (array) => {
//   let cantidad = 0
//   let totalVolumen = 0
//   for (let value of array) {
//     for (let propiedad in value.favoritesSounds) {
//       //un for por cada posicion de mi array que este recorriendo
//       totalVolumen += value.favoritesSounds[propiedad].volume
//       cantidad++
//     }
//   }
//   let media = totalVolumen / cantidad
//   return media
// }
// let resultado = getMedia(users)
// console.log(`la media es ${resultado}`)
