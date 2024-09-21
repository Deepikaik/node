import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

let app= express()

app.use(morgan('tiny'))

app.get("/",(req,resp)=>{
    resp.send("root request")
})

app.user("/user")

app.listen(8080,'localhost',(err)=>{
    if (err) throw err
    console.log("server is running")
})