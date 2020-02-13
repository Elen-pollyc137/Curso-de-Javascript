for (let letra of "Cod3r"){
    console.log(letra)
}
const assunto = ['Map', 'Set', 'Promise']

for(let i in assunto){
    console.log(i)
}
for(let assun of assunto){
    console.log(assunto)
}
const assuntomap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}],
])
for(let i in assuntomap){
    console.log(i)
}
for(let chave of assuntomap.keys()){
    console.log(chave)
}
for(let valor of assuntomap.values()){
    console.log(valor)
}

for(let [ch, vl] of assuntomap.entries()){
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}