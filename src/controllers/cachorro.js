const ServiceCachorro = require('../services/cachorro')

// Criando a classe controller da cachorro 
class controllerCachorro{
    //TODAS as funções do controller, recebem req, res
    async GetCachorros(req, res) {
        //Todas as funções do controller tem try catch
        try{
            const cachorros = await ServiceCachorro.GetCachorros()
            res.send({ msg: cachorros})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    async CreateCachorro(req, res){
        try{
            const name = req.body.name
            const cachorro = await ServiceCachorro.CreateCachorro(name)
            res.send({ msg: cachorro})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    async UpdateCachorro(req,res){
        try{
            const id = req.params.id
            const name = req.body.name
            const cachorro = await ServiceCachorro.UpdateCachorro(id, name)
            res.send({ msg: cachorro})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
    
    async DeleteCachorro(req,res){
        try{
            const id = req.params.id
            const cachorro = await ServiceCachorro.CreateCachorro(id) 
            res.send({ msg: cachorro})
        }catch (error) {
            // todo catch vai ser assim
            res.status(500).send({msg: error.message})
        }
    }
}
module.exports = new controllerCachorro()