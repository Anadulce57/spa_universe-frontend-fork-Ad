const express = require("express")
const cors = require("cors")
const mysql = require("mysql2")
const jwt = require("jsonwebtoken")

const app = express() //recebe o express

const {DB_HOST, DB_NAME, DB_USER, DB_PASSWORD} = process.env

app.use(cors()) //front-end acesse esse espaço
app.use(express.json()) //Converter informações em objeto javascript

app.get("/", (req, res) => {
    res.status(200).send("Hey, You are in my backend!!!");
  });

app.post("/register", (request, response) =>{
    const user = request.body.user

    console.log(user)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})

const db = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    datbase: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD
})