/*object = {
  decada70: ['los 7 magníficos', 'el llanero solitario'],
  decada80: ['los goonies', 'arma letal']
}
console.log(object)
object.color = 'rojo'
console.log(object)
object.tamaño = 0
console.log(object)*/
genres = ['Metal', 'Rock', 'Pop', 'Country', 'Grunge']

const songsbygenre = {}
let k = 0
let j = 0
let m
while (j < genres.length) {
  songsbygenre[genres[k]] = []
  k++
  j++
}
console.log(' el objeto es:', songsbygenre)
songsbygenre[genres[0]].push('titulo 1')
console.log(' el objeto es:', songsbygenre)
songsbygenre[genres[0]].push('titulo 2')
//songsbygenre[genres[0]]+1=""
//songsbygenre[genres[0]] = 'titulo 2'
console.log(' el objeto es:', songsbygenre)

//! FUNCIONA
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node pruebas.js
 el objeto es: { Metal: [], Rock: [], Pop: [], Country: [], Grunge: [] }
 el objeto es: { Metal: 'titulo 1', Rock: [], Pop: [], Country: [], Grunge: [] }
*/
