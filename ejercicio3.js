/*Ejercicio 3
Filtra una lista de canciones para crear una playlist que solo contenga canciones de rock que duren más de 5 minutos.
Utiliza un bucle para lograrlo e imprime la nueva playlist por consola.*/
const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 }
]
const rockPlaylist = []

// Añade tu código de bucle aquí
const playlist = []
let k = 0
for (const i of songs) {
  if ((i.genre = 'Rock' && i.duration > 5.0)) {
    playlist[k] = i
    k++
  }
}
console.log(
  'La lista elegida de canciones rock con duración superior a 5 minutos es: ',
  playlist
)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio3.js
La lista elegida de canciones rock con duración superior a 5 minutos es:  [
  { title: 'Bohemian Rhapsody', genre: true, duration: 5.55 },
  { title: 'Stairway to Heaven', genre: true, duration: 7.58 },
  { title: 'Hotel California', genre: true, duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: true, duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: true, duration: 5.01 },
  { title: 'Comfortably Numb', genre: true, duration: 6.23 },
  { title: 'Wish You Were Here', genre: true, duration: 5.34 }
]*/
