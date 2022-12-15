require("dotenv").config()

const app = require("./src/app")

const PORT = process.env.PORT


app.get('/', function(req,res){
    res.send({
        message: 'GET teste'
    })
})

app.listen(PORT , ()=>{
    console.log(`Api rodando na porta ${PORT}`)
})