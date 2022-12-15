const express = require("express")
const router = express.Router()

const Controller = require("../controllers/makaziControllers")


router.post("/escritores", Controller.obterEscritores)


module.exports = {
    router
}

