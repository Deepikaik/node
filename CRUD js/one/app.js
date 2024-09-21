import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

import router from './router.js'

let app=express()

app.use(morgan('tiny'))

dotenv.config({'path':"./test.config"})
let port=process.env.PORT
let hostname=process.env.HOSTNAME

app.get("/",(req,resp)=>{
    resp.send("root request")
})

app.use("/api",router)

app.listen(port,hostname,(err)=>{
    if (err) throw err
    console.log(`server is running....http://${hostname}:${port}/`)
})
