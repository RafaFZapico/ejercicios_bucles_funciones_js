/*Ejercicio 1
Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.
Imprime este nuevo array por consola.*/
const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
]
const humanCharacters = []

// Añade tu código de bucle aquí
let k = 0
for (const i of characters) {
  if ((i.species = 'Human')) {
    humanCharacters[k] = i
    k++
  }
}
console.log(humanCharacters)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio1.js

[
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Human' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Human' },
  { name: 'C-3PO', species: 'Human' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Human' },
  { name: 'Han Solo', species: 'Human' }
]*/
