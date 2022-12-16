const UserSchema = require('../models/UserSchema'); // importei o model
const bcrypt = require('bcrypt'); // importei o bcrypt para criptografar a senha
const jwt = require('jsonwebtoken'); // importei o jwt para gerar o token

const SECRET = process.env.SECRET; // importei a secret para ser usada pelo JWT na geracao do token

const login = (req, res) => {
    try {
        
        UserSchema.findOne({ email: req.body.email }, (error, user) => {
            console.log("USUARIO EH ESSE AKI", user)
            if(!user) {
                return res.status(404).send({
                    message: 'Usuário não encontrado',
                    email: `${req.body.email}`
                });
            }

         // quando eu chego aqui eu tenho um usuario que foi enviado no body da requisicao e um usuario no banco com o MESMO email
            // eu preciso saber se as senhas deles tambem sao iguais
            
            const validPassword = bcrypt.compareSync(req.body.password, user.password)
            console.log("A SENHA EH VALIDA AMOR?", validPassword)
            
            if(!validPassword){
                return res.status(401).send({
                message: "Senha invalida",
                statusCode: 401
                })
            }

        // jwt.sign(nome do usuário, SEGREDO)
            const token = jwt.sign({name: user.name}, SECRET);
            console.log("Seu TOKEN é esse", token)
            
            res.status(200).send({
                message: " Vc está logadinha",
                token
            })
        })
    } catch(err) {
        console.error(err)
    }
};

module.exports = {
    login
};
