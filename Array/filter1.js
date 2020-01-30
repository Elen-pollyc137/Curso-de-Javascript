const produto = [
{nome:'Notebook', preco:2400, fragil: true},
{nome:'Notebook', preco:2400, fragil: true},
{nome:'Notebook', preco:2400, fragil: false},
{nome:'Notebook', preco:2400, fragil: true}
]
console.log(produto.filter(function(p){
    return p.preco
}))