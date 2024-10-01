//es5
/*const path=require('path')

let cwd=path.join(__dirname)
let cwf=path.join(__filename)

console.log(cwd)
console.log(cwf)*/


//es6

import path from 'path'
import cwd from 'process'

let cwdir =path.join(process.cwd())
let cwfile=path.join(process)

console.log(cwd)
console.log(cwdir)
console.log(cwfile)