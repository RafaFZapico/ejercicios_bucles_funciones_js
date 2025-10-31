/*Ejercicio 13
Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
Averigua como hallar el año actual en tus cálculos.*/
const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
]
//console.log(actors)
function calculateActorsAges(actors) {
  // console.log(actors)
  // insert code,
  // calculamos el año actual
  let fechactual = new Date()
  let añoactual = fechactual.getFullYear()
  console.log(añoactual)
  // creamos el nuevo array con el nombre y la edad de los actores
  let k = 0
  const actorsage = []
  //console.log(actors)

  for (const i of actors) {
    // console.log(i.name)
    let object = { name: i.name, age: añoactual - i.born }
    actorsage.push(object)
  }
  console.log(actorsage)
}
calculateActorsAges(actors)
