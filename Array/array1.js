console.log(typeof Array, typeof new Array)

let aprovado = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovado)

let aprovado2 = ['Bia', 'Carlos', 'Ana']
    console.log(aprovado[0])
    console.log(aprovado[1])
    console.log(aprovado[2])
    console.log(aprovado[3])

    aprovado[3] = 'Paulo'
    aprovado2.push('Abia')
    console.log(aprovado2.length)

    aprovado[9] = 'Pee'
    console.log(aprovado.length)
    console.log(aprovado[8] === undefined)
    aprovado2.sort()
    console.log(aprovado2)

    aprovado.splice(1)//metodo para excluir e add no indice
    console.log(aprovado)