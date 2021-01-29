const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaFato = require('./src/functions/buscaFato')
const buscaGato = require('./src/functions/buscaGato')

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/enviaDados", async (req, res) => {
    const { quantidade } = req.body
    const { tipoImagem } = req.body
    const resultadoFatos = await buscaFato(quantidade)
    const resultadoGato = await buscaGato(tipoImagem)

    res.render('resultado', {fatos: resultadoFatos, gato: resultadoGato})
})

app.listen(3080)