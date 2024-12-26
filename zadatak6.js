/* Napisati program koji pronalazi sve brojeve u nizu koji su veći od prosjeka brojeva u istom nizu. 

	Ulaz: 
	[1, 2, 3, 4, 5]

	Izlaz: 
	[4, 5]
*/

let niz = [1, 2, 3, 4, 5]

function veciOdProsijeka(niz) {
  let suma = 0

  niz.forEach((element) => {
    suma += element
  })

  let prosijek = suma / niz.length

  return niz.filter((element) => element > prosijek)
}

console.log(veciOdProsijeka(niz))
