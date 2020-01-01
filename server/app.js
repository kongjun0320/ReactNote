const express = require('express')

const app = express()
const router = require('./router')

app.use('/',router)

app.listen(3001,()=>{
  console.log('running...')
})