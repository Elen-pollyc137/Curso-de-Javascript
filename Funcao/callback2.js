const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasbaixas = []
for(let i in notas){
    if(notas[i]<7)
    notasbaixas.push(notas[i])

}
console.log(notasbaixas)

//com callback
notasbaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasbaixas2)

const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)

const notasmenor7 = nota => nota < 7
const notasbaixas4 = notas.filter(notasmenor7)
console.log(notasbaixas4)