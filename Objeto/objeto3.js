// pesso -> para endereco de memoria
const pessoa = { nome: 'Joao'}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa apa para um novo objeto nao pode atribuir novamente para a constante pessoa
//pessoa = { nome: 'Ana'} 


Object.freeze(pessoa) //apartir do freeze o objeto nao pode ser alterado
pessoa.nome = 'P'
console.log(pessoa)

//objeto constate
const pesssoaconstate = Object.freeze({nome: 'Ana'})
console.log(pesssoaconstate)
