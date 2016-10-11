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
console.log('connect is a ' + typeof connect)
var app = connect()

app.use(function (req, res, next) {
  console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
  next()
})

// // use set timeout
// app.use(function (req, res, next) {
//   console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
//   next()
// })
//
// // use for loop 5000 times
// app.use(function (req, res, next) {
//   console.log('new req method is: ' + req.method, 'new req url is: ' + req.url)
//   next()
// })

// response once
var home = function (req, res) {
  res.end('homepage')
}

var helloWorld = function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
}

// response twice
var goodbyeWorld = function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.end('Bye World')
}

app.use('/hello', helloWorld)
app.use('/goodbye', goodbyeWorld)
app.use('/', home)

app.listen(4000)
console.log('Server running at http://localhost:4000/')
