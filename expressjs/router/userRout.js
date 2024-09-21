import express from 'express'
import userRouter from 

let router=express.router

//api url: http://127.0.0.1:8080/user/read
//method- GET
router.post('/del',(req,resp)=>{
    return resp.json({"msg":'new user'})
})

//api url: http://127.0.0.1:8080/user/add
//method- POST
router.post('/del',(req,resp)=>{
    return resp.json({"msg":'new user'})
})


//export default router
