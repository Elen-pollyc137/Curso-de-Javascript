//esse codigo gera numeros aleatoriamente
function gerarinteiro(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0 
while(opcao != -1){
    opcao = gerarinteiro(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}
console.log('Ate a proxima!')