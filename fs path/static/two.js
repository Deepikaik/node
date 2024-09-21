import fs from 'fs'

fs.readFile(path.join(process.cwd(),"static","data","data.json"),'utf-8',(err,data)=>{
    if (err) throw err

    let users=JSON.parse(data)
    
    let maleUsers= users.filter((user)=>{
    return user.gender==="Male"

    let femaleUsers= users.filter((user)=>{
        return user.gender==="Female"
    })
fs.writeFile(path.join(process.cwd(),"static","male","male.json"),JSON.stringify(maleUsers),(err,data)=>{
    if (err) throw err

    console.log("new file created")

fs.writeFile(path.join(process.cwd(),"static","female","female.json"),JSON.stringify(femaleUsers),(err,data)=>{
    if (err) throw err
})
})
    })})