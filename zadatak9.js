/* Napiši funkciju koja pronalazi razliku između najveće i najmanje vrijednosti u nizu.


	Ulaz:
[7, 3, 10, 15, 2] 

	Izlaz: 
	13 //(15 - 2)
*/

function razlikaNajvecegiNajmanjeg(niz) {
  let min = niz[0]
  let max = niz[0]

  niz.forEach((element) => {
    if (element < min) {
      min = element
    }

    if (element > max) {
      max = element
    }
  })

  let razlika = max - min
  return razlika
}

let niz = [7, 3, 10, 15, 2]
console.log(razlikaNajvecegiNajmanjeg(niz))
