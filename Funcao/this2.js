//um forma de colocar o this que varia
//contador
function Pessoa(){
    this.idade = 0
  const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa