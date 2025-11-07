/*Ejercicio 10
Desarrolla una función que reciba un país por parámetro y devuelva su capital.
Utiliza un objeto para almacenar los países y sus capitales.
La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado. */
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  // insert code
  // Con el método object.keys(objeto) conseguimos un array sobre el que podremos iterar para localizar el país(En este objeto cada país es una clave).
  const allkeys = Object.keys(capitals)
  // console.log(allkeys)
  // La variable i del for...in va iterando el objeto capitals por las claves(países) y a su vez por el array auxiliar allkeys mientras que capitals[i] itera por los valores de las claves que son las capitales de cada país.
  let k = 0
  for (const i in capitals) {
    if (country === i) {
      k = country
      console.log(country + ' cuya capital es:', capitals[i])
    } /*else {
      return console.log('Este país no aparece en el listado')
    }*/
    //console.log('País:', i, '  Capital:', capitals[i]) OK
    //console.log()
  }
  //console.log(k)
  if (k === 0) {
    console.log('Lo siento, ' + country + ' no aparece en el listado')
  }
}
getCapital('Portugal')
// Portugal cuya capital es: Lisbon
getCapital('China')
// Lo siento, China no aparece en el listado
