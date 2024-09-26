  import bcrypt from 'bcrypt'

  let user={
    email:"Deep@gmail.com",
    cc:'12341234',
    password:"iamgoodgirl",
    mobile:"9986334527"
  }

let salt= bcrypt.genSaltSync(10)
let new_PW=bcrypt.hashSync(user.cc,salt)
console.log(new_PW)

let flag=bcrypt.compareSync(new_PW,"55555")

if(flag){
  console.log("login success")
}
else{
  console.log("login failed")
}