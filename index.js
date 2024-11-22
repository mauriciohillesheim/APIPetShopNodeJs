const express = require('express')
const routersCliente = require('./src/routes/cliente')
const database = require('./src/config/database')
// const e = require('express')
const routersCachorro = require('./src/routes/cachorro')
// Instanciar um express
const app = express()

//middleware json - aceita json no body
app.use(express.json())

// Adicionar as rotas ao express
app.use('/cliente', routersCliente)
app.use('/cachorro', routersCachorro)
const PORT=3000

database.db
    .sync({ force: false })
    .then((_) => {
        console.info("Banco conectado com sucesso")
        app.listen(3000, () => {                   // Inicializar o servidor
            console.info(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou: ${e}`)
    })
