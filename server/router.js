const express = require('express')

const router = express.Router()

router.post('/api/add',(req,res)=>{
  res.send({
    status:0,
    msg:'新增成功'
  })
})

module.exports = router