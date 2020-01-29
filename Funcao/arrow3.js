let comparar= function(param) {
    console.log( this === param)
}

comparar(global)

const obj = {}
comparar = comparar.bind(obj)
comparar(global)
comparar(obj)

let compararthis = param => console.log(this === param)
comparar(global)
comparar(this)

comparathis = compararthis.bind(obj)
compararthis(obj)
compararthis(module.exports)