import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

let app =express();
//load config values 

app.use(morgan('tiny'))


dotenv.config({'path':"./dev.config"})
let port=process.env.PORT
let hostname =process.env.HOSTNAME

console.log(port)
console.log(hostname)

//api url : http://127.0.0.1/
app.get("/",(req,resp)=>{
    resp.send("root req...")
})

app.get("/about",(req,resp)=>{
    resp.send('about req...')
})


app.listen(port ,hostname ,(err)=>{
    if (err) throw err
    console.log('server is running>>   http://127.0.0.1:8080/')
})  