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

const User = require("./models/user")
const Order = require("./models/order")


//function to send verification email
const sendVerificationEmail = async (to, token)=>{
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:"isomya13@gmail.com",
        pass: "todo"
        //to do
    }
  })

  const mailOptions = {
    from: "kgp.store.com",
    to: email,
    subject: "KGP store verification",
    text: `Click on the link below to verify your email address : http://localhost:8000/verify/${verificationToken}`
  };

  try {
    await transporter.sendMail(mailOptions)
  } catch (error) {
    console.log("error sending verificaiton email", error)
  }
}

//endpoint to register
app.post("/register", async(req,res)=>{
    try {
        const {name, email, password} = req.body;
        //check if email exists
        const existingUser = await User.findOne({email});
        if(existingUser){
        return res.status(400).json({message: "User already exists"})
        }
         
        //create new user
        const newUser = await User({name, email, password});

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //save the user to database
        await newUser.save();

        //send verification email
        sendVerificationEmail(newUser.email, newUser.verificationToken)
        
    } catch (error) {
        console.log("error registering user", error),
        res.status(500).json({message: "Registration Failed"})
    }
})

//endpoint to verify the token

app.get("/verify/:token", async(req, res)=>{
    try {
        const token = req.params.token;

        const user = await User.findOne({verificationToken: token})

        if(user){
           user.verified = true;
           user.verificationToken = undefined;

           await user.save();

           res.status(200).json({
            message:"Email verified successfully"
           })
        }
        else{
           return res.status(404).json({
            message: "Invalid verification token"
           })
        }
    } catch (error) {
        res.status(500).json({
            message: "Could not verify token"
        })
    }
}) 