import fs from 'fs'

fs.readFile("data.txt",'utf-8',(err,data)=>{
//         "file name",'encoding format' 
   if(err) throw err 
   console.log(data)
})


//if using async we should use a callback