 //Object.preventExtensions
 const produto = Object.preventExtensions({
     nome: 'Qualquer', preco: 1.99, tag: 'promocao'
 }) 
 console.log('Extensivel: ', Object.isExtensible(produto))

 produto.nome = 'Borracha'
 produto.descricao = 'borracha escolar branca'
 delete produto.tag
 console.log(produto)

 //Oject.seal
 const pessoa = { nome: 'Juliana', idade: 35 }
 Object.seal(pessoa)
 console.log('selado ', Object.isSealed(pessoa))
 pessoa.sobrenome= 'Silva'
 delete pessoa.nome
 pessoa.idade = 19
 console.log(pessoa)

 //Object.freeze  = Selado + valores constates

