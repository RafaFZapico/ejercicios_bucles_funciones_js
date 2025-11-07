/*Ejercicio 4
Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.
Imprime el nombre por consola. */
const cartoons = [
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
]

// Añade tu código de bucle aquí
// Creamos un array con las fechas de estreno de los dibujos animados y la ordenamos para que quede en la primera posición la más antigua.
let oldestcartoon
const ages = []
let k = 0
for (const i of cartoons) {
  ages[k] = i.debut
  k++
}
ages.sort()
// Seguidament buscamos en el array cartoons la película más antigua.
for (const i of cartoons) {
  if (i.debut === ages[0]) {
    oldestcartoon = i
  }
}
console.log(
  'La película animada más antigua es: ',
  oldestcartoon.name,
  ',estrenada en el año:',
  oldestcartoon.debut
)
// La película animada más antigua es:  Mickey Mouse ,estrenada en el año: 1928
