//requires
const express = require('express')
//const path = require('path')
const db = require('./database/db')
const routes = require('./routes/routes')
const cors = require('cors')
const app = express()

//conexão db 
db.connect()

//cors
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br'
]


//habilita CORS
app.use(cors({
    origin: function (origin, callback){
        let allowed = true

        //mobile app
        if(!origin) allowed = true 

        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

//habilita o servidor a receber dados vias posts(formularios)
app.use(express.json())


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