const peso1 = 1.0
const peso2 = Number ('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.81

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log (7 / 0) // infinit e o rsultado alternativo de funcoes que na rodam
console.log("10" / 2) // aceitavel dividir string por inteiros
console.log("Show" + 2) // isso nao e possivel calclar entao gera NAN not a number nao e um numero
console.log(0.1 + 0.7) // isso gera uma imprecisao 