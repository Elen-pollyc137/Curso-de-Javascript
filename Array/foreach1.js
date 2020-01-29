const aprovados = ['ap1', 'ap2', 'ap3', 'ap4',]

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice+1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibiAprovado = aprovados => console.log(aprovados)
aprovados.forEach(exibiAprovado)