//index为webpack默认的入口文件, 要压缩的模块必须在这里引入
//webpack运行时会根据入口文件找到相关的依赖文件

import { addFn } from './add/add'
console.log(addFn(5, 2));