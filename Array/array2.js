const pilotos = ['piloto1', 'piloto2','piloto3','piloto4']
pilotos.pop()//remove o ultimo elemento
console.log(pilotos)

pilotos.push('piloto4')//adiciona na primeira posicao
console.log(pilotos)

pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('piloto5')//adiciona na ultima posicao
console.log(pilotos)

pilotos.splice(2, 0, 'piloto6', 'piloto7')
console.log(pilotos)

pilotos.splice(3, 1)
console.log(pilotos)

const algunspilotos = pilotos.splice(2)
console.log(algunspilotos)

const algunspilotos2 = pilotos.splice(2)
console.log(algunspilotos2)