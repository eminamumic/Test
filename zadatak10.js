/*
Napiši funkciju koja vraća objekt s brojem pojavljivanja svakog elementa u nizu.

	Ulaz: 
	[1, 2, 2, 2, 3, 3, 4]

	Izlaz: 
	{ 1: 1, 2: 3, 3: 2, 4: 1 }
*/

function brojPonavljanja(niz) {
  let ponavljanja = {}
  let brojPonavljanja = 0
  niz.forEach((element) => {
    brojPonavljanja = niz.reduce((brojac, element2) => {
      if (element === element2) {
        return ++brojac
      } else {
        return brojac
      }
    }, 0)
    ponavljanja[element] = brojPonavljanja
  })
  console.log(ponavljanja)
}

let niz = [1, 2, 2, 2, 3, 3, 4]

brojPonavljanja(niz)
