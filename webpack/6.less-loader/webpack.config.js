// 人物属性
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // webpack入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin({ // plugins插件配置
    template: './public/index.html' // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
  })],
  module: { // 加载器配置
    rules: [ // 规则
      { // 一个具体的规则对象
        test: /\.css$/i, // 匹配.css结尾的文件
        use: ["style-loader", "css-loader"], // 让webpack使用者2个loader处理css文件
        // 从右到左的, 所以不能颠倒顺序
        // css-loader: webpack解析css文件-把css代码一起打包进js中
        // style-loader: css代码插入到DOM上 (style标签)
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ],
  },
};