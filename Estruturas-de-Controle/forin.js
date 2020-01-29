const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas){
    console.log(`notas ${notas[i]}`)
}
const pessoa = {
    nome: 'Silvia',
    sobrenome: 'Oliveira',
    idade: 19,
    altura: 1.56
}
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}