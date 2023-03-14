import express from "express"

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/teste', function (req, res) {
    res.send({
        msg: 'Hello World'
    })
})

app.listen(3000)