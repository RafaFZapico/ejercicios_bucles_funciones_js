/*Ejercicio 9
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.
Utiliza este array para probar tu función. */
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]
// insert code
function findOldestXMen(xMen) {
  let oldest = []
  let k = 0
  for (const i of xMen) {
    oldest[k] = i.year
    k++
  }
  console.log(oldest)
  oldest.sort()
  console.log(oldest)
  for (const i of xMen) {
    if (oldest[0] === i.year) {
      console.log('Este miembro es de los más antiguos: ', i.name)
    }
  }

  // Fin de la función
}
findOldestXMen(xMen)
