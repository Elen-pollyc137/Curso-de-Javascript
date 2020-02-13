const tec = new Map
tec.set('react', {framework: false})
tec.set('angular', {framework: true})
console.log(tec.react)
console.log(tec.get('react').framework)

const chavevar = new Map([
    [function(){ }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])
chavevar.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavevar.has(123))
chavevar.delete(123)
console.log(chavevar.has(123))
console.log(chavevar.size)

chavevar.set(123, 'a')
chavevar.set(456, 'b')
console.log(chavevar)


