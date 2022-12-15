const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/authControllers");
const userControllers = require("../controllers/userControllers")

const { checkAuth } = require("../middlewares/auth");

//rotas de users
router.get("/all", checkAuth, userControllers.getAll);
router.post("/create", userControllers.createUser);
router.post("/login", authControllers.login);



 module.exports = router
 