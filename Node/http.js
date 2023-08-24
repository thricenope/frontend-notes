var http = require('http')

server = http.createServer(function (req,res){
    res.writeHead(200,{
        'Content-type':'text/plain'
    })
    res.write('hello world')
    res.end()
})
server.listen(82)
console.log('server started')

// node http.js
// 127.0.0.1:80
