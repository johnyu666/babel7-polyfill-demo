
//目前基于core-js2和@babel/polyfill 已经被遗弃
// import '@babel/polyfill'

/*===使用core-js3的要求与babel-config.js中的'core-js:3'对应====*/
import  'core-js'
import 'regenerator-runtime/runtime'
/*==========================================================*/

//测试Promise(新的API,需要polyfill)
new Promise(function () {})
const study = () => {} //测试箭头函数的转译(语法糖)
let m=2**2 //测试指数运算(语法糖)
//测试类定义(语法糖)
class Person{
    name="john123" //测试类变量(建议标准)
}