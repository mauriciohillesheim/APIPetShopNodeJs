const express = require('express')
const ControllerCliente = require('../controllers/cliente')
const auth = require("../middleware/auth")

//Inicializando as rotas do express
const router = express.Router()

//Criando a rotas
router.post('/login', ControllerCliente.Login)
router.get('/', ControllerCliente.GetClientes)
router.post('/', ControllerCliente.CreateCliente)
router.put('/:id', auth, ControllerCliente.UpdateCliente)
router.delete('/:id', auth, ControllerCliente.DeleteCliente)

//Exportar as rotas
module.exports = router