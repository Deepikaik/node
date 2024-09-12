//to import fs from fs module 
import fs from 'fs'
let content=fs.readFileSync("data.txt",'utf-8')
console.log(content)