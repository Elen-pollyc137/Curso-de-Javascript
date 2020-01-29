// Armazenando uma Funcao em uma Variavel
const imprimirSoma = function (a, b){
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const Soma = (a, b)=>{
    return a + b
}
console.log(Soma(4, 7))

//retorno implicito
const subtracao = (a, b) => a-b
console.log(subtracao(5, 5))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')