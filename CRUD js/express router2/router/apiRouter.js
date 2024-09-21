import express from 'express'

let router= express.Router();

/* usage:create request like create new user/product
API URL: http://127.0.0.1:8080/api/add
method type:POST
req fields:-- 
*/
router.post('/add',(req,resp)=>{
    return resp.json({"msg":"post request"})
})



/* usage:Read  request like get  users/ get products
API URL: http://127.0.0.1:8080/api/read
method type:GET
req fields:-- 
*/
router.get('/read',(req,resp)=>{
    console.log("Test Case 123")
    return resp.json({"msg":"GET request"})
})


/* usage:Update  request like update  users/ update products
API URL: http://127.0.0.1:8080/api/justupdate
method type:PUT
req fields:-- 
*/
router.put("/justupdate",(req,resp)=>{
    return resp.json({"msg":"PUT Req...updated successfully"})
})


router.delete("/lunch", (req,resp)=>{
    return resp.json({"message":"Product Deleted"})
})
export default router