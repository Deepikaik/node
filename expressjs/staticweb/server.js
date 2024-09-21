import express from 'express'
import path from 'path'
let app = express()

//URL: localhost:8080/
app.get("/",(req,resp)=>{
    let indexfile = path.join(process.cwd(),"views","index.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})
//URL: localhost:8080/index
app.get("/index",(req,resp)=>{
    let indexfile = path.join(process.cwd(),"views","index.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})
//URL: localhost:8080/about
app.get("/about",(req,resp)=>{
    let indexfile = path.join(process.cwd(),"views","about.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})
//URL: localhost:8080/services
app.get("/services",(req,resp)=>{
    let indexfile = path.join(process.cwd(),"views","services.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})
//URL: localhost:8080/contact
app.get("/contact",(req,resp)=>{
    let indexfile = path.join(process.cwd(),"views","contact.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})
app.listen(8080,(err)=>{
    if(err) throw err 
    console.log("server is running...")
})


/*import express from 'express'
import path from 'path'

let app=express()

//url 1: http://127.0.0.1:8080/
app.get("/",(req,resp)=>{
    let indexfile=path.join(process.cwd(),"views","index.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})

app.get("/index",(req,resp)=>{
    let indexfile=path.join(process.cwd(),"views","index.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})

app.get("/about",(req,resp)=>{
    let indexfile=path.join(process.cwd(),"views","about.html")
    console.log(indexfile)
    resp.sendFile(indexfile)
})

app.listen(8080,(err)=>{
    if (err) throw er
    console.log('server is runninggg')
})*/