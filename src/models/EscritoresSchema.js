const mongoose = require("mongoose")

const EscritoresSchema = new mongoose.Schema({
    id : {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
    },
    NomeEscritores : {
        type: String,
        required: true
    },
    NomeLivro:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model("EscritoresSchema", EscritoresSchema)