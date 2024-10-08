import fs from 'fs'
import path from 'path'

let datafile = path.join(process.cwd(),"data","data.json")
console.log(datafile)

let filepath=path.join(process.cwd(),"male","male.json");
console.log(filepath)

let filepath2=path.join(process.cwd(),"female","female.json")
console.log(filepath2)

fs.readFile(datafile,'utf-8',(err,data)=>{
    if (err) throw err

    let users=JSON.parse(data)
    let male_users=users.filter((user)=>{
        return user.gender ==="Male"
    })
    let female_users=users.filter((user)=>{
        return user.gender ==="Female"
    })
    fs.writeFile(filepath,JSON.stringify(male_users),(err)=>{
        if(err) throw err 

        console.log("New File Created")
    })
    fs.writeFile(path.join(process.cwd(),"female","female.json"),JSON.stringify(female_users),(err)=>{
        if (err) throw err
        console.log("File Created!")
    })
})