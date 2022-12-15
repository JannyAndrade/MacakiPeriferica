const router = require("express").Router()

const controller = require("../controllers/escritoresControllers")
const { checkAuth } = require("../middlewares/auth");

router.get("/listar", controller.listarEscritores)
router.post("/escritores",controller.criarEscritores)
router.patch("/atualizar/:id", checkAuth,controller.atualizarEscritores)
router.delete("/delete/:id", controller.deleteEscritores)








module.exports = router

