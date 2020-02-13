//tagged templates

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra stringa'
}
const aluno = ' gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} esta ${situacao}`)