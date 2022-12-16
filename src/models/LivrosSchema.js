const mongoose = require("mongoose")

const livrosSchema = new mongoose.Schema({
    id : {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
        },
    livroNome: {
        type: String,
        required:true
    },
    livroDescricao:{
        type: String,
        required:true

    },
    livroPreco:{
        type: Number,
        required:true

    },
    livroImagem:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model("livrosSchema" , livrosSchema)