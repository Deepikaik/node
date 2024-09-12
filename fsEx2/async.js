import fs from 'fs'

fs.readFile("abc.txt",'utf-8',(err,data)=>{
//          file name, encoding, callback
    if (err) throw err

    console.log(data)
    
    fs.writeFile("xyz2.txt",data,(err)=>{
        if(err) throw err 
        console.log("new file created2")})

})
   
