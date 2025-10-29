/*Ejercicio 2
Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.
Imprime ambos conteos por consola.
*/
const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
]
// Añade tu código de bucle aquí
let beforeMM = 0
let afterMM = 0
for (const i of movies) {
  if (i.releaseYear < 2000) {
    beforeMM++
  } else {
    afterMM++
  }
}
console.log('La cantidad de películas anteriores al 2000 es: ', beforeMM)
console.log('La cantidad de películas posteriores al 1999 es ', afterMM)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio2.js
La cantidad de películas anteriores al 2000 es:  7
La cantidad de películas posteriores al 1999 es  3 */
