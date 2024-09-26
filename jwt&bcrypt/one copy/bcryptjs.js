  import bcrypt from 'bcrypt'

  let user={
    email:"Deep@gmail.com",
    cc:'12341234',
    password:"iamgoodgirl"
  }

let salt= bcrypt.genSaltSync(10)
let new_CC=bcrypt.hashSync(user.cc,salt)
console.log(new_CC)