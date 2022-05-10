> 学习之前推荐阅读一下[深入浅出webpack](http://webpack.wuhaolin.cn/) 的入门章节, 了解即可, 熟悉案例后查表即可正常使用webpack
1. 按照目录结构写好add.js和index.js
2. `npm init`自动生成package.json
3. 安装webpack和webpack-cli：可以在package中添加devDependencies指定版本写入再用`npm i`安装，或直接使用npm 安装包，安装完成也会出现在package中
4. 在scripts中添加自定义命令`"build": "webpack"`
5. 在项目根目录终端输入`npm run build`即可生成打包文件夹dist<br />
PS: 只用了默认的webpack配置，自定义配置文件`webpack.config.js`后续会使用