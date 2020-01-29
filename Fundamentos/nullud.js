let valor //nao inicializada
console.log(+valor)

valor = null //ausecia de valor
console.log(valor)
//console.log(valor.toString()) erro
const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.5

console.log(produto)

produto.preco = undefined //evite atribuicao de undefined
console.log(produto.preco)
//delete produto.preco // forma ideal para retirar volore
console.log(produto)

produto.preco = null //sem preco
console.log(produto)