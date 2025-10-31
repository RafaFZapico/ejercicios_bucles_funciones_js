/*Ejercicio 7
Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.
Utiliza bucles para estructurar este objeto e imprime el resultado por consola. */
const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
]

// Añade tu código de bucle aquí
// 1) Creamos un array con los géneros contenidos en la clave genre del array tracks
const genres = []
let vargen = 0
for (const i of tracks) {
  //console.log(i)
  genres[vargen] = i.genre

  vargen++
}
//console.log(genres)
// 2)Quitamos los duplicados, del array que contiene los géneros musicales utilizando el código empleado en el ejercicio 12 de "ejercicios básicos".
for (let i = 0; i < genres.length; i++) {
  let j = i + 1
  //bucle while que compara uno a uno y elimina los elementos duplicados.
  while (j <= genres.length) {
    if (genres[i] === genres[j]) {
      genres.splice(j, 1)
    } else {
      j++
    }
  }
}
//console.log(genres)
// 3) Creamos el objeto que contenga como claves los generos y como valores un array con las canciones que pertenezcan a ese género.
const songsbygenre = {}
let k = 0
let j = 0
let m
while (j < genres.length) {
  songsbygenre[genres[k]] = []
  k++
  j++
}
console.log('songsbygenre=', songsbygenre)
for (const i of tracks) {
  for (let j = 0; j < genres.length; j++) {
    if (i.genre === genres[j]) {
      songsbygenre[genres[j]].push(i.title)
    }
  }
  //console.log(i)
}
console.log(
  'La clasificación de las canciones, por género musical queda de la siguiente manera: ',
  songsbygenre
)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio7.js
La clasificación de las canciones, por género musical queda de la siguiente manera:  {
  Metal: [ 'Enter Sandman' ],
  Rock: [
    'Back in Black',
    'Bohemian Rhapsody',
    'Thunderstruck',
    'Hotel California',
    'Stairway to Heaven'
  ],
  Pop: [ 'Blinding Lights', 'Bad Guy' ],
  Country: [ 'Old Town Road' ],
  Grunge: [ 'Smells Like Teen Spirit' ]
}
*/
