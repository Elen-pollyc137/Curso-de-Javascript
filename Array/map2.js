const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.95}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 1.99 }'
]

//Retornar um array apenas com os precos
const paraObj = json => JSON.parse(json)
const apenaspreco = produto => produto.preco
const resultado = carrinho.map(paraObj).map(apenaspreco)
console.log(resultado)