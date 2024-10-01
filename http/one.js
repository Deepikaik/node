import http from 'http'

let server= http.createServer((request,response)=>{
    response.end("Hello,GM")
});

server.listen(8080,(err)=>{      //8080 port number
    if (err) throw err
    console.log("server is running")
})