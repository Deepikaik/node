import express from 'express'

let app= express()


//http://127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send("hello,hi")
})

//http://127.0.0.1:8080/about
app.get("/about",(req,resp)=>{
    resp.send("about page");
})

app.listen(8080,'127.0.0.1',(err)=>{
    if (err) throw err

    console.log("Server is Running......")
})