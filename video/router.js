var fs = require('fs')
var url = require('url')
var controller = require('./controller')
module.exports = (req, res) => {
  // 请求头传参
  if (req.method == "GET") {
    if (req.url == '/') {
      controller.index(req, res)
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
      controller.user(require('querystring').parse(data), res)
    })
    res.end()
  }
}