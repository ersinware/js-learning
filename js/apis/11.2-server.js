const express = require('express')

const app = express()

// options'u middleware'den önce tanımlaman gerekiyor
app.options('*', (req, res) => {
  console.log('OPTIONS- *')

  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8080',
    'Access-Control-Request-Method': 'GET',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': 60 * 60 * 24,
    'Access-Control-Expose-Headers': ''
  }).end()
})

app.use('/', (req, res, next) => {
  console.log('MIDDLEWARE')

  // you need to set this header in every response
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
  next()
})

app.get('/simpleGet', (req, res) => {
  console.log('GET- /simpleGet')

  res.json({
    data: 'response from server'
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000')
})