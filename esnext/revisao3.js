//es8: Oject.velues e Object.emtries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notacao litral
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'oi gente'
    }
}
console.log(pessoa.ola(), pessoa.nome)

//class
class animal{}
class cachorro extends animal{
    falar(){
        return 'auau'
    }
}