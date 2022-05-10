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