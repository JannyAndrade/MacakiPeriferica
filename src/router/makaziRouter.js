const router = require("express").Router()

const controller = require("../controllers/makaziControllers")
const { checkAuth } = require("../middlewares/auth");

router.post("/escritores",checkAuth, controller.obterEscritores)


module.exports = router

