import express from 'express'

const app= express()

app.get("/",(req,resp)=>{
    let indexfile=join(path(process.cwd(),"views","index.html"))
    resp.sendFile(indexfile)
})

app.get("/index",(req,resp)=>{
    let indexfile=join(path(process.cwd(),"views","index.html"))
    resp.sendFile(indexfile)
})

app.listen(8080,(err)=>{
    if (err) throw err
    console.log("server is loading")
})
