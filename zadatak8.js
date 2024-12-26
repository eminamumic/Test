/*Napiši funkciju koja prima niz i separator te vraća string u kojem su elementi niza spojeni tim separatorom.

	Ulaz: 
	["Sings", "like", "Thunder"];
const separator = "-";

	Izlaz: 
	“Sings-like-Thunder”*/

function spojeneRijeci(niz) {
  return niz.join('-')
}

let proba = ['Sings', 'like', 'Thunder']

console.log(spojeneRijeci(proba))
