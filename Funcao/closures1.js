//clouser e o escopo criado quando vc defina sua funcao
//que permite acessar e manipualar as variaveis da funcao
const x = 'global'

function fora (){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}
const minhafuncao = fora()
console.log(minhafuncao())