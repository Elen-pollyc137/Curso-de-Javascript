//criar funcao de forma literal
function fun1(){ }

//armazenar variaveis
const fun2 = function (){ }

//armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar objetos
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//pasar uma funcao como parametro
function run(fun){
    fun()
}
 
run (function () { console.log('Executando')})

// uma funcao pode retornar/conter uma funcao
 function soma(a, b){
     return function(c){
         console.log(a + b + c)
     }

 }
 soma(2, 3)(4)