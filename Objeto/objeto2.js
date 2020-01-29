//criando objetos
// usando anotacao literal
const obj1 = {}
console.log(obj1)

// object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funcao construtora
function Produto(nome, preco, desc){
  this.nome
  this.getPrecocomdesconto = ()=> {
      return preco * (1 - desc)
  }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 7000, 0.15)
console.log(p1.getPrecocomdesconto(), p2.getPrecocomdesconto())

//funcao factory
function criarFuncionario(nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getsalario(){
            return (salariobase/30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario ('Joao', 7980, 4)
const f2 = criarFuncionario ('Maria', 11980, 1)
console.log(f1.getsalario(), f2.getsalario() + ' Salario mensal')

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//funcao famosa que retorna objeto
const fromJSON = JSON.parse('{"INFO": "SOU UM JSON"}')
console.log(fromJSON.INFO)
