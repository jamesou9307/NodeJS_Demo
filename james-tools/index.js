/*这是包的入口文件，在外部引入模块时，导入的即为该文件*/



/*将原有的dateformat函数和htmlEscape函数分拆，
然后再从index.js中导入
*/
const date=require('./src/dateFormat')
const escape=require('./src/htmlEscape')
const property=require('./src/property')

/*向外暴露要暴露的成员
* ...运算符:展开运算符，ES6中新增
* */
module.exports={

    ...date,
    ...escape,
    ...property

}

