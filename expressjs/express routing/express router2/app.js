import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import apiRouter from './apiRouter.js'
//create express app

let app=express()
//http logger middleware

app.use(morgan('tiny'))
//load config settings

dotenv.config({'path':"./dev.config"})
let port=process.env.PORT
let hostname =process.env.HOSTNAME

//URL: http://127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send("Root request")
})

app.use("/api",apiRouter);
app.use("/user", userRouter);

app.listen(port,hostname,(err)=>{
    if (err) throw err
    console.log(`Server is running ... http://${hostname}:${port}/`)
})