import express from "express"
import fs from 'fs'

let router=express.Router()

router.post("/create",(req,resp)=>{
    let emp=req.body
});

router.get("/read", async (req,resp)=>{
    let employees = await getEmployees()
    return resp.json(employees)
});

/* router.get("/read",async(req,resp)=>{
    let employees=await getEmployees()
    return resp.json(employees)
}) */
router.put("/update/:id",(req,resp)=>{
    let eid=req.params.id
})
router.delete("/del/:id",(req,resp)=>{
    let eid=req.params.id;
})

let getEmployees=()=>{
    let emp_data=fs.readFileSync("data.json",'utf-8')
    return json.parse(emp_data)
}

export default router;