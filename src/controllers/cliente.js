const ServiceCliente = require('../services/cliente')

// Criando a classe controller da cliente 
class controllerCliente{
    //TODAS as funções do controller, recebem req, res
    async GetClientes(req, res) {
        //Todas as funções do controller tem try catch
        try{
            const clientes = await ServiceCliente.GetClientes()
            console.log(clientes)
            res.send({ msg: clientes})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    CreateCliente(req, res){
        try{
            const {name, email, password} = req.body
            const cliente = ServiceCliente.CreateCliente(name, email, password)
            res.send({ msg: cliente})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    UpdateCliente(req,res){
        try{
            const id = req.params.id
            const name = req.body.name
            const cliente = ServiceCliente.UpdateCliente(id, name)
            res.send({ msg: cliente})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    
    DeleteCliente(req,res){
        try{
            const id = req.params.id
            const cliente = ServiceCliente.CreateCliente(id) 
            res.send({ msg: cliente})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    async Login(req, res) {
        try{
            const { email, password } = req.body
            const token = await ServiceCliente.Login(email, password)
            res.status(200).send({token})
        }
        catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
}
module.exports = new controllerCliente()