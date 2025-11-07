/*Ejercicio 5
Dada una lista de álbumes de música, utiliza un bucle para sumar todas las duraciones solo de los álbumes de rock y luego imprime el total de estas duraciones por consola. */
const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.0 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
]

// Añade tu código de bucle aquí
let totalduration = 0
let k = 0
const duration = []
for (const i of albums) {
  duration[k] = i.duration
  k++
  // sumamos el total de duracion de todas las canciones
  totalduration = totalduration + i.duration
}
console.log('La duración total de las canciones es: ', totalduration)
// La duración total de las canciones es:  472.73999999999995
// otra forma para sumar las duraciones de las canciones
let totsum = 0
let j = 0
for (let i = 0; i < duration.length; i++) {
  totsum = totsum + duration[j]
  j++
}
console.log('total suma= ', totsum)
// total suma=  472.73999999999995
