function tratarErro(erro){
    throw 
      'Erro parou o sistema'
    
}
function imprimirNome(obj){
   try{
    console.log(obj.name.toUpperCase() + '!!!')
}catch(e){
    tratarErro(e)
}
}
const obj = {nome: 'Roberto'}
imprimirNome(obj)