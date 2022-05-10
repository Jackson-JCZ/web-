// 1. yarn add jquery
// 2. public/index.html - 10个li
// 3. 入口处引入jquery
import $ from 'jquery'
// 4. 编写隔行变色的代码
$("#myUL>li:odd").css('color', 'red')
$("#myUL>li:even").css('color', 'green')