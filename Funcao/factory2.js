function criaproduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criaproduto("Notebook", 2999))