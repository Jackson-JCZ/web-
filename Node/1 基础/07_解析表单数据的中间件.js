const express = require('express')
const app = express()
const qs = require('querystring')

//解析表单数据的中间件
app.use((req, res, next) => {
    //1. 定义str专门存储客户端发送过来的请求体数据
    let str = ''
    //2.监听data事件
    req.on('data', (chunk)=>{
        str += chunk
    })
    //3.监听req的end事件
    req.on('end', ()=>{
        const body = qs.parse(str)
        req.body = body
        next()
    })
})

app.post('/user', (req, res) => {
    res.send(req, body)
})
//4.调用app.listen方法，指定端口号并启动web服务器
app.listen(80, function() {
    console.log('Express server running at http://127.0.0.1')
})