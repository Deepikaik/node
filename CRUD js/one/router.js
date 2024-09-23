import express from "express"
import fs from 'fs'

let router=express.Router()

router.get("/read", async (req,resp)=>{
    let employees = await getEmployees()
    return resp.json(employees)
})

router.post("/create",async(req,resp)=>{
    let employee=req.body
    let employees=await getEmployees()
    let emp_data= employees.find((emp)=>{
        return emp.eid== employee.eid;
    })
    console.log(emp_data)
    if(emp_data){
        return resp.status(401).json({"msg":"employee already exists"})
    }
    employees.push(employee)
    saveemployees(employees)
    return resp.status(200).json({"msg":"new employee created"})
    
})



/* router.get("/read",async(req,resp)=>{
    let employees=await getEmployees()
    return resp.json(employees)
}) */
router.put("/update/:eid",async(req,resp)=>{
    let emp_id=req.params.id
    let employee=req.body;
    let employees=await getEmployees();

    let emp= employees.find((emp)=>{
        return emp.eid==emp_id
    })

if(!emp){
    return resp.status(401).json({"msg":"employee not exists"})  //return makes it come out of the block
}

let remaining_employees=employees.filter((emp)=>{
    emp.eid!=emp_id
})
remaining_employees.unshift(employee)
saveemployees(remaining_employees)
return resp.status(208).json({"msg":"employee obj updated"})
})





router.delete("/del/:id",async(req,resp)=>{
    let eid=req.params.id;
    let employees= await getEmployees();
    let emp_data=employees.find(()=>{
        return emp.eid==emp_id
    })
    if(!emp_data){
        return resp.status(401).json({"msg":"employee doesnt exist"})
    }
    let remaining_employees=employees.filter(()=>{
        return emp.eid!=emp_id
    })
    saveemployees(remaining_employees)
    return resp.status(208).json({"msg":"deleted successfully"})
})

let getEmployees=()=>{
    let emp_data=fs.readFileSync("data.json",'utf-8')
    return JSON.parse(emp_data)
}

let saveemployees = (employees)=>{
    fs.writeFileSync('data.json',JSON.stringify(employees))
}

export default router;