const porta = 3003

const express = require('../node_modules/express')
const app = express()
const bodyParser = require('../node_modules/body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next)=>{
    res.send(bancodedados.getProdutoS()) // converter para JSON

})

app.get('/produtos/:id', (req, res, next)=>{
    res.send(bancodedados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancodedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancodedados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}`)
})