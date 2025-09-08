const express = require('express')
require('dotenv').config()
const app = express()

const SERVER_PORT = process.env.SERVER_PORT 

app.use(express.json())

app.get("/", (req, res) => {

    res.status(404).json({message: "hello world to my first backend application in over a year"})
})


app.listen(SERVER_PORT, () => {
    console.log(`Server running at port ${SERVER_PORT}`)
})
