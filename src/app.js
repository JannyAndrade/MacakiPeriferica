require("dotenv").config()
const express = require("express")


const app = express()
const cors = require("cors")
const db = require("./config/database")
const makaziRouter = require("./router/makaziRouter")
const authRouter = require("./router/authRouter")

app.use(express.json())
app.use(cors())
app.use(makaziRouter)
app.use(authRouter)
db.connect()


module.exports = app
