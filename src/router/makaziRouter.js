const express = require("express")
const router = express.Router()

const controller = require("../controllers/escritoresControllers")
const controllerLivros = require("../controllers/livroControllers")
const { checkAuth } = require("../middlewares/alth");

router.get("/listar", controller.listarEscritores)
router.post("/escritores",controller.criarEscritores)
router.patch("/atualizar/:id", checkAuth,controller.atualizarEscritores)
router.delete("/delete/:id", controller.deleteEscritores)




router.get("/buscar", controllerLivros.listarLivros)
router.post("/cadastrar/livros", controllerLivros.cadastrarLivros)
router.patch("/atualizar/livros/:id", controllerLivros.atualizarLivros)
router.delete("/deletar/livros/:id", controllerLivros.deleteLivros)







module.exports = router

