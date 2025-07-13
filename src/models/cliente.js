// const nomes = new Array("Ana", "Sebastião")
//criando a classe servicePessoa
const database = require('../config/database')
class ModelCliente {
    constructor(){
        this.model = database.db.define('clientes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },        
            name: {
                type: database.db.Sequelize.STRING
            },
            telefone: {
                type: database.db.Sequelize.STRING,
                unique: true 
            },
            password: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING
            }
        })
    }  
}
module.exports = new ModelCliente().model

// GetPessoas() {
    //     return nomes
    // }
    // CreatePessoa(name) {
    //     return nomes.push(name)
    // }
    // UpdatePessoa(id, name) {
    //     return nomes[id] = name
    // }
    // DeletePessoa(id) {
    //     return nomes.splice(id, 1)
    // }