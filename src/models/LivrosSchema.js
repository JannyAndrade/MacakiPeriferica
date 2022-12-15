const mongoose = require("mongoose")

const livrosSchema = new mongoose.Schema({
    id : mongoose.Schima.types.ObjectId,
    LivroNome: {
        type: String,
        required:true
    },
    LivroDescricao:{
        type: String,

    },
    LivroPreco:{
        type: Number,
        required:true

    },
    LivroImaguem:{
        type: String,
    },
    LivroNome : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required : true
    }
})

module.exports = mongoose.model("Livros" , livrosSchema)