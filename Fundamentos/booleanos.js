let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1
console.log(!isativo)

console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!! (isativo = true))

console.log('Os Falsos.......')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('Pra finaliza....................')
console.log(!!('' || null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')