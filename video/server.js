// 1.导入http模块
var http = require('http')
var fs = require('fs')
var url = require('url')

// 2.创建服务器
// 获取到服务器的实例对象
var server = http.createServer()
server.listen(8080, function () {
  console.log('http://127.0.0.1:8080')
})

server.on('request', function (req, res) {
  // 请求头传参
  if (req.method == "GET") {
    if (req.url == '/') {
      fs.readFile('./index.html', 'utf-8', function (err, data) {
        res.write(data)
        res.end()
      })
    }

    if (req.url == '/monica.png') {
      fs.readFile('./monica.png', function (err, data) {
        res.end(data)
      })
    }
  } else if (req.method == "POST") {
    // 请求体传
    var data = ''
    req.on('data', function(d){
      data += d
    })
    req.on('end', function(){
      console.log(require('querystring').parse(data))
    })
    res.end()
  }

})