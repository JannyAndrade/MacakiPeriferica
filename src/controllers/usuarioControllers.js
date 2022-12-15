const UsuarioSchema = require("../models/UsuarioSchima")
const bcrypt = require("bcrypt")

const criarUsuario = async(req,res)=>{
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword
    //converte senha em hash e grava novo valor sobre o anterior
    const emailExists = await UsuarioSchema.exists({email: req.body.email})
    //checa se email existe no cadastro
    if (emailExists){
        return res.status(409).send({
            message: 'Email já cadastrado'
        })
    }
    //erro caso já tenha email no cadastro
    try {
        const novoUser = new UsuarioSchema(req.body)
        const savedUsuario = await novoUser.save()
        //salva novo usuário
        res.status(201).send({
            message: 'Usuário criado com sucesso',
            savedUsuario
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({ message: error.message })
    }
}

module.exports = {
    criarUsuario
}