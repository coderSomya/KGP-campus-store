const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const crypto = require("crypto")
const nodemailer = require("nodemailer")

require('dotenv').config();

const app = express()
const port = 8000
const cors= require("cors")

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const jwt = require("jsonwebtoken")

mongoose.connect(process.env.MONGO_URI,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
    console.log("connected to monogdb")
}).catch((e)=>{
    console.log(e)
})

app.listen(port, ()=>{
    console.log("Server in running..")
})