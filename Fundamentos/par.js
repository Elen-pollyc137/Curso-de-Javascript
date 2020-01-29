const saudacao = 'opa' // contexto lexico 1
function exec(){
    const saudacao = 'Falaa' //contexto lexico 2
    return saudacao
}
//objetos sao grupos aninhado de pares nome valor
const cliente = {
    nome: 'Pedro',
    idade: 21,
    peso: 80,
    endereco:{
        logadouro: 'Rua 1',
        numero:123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)