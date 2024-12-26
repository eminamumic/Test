/*
Napiši funkciju koja prima 2D niz (matricu) i vraća njegovu transponovanu verziju 
(redovi orginalnog niza postaju kolone novog niza).
	
	Ulaz: 
	[1, 2, 3],    //0,0   0,1   0,2
[4, 5, 6],        // 1,0, 1,1,  1,2
[7, 8, 9]        // 2,0   2,1   2,2

Izlaz: 
[1, 4, 7],       // 0,0 1,0 2,0
[2, 5, 8],       // 0,1  1,1 2,1 
[3, 6, 9]       // 0,2  1,2  2,2
*/

let matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

function obrniKoloneiRedove(matrica) {
  let novaMatrica = []

  matrica.forEach((red, i) => {
    red.forEach((element, j) => {
      novaMatrica.push(matrica[j][i])
    })
  })
  return novaMatrica
}

console.log(obrniKoloneiRedove(matrica))
