import fs from 'fs'

fs.readFile('./data.json','utf-8',(err,data)=>{
    if (err) throw err

    let maleUsers=[]
    let femaleUsers=[]
    let users=JSON.parse(data) //to convert string to object
    console.log(typeof(users))

    for(let user of users){     //'let' is there because it is ES6 format
        if (user.gender=="Male"){
            maleUsers.push(user)
        }
        if (user.gender=="Female"){
            femaleUsers.push(user)
        }
    }
    console.log("female users:",femaleUsers.length)
    console.log("male users:",maleUsers.length)

    
fs.writeFile('male.json',JSON.stringify(maleUsers),(err)=>{
    if (err) throw err
        console.log("maleUsers created")

fs.writeFile('female.json',JSON.stringify(femaleUsers),(err)=>{
    if (err) throw err
        console.log("femaleUsers created")
})
})
})