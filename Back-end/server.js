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

    const searchCommand = `
       SELECT * FROM Users
       WHERE email = ? 
    `

    db.query(searchCommand, [user.email], (error, data) =>{
        if(error) {
            console.log(error)
            return
        }

        if(data.length !== 0){
            response.json({message: "Já existe um usuário cadastrado com esse e-mail. Tente outro e-mail", userExists: true})
            return
        }

        const insertCommand = `
            INSERT INTO User(name, email, password)
            VALUES(?, ?, ?)
        `

        db.query(insertCommand, [user.name, user.email, user.password], (error) =>{
            if(error) {
                console.log(error)
                return
            }

            response.json({ message: "Usuário cadastrado com sucesso!"})
        })
    })
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