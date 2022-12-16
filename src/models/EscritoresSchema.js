const mongoose = require("mongoose")

const EscritoresSchema = new mongoose.Schema({
    id : {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
    },
    nomeEscritores : {
        type: String,
        required: true
    },
    nomeLivro:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model("EscritoresSchema", EscritoresSchema)