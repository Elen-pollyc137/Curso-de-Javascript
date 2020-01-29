const onj1 = {a: 1, b:2, c:3, soma(){ return a+b+c}}
console.log(JSON.stringify(onj1))

//console.log(JSON.parse("{a: 1, b:2, c:3}"))
console.log(JSON.parse('{ "a": 1, "b":2, "c":3 }'))
console.log(JSON.parse('{ "a": 1, "b":2, "c":3, "d":{}, "e": [] }'))