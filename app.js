// Before using http module
// var http = require('http')
//
// http.createServer(function (req, res) {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   })
//   res.end('Hello World')
// }).listen(3000)

// After use connect module
var connect = require('connect')
var app = connect()

app.listen(4000)

console.log('Server running at http://localhost:4000/')
