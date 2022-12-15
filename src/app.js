require("dotenv").config()
const express = require("express")


const app = express()
const cors = require("cors")
const db = require("./config/database")
const makaziRouter = require("./router/makaziRouter")

app.use(express.json())
app.use(cors())
app.use("/escritores",makaziRouter)

db.connect()


module.exports = app
