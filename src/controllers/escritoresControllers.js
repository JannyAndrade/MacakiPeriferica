const EscritoresSchema = require("../models/EscritoresSchema")



const listarEscritores = async(req , res)=>{

    try {
        const todosOsEscritores = await EscritoresSchema.find()
        if(todosOsEscritores.length== 0){
            return res.status(404).send({
                message: "Nenhum escritor cadastrado até o momento"
            })
        }

       return res.status(200).send(todosOsEscritores)

    } catch (error) {
       return res.status(400).json(error)
    }
}

const criarEscritores = async(req , res)=>{

    const {
        nomeEscritores,
        nomeLivros,
        email,
        
      } = req.body;
    
      try {
        const novoEscritor = new EscritoresSchema(req.body);
        const salvarescritor = await novoEscritor.save();
    
        res.status(201).send({
          Bem_vindes: "Escritor cadastrado com sucesso",
          Cadastro: salvarescritor,
        });
      } catch (err) {
        res.status(500).send({
          message: err.message,
        });
      }
}
const atualizarEscritores = async(req , res) => {

        const {id} = req.params 
        const {nomeEscritores,nomeLivro,email} = req.body
    try {
        const livros = await EscritoresSchema.find({id}).updateOne({
            nomeEscritores,
            nomeLivro,
            email,
        })
        const escritoresatualizado = await EscritoresSchema.find({id})
        if(escritoresatualizado.length == 0 ){
            return res.status(404).send({
                message: "Escritor não encontrado"
            })
        }
        res.status(200).send({
            message: " Escritor atualizado com sucesso",
            escritoresatualizado
        })
    } catch (error) {
        res.status(500).json({
          message: error.message,
        });
      }
    
}
const deleteEscritores = async(req , res) =>{
    const {id} =req.params

    try {
        const escritoresEncontrados = await EscritoresSchema.deleteOne({id})
        if (escritoresEncontrados.deletedCount === 1) {
            return res.status(200).send({ Prezades: `Escritores deletado com sucesso!` });
          } else {
      
            return res.status(404).send({
              Prezades: " Escritores não foi encontrado."
            });
          }
        } catch (error) {
          res.status(500).json({
            message: error.message,
          });
        }

}


module.exports = {
    listarEscritores,
    criarEscritores,
    atualizarEscritores,
    deleteEscritores 
}