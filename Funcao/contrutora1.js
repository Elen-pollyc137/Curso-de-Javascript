function Carro(vm = 200, del = 5){
    //atributos privados
    let va = 0

    //metodo publicp
    this.acelerar = function () {
        if (va + del <=vm){
            va += del
        }else {
            va = vm
        }
    }

    //metodo publico
    this.getva = function () {
        return va
    }
}
const uno = new Carro
uno.acelerar()
console.log(uno.getva())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
console.log(ferrari.getva())