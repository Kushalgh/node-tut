//HTTP Module
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url  === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1> Oops ! </h1>
    <p>We cant seem to find your page</p>`)
})

server.listen(4000) //5000 is the port number