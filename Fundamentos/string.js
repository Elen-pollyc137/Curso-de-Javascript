const escola = "Coder"

console.log(escola.charAt(2)) //Retorna qual valor esta na posicao indicada na tring
console.log(escola.charCodeAt(3)) //retorna o valor na tabela ASC
console.log(escola.indexOf('o')) //obseva qual posicao o valor pesquisado na string
console.log(escola.substring(1)) // retorna o valor apartir do 1
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola.concat("!")))//Strin concatenado com vrias variaveis
console.log('Escola '+ escola +'!')
console.log(escola.replace('o', 'e'))//modificar a todo valo o por e

console.log('Ana, Maria, Pedro'.split(',')) //modificar string por array apartir de cada virgula
