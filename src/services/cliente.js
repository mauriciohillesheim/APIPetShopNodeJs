const ModelCliente = require('../models/cliente')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SALT = 12  

//criando a classe servicePessoa
class ServiceCliente {
    async GetClientes( ) {
        return ModelCliente.findAll()
    }
    async CreateCliente(name, email, password) {
        //fazer verificações - se mandou o name
        if(!name ){
            throw new Error("Favor preencher todos os dados!")
        }
        //verificar se o telefone já existe
        const hashSenha = await bcrypt.hash(password, SALT)
        return ModelCliente.create({name, email, password: hashSenha})
    }
    async UpdateCliente(id, name, telefone, password) {
    // fazer verificações - se mandou o id e o name
        if(!id){
            throw new Error("Favor informar o id")
    }
    const cliente = await ModelCliente.findByPk(id)
    if(!cliente){
        throw new Error("Cliente não encontrado")
    }
        cliente.nome = name || cliente.name
        cliente.password = password 
            ? await bcrypt.hash(password, SALT)
            : cliente.password
        cliente.telefone = telefone || cliente.telefone

        cliente.save()
        return cliente
             
        
    }
    async DeleteCliente(id) {
        if(!id)
            throw new Error("Favor informar o id")
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }
        return cliente.destroy()
    }
    async Login(email, password) {
        const cliente = await ModelCliente.findOne({ where: { email } })

        if(!cliente) {
            throw new Error("Cliente não encontrado")
        }

        const senhaValida = bcrypt.compare(password, cliente.password)

        if(!senhaValida) {
            throw new Error("Senha inválida")
        }
        
        // Gerar o token
        return jwt.sign({ id: cliente.id }, 'segredo', { expiresIn: 60*60 })
    }
}
module.exports = new ServiceCliente()