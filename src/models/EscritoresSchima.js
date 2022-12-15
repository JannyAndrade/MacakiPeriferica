const mongoose = require("mongoose")

const EscritoresSchema = new mongoose.Schema({
    id : mongoose.Schima.types.ObjectId,
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