/*Ejercicio 12
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.*/
/*const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]*/
/* cuatro mutantes con el mismo poder: "regeneration"
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'regeneration' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'regeneration' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'regeneration' }
]*/

function findMutantByPower(mutant, power) {
  // insert code
  // console.log(power)
  // declaramos la variable countpowers que cuenta cuenta cuantos mutantes coinciden su poder con el del segundo parámetro "power" de la función.
  let countpowers = 1
  // declaramos el array mutwithpower, en el que registramos los mutantes que tiene el mismo poder.
  let mutwithpower = []
  let k = 0
  let mut
  for (const i of mutants) {
    //console.log('i vale: ', i)
    if (i.power === power && i.name === mutant) {
      console.log('El mutante existe y es: ', i.name)
      mut = 'yes'
      //countmutants++
      //console.log('la variable countmutants vale: ', countmutants)
    }
    if (i.power === power && i.name !== mutant) {
      mutwithpower[k] = i.name
      k++
      countpowers++
      // console.log('la variable countpowers vale: ', countpowers)

      // console.log(countpowers)
    }
  } // fin de bucle for of que recorre el array mutants
  /*if (i.name !== mutant) {
      mut = false
    }*/

  if (mut !== 'yes') {
    console.log('El mutante, con ese poder, no existe')
    return
  }
  //if(mut==="yes"&&)
  if (countpowers > 2) {
    console.log(
      'Hay otros ',
      countpowers - 1,
      'mutantes con ese poder y son',
      mutwithpower
    )
  } else if (countpowers > 1) {
    console.log('Hay otro mutante y es:', mutwithpower)
  }
} // fin de la función
// La variable othermutant nos dirá si hay más mutantes con el mismo poder y cuantos son
//othermutant = countpowers - countmutants

//console.log('Hay otro/s', countpowers - countmutants, 'mutante/s')
//console.log('la variable count vale: ', count)
//console.log('la variable mut vale: ', mut)

findMutantByPower('Magneto', 'escalador')
//! RESULTADOS:
//? VARIANTE 1) Con el array mutants inicial
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio12.js
El mutante existe y es:  Wolverine */
//? VARIANTE 2) Con el array mutants modificado, con 4 mutantes con el mismo poder. El array es el siguiente:
/*const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'regeneration' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'regeneration' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'regeneration' }
] */
//? Y la solución es la siguiente:
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio12.js
El mutante existe y es:  Wolverine
Hay otros  3 mutantes con ese poder y son [ 'Jean Grey', 'Mystique', 'Nightcrawler' ]
 */
//? VARIANTE 3) No existe el mutante. La llamada de la función y los parámetros es la siguiente: findMutantByPower('Spiderman', 'regeneration')
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio12.js
El mutante, con ese poder, no existe
*/
//? VARIANTE 4) El mutante existe pero no con ese poder.La llamada de la función y los parámetros es la siguiente: findMutantByPower('Magneto', 'escalador')
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio12.js
El mutante, con ese poder, no existe
 */
