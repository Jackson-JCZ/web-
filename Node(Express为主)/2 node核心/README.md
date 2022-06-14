# nodejs的核心API
## Buffer
在引入`TypeArray`之前, JavaScript没有用于读取或操作二进制数据流的机制。`Buffer`是作为Node.js的API引入，用在TCP流，文件系统操作，以及其他上下文中与八位字节流进行交互。

`Buffer`类的实例类似于从`0-255`之间的整数数组(其他整数会通过`& 255`操作强制转换到此范围). Buffer的大小在创建时无法确定，且无法更改.

`Buffer`在全局作用域生效，无需使用`require('buffer').Buffer`引入
```js
//创建一个长度为10，且用零填充的Buffer
const buf1 = Buffer.alloc(10)

//创建一个长度为10，且用 0x1 填充的Buffer
const buf2 = Buffer.alloc(10, 1)

//创建一个长度为10，未初始化的Buffer，但返回的实例可能包含旧数据
// 需要使用fill()或write()重写
const buf3 = Buffer.allocUnsafe(10)

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
```

## dgram
`dgram`模块提供了UDP数据包socket的实现
```js
const dgram = require('dgram')
const server = dgram.createSocket('udp4')

server.on('error', (err) => {
    console.log(`服务器异常: \n${err.stack}`)
    server.close()
}

server.on('message', (msg, rinfo) => {
    console.log(`服务器监听 ${address.address}:${address.port}`)
})
// 监听0:0:0:0:41234
server.bind(41234)
```