var fs = require('fs');


fs.readFile('./data.json','utf-8',(err,data)=>{
    if (err) throw err

    let maleUsers=[]
    let femaleUsers=[]
    let users=JSON.parse(data)
    console.log(typeof(users))

    for(let user of users){     
        if (user.gender=="Male"){
            maleUsers.push(user)
        }
        if (user.gender=="Female"){
            femaleUsers.push(user)
        }
    }
fs.writeFile('male.json',JSON.stringify(maleUsers),(err)=>{
    if (err) throw err
        console.log("maleUsers created")

fs.writeFile('female.json',JSON.stringify(femaleUsers),(err)=>{
    if (err) throw err
        console.log("femaleUsers created")
})
})
})
// using filter