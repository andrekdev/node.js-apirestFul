//requires
const express = require('express')
//const path = require('path')
//const db = require('./database')
const routes = require('./routes/routes')

const app = express()

//conexão db 
//db.connect()

//habilita o servidor a receber dados vias posts(formularios)
app.use(express.urlencoded({extends: true}))


//definindo as rotas
app.use('/api', routes)

//rota 404
/*
app.use((req, res) => {
    res.send('Page not found')
})*/

//Porta em que o servidor vai rodar
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor ligado: http://127.0.0.1/${port}`))



console.log('Olá mundo')