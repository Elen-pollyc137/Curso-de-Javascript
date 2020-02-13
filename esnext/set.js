//nao aceita repeticao
const time = new Set()
time.add('Vasco') 
time.add('Sao Paulo') 
time.add('Palmeiras') 
time.add('Vasco') 

console.log(time)
console.log(time.size)
console.log(time.has('Vasco'))
console.log(time.has('vascoS'))

const nome = [ 'raquel', 'lucas', 'julia', 'lucas']
const nomesset = new Set(nome)
console.log(nomesset)