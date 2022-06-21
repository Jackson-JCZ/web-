const net = require('net')
const types = require('./types')
let nickname = null

const client = net.createConnection({
    host: '127.0.0.1',
    port: 3000
})

client.on('connect', () => {
    console.log('客户端与服务器建立连接成功')
    process.stdout.write('请输入昵称: ')

    process.stdin.on('data', data => {
        data = data.toString().trim()
        if(!nickname) {
            return client.write(JSON.stringify({
                type: types.login,
                nickname: data
            }))
        }

        const matches = /^@(\w+)\s(.+)$/.exec(data)
        if(matches) { //若本次消息符合@xxx格式
            return client.write(JSON.stringify({
                type: types.p2p,
                nickname: matches[1],
                message: matches[2]
            }))
        }

        //群聊
        client.write(JSON.stringify({
            type: types.broadcast,
            message: data
        }))
    })
})

client.on('data', data => {
    data = JSON.parse(data.toString().trim())
    switch (data.type) {
        case types.login: 
            if(!data.success) {
                console.log(`登陆失败：${data.message}`)
                process.stdout.write('请输入昵称：')
            } else {
                console.log(`登录成功，当前在线用户：${data.sumUsers}`)
                nickname = data.nickname
            }
            break
        case types.broadcast:
            console.log(`${data.nickname}：${data.message}`)
            break
        case types.p2p:
            if(!data.success) {
                return console.log(`发送失败：${data.message}`)
            }
            console.log(`${data.nickname} 对你说：${data.message}`)
            break
        case types.log:
            console.log(data.message)
            break
        default:
            console.log('未知的消息类型')
            break
    }
})