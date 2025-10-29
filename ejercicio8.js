/*Ejercicio 8
Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola. */
const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  {
    name: 'David Bowie',
    influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground']
  },
  {
    name: 'Eddie Vedder',
    influences: ['The Who', 'Neil Young', 'Jim Morrison']
  },
  {
    name: 'Freddie Mercury',
    influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin']
  },
  {
    name: 'John Lennon',
    influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly']
  }
]

// Añade tu código de bucle aquí
for (const i of artists) {
  //console.log(i.influences)
  for (const j of i.influences) {
    console.log('artista', i.name, '    Influido por: ', j)
  }
}
//console.log(artists)
/*PS C:\Users\Rafael\Desktop\repositorios curso ciber\ejercicios_bucles_funciones_js> node ejercicio8.js
artista Kurt Cobain     Influido por:  The Beatles
artista Kurt Cobain     Influido por:  Pixies
artista Kurt Cobain     Influido por:  Lead Belly
artista David Bowie     Influido por:  Little Richard
artista David Bowie     Influido por:  Chuck Berry
artista David Bowie     Influido por:  The Velvet Underground
artista Eddie Vedder     Influido por:  The Who
artista Eddie Vedder     Influido por:  Neil Young
artista Eddie Vedder     Influido por:  Jim Morrison
artista Freddie Mercury     Influido por:  Liza Minnelli
artista Freddie Mercury     Influido por:  Jimi Hendrix
artista Freddie Mercury     Influido por:  Aretha Franklin
artista John Lennon     Influido por:  Elvis Presley
artista John Lennon     Influido por:  Chuck Berry
artista John Lennon     Influido por:  Buddy Holly
*/
