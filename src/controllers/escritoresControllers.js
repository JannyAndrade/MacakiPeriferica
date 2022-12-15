const EscritoresSchema = require("../models/EscritoresSchema")
const escritores = require("../models/EscritoresSchema")


const listarEscritores = async(req , res)=>{
    try {
        const todosEscritores = await escritores.filter()

        return res.status(200).send(todosEscritores)

    } catch (error) {
        
        return res.status(400).json(error)

    }
}

const criarEscritores = async(req , res)=>{

    const escritoresBoby = req.boby
    const {nome , email, cpf , telefone} = escritoresBoby

    try {
        const escritores =new escritores({
            nome: nome,
            email: email,
            cpf: cpf,
            telefone: telefone
        })
        const escritoresTodos = await EscritoresSchema.find()
        for(const contador in escritoresTodos){
            if(escritoresTodos[contador].cpf == escritores.cpf){
                return res.status(400).json({
                    mensagem : "CPF já foi cadastrado"
                })
            }
        }
    } catch (error) {
        
        res.status(400).json({
            message: error.message
        })
    }
}
const atualizarEscritores = async(req , res) => {

    const escritores = await EscritoresSchema.findById(req.params.id)
    if(!escritores){
        return res.status(400).send({
            mensagem: `Não foi encontrado nenhum escritor com o id ${req.params.id}`

        })
    }
}
const deleteEscritores = async(req , res) =>{
    try {
        const escritores = await EscritoresSchema.findById(req.params.id)
        await escritores.delete()
        res.status(200).json({
            message: "Escritor apagado com sucesso!"
        })
    } catch (error) {
        res.status(400).json({
            mensagem: error.mensagem
        })
    }
}


module.exports = {
    listarEscritores,
    criarEscritores,
    atualizarEscritores,
    deleteEscritores 
}