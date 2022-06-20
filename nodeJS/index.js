const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://127.0.0.1:27017')

const clientFun = async function(c) {
  await client.connect()
  const db = client.db('mytest')
  return db.collection(c)
}

const main = async () => {
  var cc = await clientFun('cc')
  // var d = await cc.find()

  var d = await cc.insertOne({username:'monica', age:60})
  console.log(d)

}
main().finally(() => client.close())