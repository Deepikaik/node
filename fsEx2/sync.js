import fs from 'fs'

let content=fs.readFileSync("abc.txt",'utf-8')
fs.writeFileSync("xyz.txt",content);
console.log("new file created")