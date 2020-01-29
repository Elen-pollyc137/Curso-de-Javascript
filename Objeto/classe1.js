class lancamento {
    constructor(nome= 'Genrico', valor= 0){
    this.nome = nome
    this.valor = valor
}}

class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano 
        this.lancamento = []
    }
    addLancamentos (...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 45000)
const contadeLuz = new lancamento('Luz', -220)
const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contadeLuz)
console.log(contas.sumario())