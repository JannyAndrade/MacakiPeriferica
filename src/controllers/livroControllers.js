const LivrosSchema = require("../models/LivrosSchema")
const mongoose = require("mongoose")

const listarLivros = async(req , res) =>{
    
    
   try {
        const todosOsLivros = await LivrosSchema.find()
        if(todosOsLivros.length== 0){
            return res.status(404).send({
                message: "Nenhum livro cadastrado até o momento"
            })
        }

       return res.status(200).send(todosOsLivros)

    } catch (error) {
       return res.status(400).json(error)
    }

}
const cadastrarLivros = async (req, res) => {
    const {
      livroNome,
      livrodescricao,
      livroPreco,
      livroImagem
      
    } = req.body;
  
    try {
      const novolivro = new LivrosSchema(req.body);
      const salvarlivro = await novolivro.save();
  
      res.status(201).send({
        Bem_vindes: "Livro cadastrado com sucesso",
        Cadastro: salvarlivro,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  };
const atualizarLivros = async(req, res) =>{
    const {id} = req.params 
    const {livroNome,livroDescricao,livroPreco,livroImagem} = req.body
try {
    const livros = await LivrosSchema.find({id}).updateOne({
        livroNome,
        livroDescricao,
        livroPreco,
        livroImagem
    })
    const livroatualizado = await LivrosSchema.find({id})
    if(livroatualizado.length == 0 ){
        return res.status(404).send({
            message: "Livro não encontrado"
        })
    }
    res.status(200).send({
        message: " Livro atualizado com sucesso",
        livroatualizado
    })
} catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
const deleteLivros = async(req,res)=>{
    const {id} =req.params

    try {
        const livrosEncontrados = await LivrosSchema.deleteOne({id})
        if (livrosEncontrados.deletedCount === 1) {
            return res.status(200).send({ Prezades: `Livro deletado com sucesso!` });
          } else {
      
            return res.status(404).send({
              Prezades: " Livro não foi encontrado."
            });
          }
        } catch (error) {
          res.status(500).json({
            message: error.message,
          });
        }

}


module.exports = {
    listarLivros,
    cadastrarLivros,
    atualizarLivros,
    deleteLivros
}