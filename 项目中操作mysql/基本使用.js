//1.安装: npm i mysql
//2.导入模块
const mysql = require('mysql')
const { resourceLimits } = require('worker_threads')
//3.建立与mysql的连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'    //指定要操作哪个数据库
}) 

//4.检测mysql模块是否正常工作
db.query('SELECT 1', (err, results) => {
    if(err) return console.log(err.message)
    console.log(results)    //输出正常就说明连接成功
})

//5.查询数据
db.query('SELECT * FROM users', (err, results) => {
    //查询失败
    if(err) return console.log(err.message)
    console.log(results)
})
//6.插入数据
const user = {usename: 'Spider-Man', password: 'pcc321'}
const sqlStr = 'INSERT INTO users (username, password) VALUES (?,?)' //使用？做占位符
db.query(sqlStr, [user.usename, user.password], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1){
        console.log('插入数据成功')
    }
})

//7.更新数据
const user = {id: 7, username: 'aaa', password: '000'}
const sqlStr = 'UPDATE users SET username=?, password=? WHERE id=?'
db.query(sqlStr, [user.usename, user.password, user.id], (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {
        console.log()
    }
})

//8.删除数据
const sqlStr = 'DELETE FROM users WHERE id=?'
db.query(sqlStr, 7, (err, results) => {
    if(err) return console.log(err.message)
    if(results.affectedRows === 1) {
        console.log('删除数据成功！')
    }
})