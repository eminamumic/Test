/*Za niz cijelih brojeva nums i cijeli broj target, trebaš vratiti indekse dva broja tako da njihov zbir bude jednak cilju (target).

Možeš pretpostaviti da svaki ulaz ima tačno jedno rješenje, i ne smiješ koristiti isti element dva puta.

Odgovor može biti vraćen u bilo kojem redoslijedu.

Primjer:

Ulaz: nums = [2,7,11,15], target = 9
Izlaz: [0,1]*/

function targetFunkcija(niz, target) {
  let elementi = []
  niz.forEach((element, index) => {
    let drugiBroj = target - element
    elementi = niz.reduce((cinioci, elementDr, i) => {
      if (elementDr === drugiBroj && i !== index) {
        return [index, i]
      } else {
        return cinioci
      }
    }, elementi)
  })

  return elementi
}

let nums = [2, 7, 11, 15]
let target = 9

console.log(targetFunkcija(nums, target))
