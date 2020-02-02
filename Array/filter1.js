const produto = [
{nome:'Notebook', preco:2400, fragil: true},
{nome:'iPad Pro', preco:4199, fragil: true},
{nome:'Copo de Vidro', preco:12.49, fragil: true},
{nome:'Copo de Plastico', preco:18.99, fragil: false}
]
console.log(produto.filter(function(p){
    return p.preco
}))//o filter te a importancia de fitrar informacoes