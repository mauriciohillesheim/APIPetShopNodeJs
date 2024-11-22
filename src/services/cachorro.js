const ModelCachorro = require('../models/cachorro')

// Criando a classe ServiceCachorro
class ServiceCachorro {
    async GetCachorros() {
        return ModelCachorro.findAll()
    }

    async CreateCachorro(nome, raca, idade) {
        // Verificar se os dados foram preenchidos
        if (!nome || !raca || idade === undefined) {
            throw new Error("Favor preencher todos os dados!")
        }
        // Chamar o método para criar o cachorro
        return ModelCachorro.CreateCachorro(nome, raca, idade)
    }

    async UpdateCachorro(id, nome, raca, idade) {
        // Fazer verificações - se mandou o id e o nome
        if (!id || !nome) {
            throw new Error("Favor informar o id e o nome")
        }

        // Procurar o cachorro pelo ID
        const cachorro = await ModelCachorro.findByPk(id)
        if (!cachorro) {
            throw new Error("Cachorro não encontrado")
        }

        // Atualizar os dados do cachorro
        cachorro.nome = nome || cachorro.nome
        cachorro.raca = raca || cachorro.raca
        cachorro.idade = idade !== undefined ? idade : cachorro.idade

        // Salvar as mudanças
        cachorro.save()
        return cachorro
    }

    async DeleteCachorro(id) {
        return ModelCachorro.DeleteCachorro(id)
    }
}

module.exports = new ServiceCachorro()
