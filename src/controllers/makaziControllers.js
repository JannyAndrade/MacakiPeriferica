const escritores = require("../models/EscritoresSchima")


const obterEscritores = async(req , res)=>{
    try {
        const todosEscritores = await escritores.filter()

        return res.status(200).send(todosEscritores)

    } catch (error) {
        
        return res.status(400).json(error)

    }
}


module.exports = {
    obterEscritores
}