// 1. yarn add jquery
// 2. public/index.html - 10个li
// 3. 入口处引入jquery
import $ from 'jquery'
// 4. 编写隔行变色的代码
$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')

// 5. 引入css文件
import "./css/index.css"

// 6. 引入less文件
import "./less/index.less"

// 7. 手动引入一个图片文件
// webpack眼里万物皆模块
import imgObj from './assets/1.gif'
let theImg = document.createElement("img")
theImg.src = imgObj
document.body.appendChild(theImg)

// 8. 引入字体图标样式文件
import "./assets/fonts/iconfont.css"
let theI = document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)