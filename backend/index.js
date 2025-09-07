const express = require('express')

require('dotenv').config()
const app = express()

app.use(express.json())

app.get("/", (req, res) => {

    res.status(404).json({message: "hello world to my first backend application in over a year"})
})


app.listen(3000, () => {
    console.log("server is running at port 3000")
})
