//operador ... res(juntar)/ spread(eespalhar)

//usar spread com objeto
const funcionario = {nome: 'Maria', salario:1234.5}
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com araay
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria',...grupoA, 'Rafaela']
console.log(grupoFinal)