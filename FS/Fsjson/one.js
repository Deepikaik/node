import fs from 'fs'

fs.readFile('./data.json','utf-8',(err,data)=>{  //to read file in server
    if (err) throw err

fs.writeFile('employee.json',data,(err)=>{       //to write file into a new file
    if (err) throw err
    console.log("new file created")
        console.log(data)
})
})
        