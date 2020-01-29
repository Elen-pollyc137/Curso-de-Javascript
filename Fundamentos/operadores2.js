//Operadores Logicos
function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // ou
    const compraTv50 = trabalho1 && trabalho2   //e
    const compratv32 = trabalho1 != trabalho2
    const mantersaldavel = !comprarSorvete
    
    return { comprarSorvete, compraTv50, compratv32, mantersaldavel} //
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))