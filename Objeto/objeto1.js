const produto = new Object
produto.nome = 'Cadeira'
produto['marca do prodiuto'] = 'Generica'
produto.preco = 220
console.log(produto)

const carro = { 
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logadouro: 'Rua ABC',
            numero: 156,

        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValores : function(){
        //....
    }
}
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logadouro']
console.log(carro)

delete carro.condutores
delete carro.calcularValores
console.log(carro)