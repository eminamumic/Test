/*Ulaz je string koji se sastoji od riječi i razmaka. Vratiti dužinu posljednje riječi u stringu.

Riječ je maksimalni podstring koji se sastoji samo od znakova koji nisu razmaci.

Primjer 1:

Ulaz: str = "Hello World"
Izlaz: 5
Objašnjenje: Posljednja riječ je "World" čija je dužina 5.*/

let str = 'Hello World'

function DuzinaZadnjeRijeci(nizRijeci) {
  let duzinaStringa = nizRijeci.length
  let zadnjiRazmak = nizRijeci.lastIndexOf(' ')
  let zadnjaRijec = nizRijeci.slice(zadnjiRazmak, duzinaStringa)
  console.log(zadnjaRijec.trim().length)
}

DuzinaZadnjeRijeci(str)
