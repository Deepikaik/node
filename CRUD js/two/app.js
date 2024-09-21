import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

import apiRouter from './apiRouter.js'

let app=express()

app.use(morgan('tiny'))

dotenv.config({'path':"./dev.config"})
let port=process.env.PORT
let hostname=process.env.HOSTNAME       

app.use("/api",apiRouter)

app.listen(port,hostname,(err)=>{
    if (err) throw err
    console.log(`server is running http://${hostname}:${port}/`)
})