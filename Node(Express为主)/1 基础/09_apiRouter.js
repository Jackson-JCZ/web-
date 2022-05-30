const express = require('express')
const router = express.Router()

//挂载对应的路由
router.get('/get', (req, res) => {
    const query = req.query
    res.send({
        status: 0,
        msg: 'GET 请求成功！',
        data: query,
    })
})

router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST 请求成功!',
        data: body,
    })
})

router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE请求成功',
    })
})
module.exports = router