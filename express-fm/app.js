const express = require('express')
const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const app = express()
// app.use(express.urlencoded())
app.use(express.json())
app.get('/', async (req, res) => {
  try {
    let back = await readFile('./db.json', 'utf8')
    const jsonObj = JSON.parse(back)
    res.send(jsonObj.users)
  } catch (err) {
    res.status(500).json({ err })
  }

})

app.post('/', async (req, res) => {
  // console.log(req.headers)
  // console.log(req.body)
  let body = req.body
  if (!body) {
    res.status(403).json({
      error: '缺少用户信息'
    })
  }
  let back = await readFile('./db.json', 'utf8')
  const jsonObj = JSON.parse(back)
  body.id = jsonObj.users[jsonObj.users.length - 1].id + 1

  jsonObj.users.push(body)
  try {
    let w = await writeFile('./db.json', JSON.stringify(jsonObj))
    if (!w) {
      res.status(200).send({
        msg:'添加成功'
      })
    }
  } catch (err) {
    res.status(500).json({
      error
    })
  }

  // res.send(jsonObj.users)
})

app.listen(3000, () => {
  console.log('Run http://127.0.0.1:3000')
})