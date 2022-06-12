var fs = require('fs')
module.exports = {
  index(req, res) {
    fs.readFile('./index.html', 'utf-8', function (err, data) {
      res.write(data)
      res.end()
    })
  },

  user(postData, res) {
    console.log(postData)
  }
}