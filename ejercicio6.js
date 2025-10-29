/*Ejercicio 6
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
Utiliza bucles para lograrlo e imprime el objeto final por consola. */
const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
]

// Añade tu código de bucle aquí
const decade60 = []
const decade70 = []
const decade80 = []
const decade90 = []
const decade00 = []
const decade10 = []
let v60 = 0
let v70 = 0
let v80 = 0
let v90 = 0
let v00 = 0
let v10 = 0
for (const i of starWarsMovies) {
  //console.log(i)
  if (i.releaseYear > 1969 && i.releaseYear < 1980) {
    decade70[v70] = i
    v70++
  } else if (i.releaseYear > 1979 && i.releaseYear < 1990) {
    decade80[v80] = i
    v80++
  } else if (i.releaseYear > 1989 && i.releaseYear < 2000) {
    decade90[v90] = i
    v90++
  } else if (i.releaseYear > 1999 && i.releaseYear < 2010) {
    decade00[v00] = i
    v00++
  } else {
    decade10[v10] = i
    v10++
  }
}
const object = {
  deca60: decade60,
  deca70: decade70,
  deca80: decade80,
  deca90: decade90,
  deca00: decade00,
  deca10: decade10
}
console.log('El listado de películas agrupadas por décadas queda así: ', object)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio6.js
El listado de películas agrupadas por décadas queda así:  {
  deca60: [],
  deca70: [ { title: 'A New Hope', releaseYear: 1977 } ],
  deca80: [
    { title: 'The Empire Strikes Back', releaseYear: 1980 },
    { title: 'Return of the Jedi', releaseYear: 1983 }
  ],
  deca90: [ { title: 'The Phantom Menace', releaseYear: 1999 } ],
  deca00: [
    { title: 'Attack of the Clones', releaseYear: 2002 },
    { title: 'Revenge of the Sith', releaseYear: 2005 }
  ],
  deca10: [
    { title: 'The Force Awakens', releaseYear: 2015 },
    { title: 'The Last Jedi', releaseYear: 2017 },
    { title: 'The Rise of Skywalker', releaseYear: 2019 },
    { title: 'Rogue One', releaseYear: 2016 },
    { title: 'Solo', releaseYear: 2018 }
  ]
} */
