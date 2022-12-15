const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    usuarioNome: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model("Usuario", Schema)
