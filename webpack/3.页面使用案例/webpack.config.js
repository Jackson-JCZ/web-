// 人物属性
const path = require('path');

module.exports = {
  entry: './src/main.js', // webpack入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};