import jwt from 'jsonwebtoken'
let user_payload={
    "uname":"Rahul gandhi",
    "password":"123450"
}
let token=jwt.sign(user_payload,"good morning")
    //             user payload   //secret key
console.log(token)

let user_data=jwt.verify(token,'good morning')
console.log(user_data)