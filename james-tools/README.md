## 安装
``
npm install james-npm-demo-tools
``

## 导入
```js
const james_tools=require('./james-tools')
```

## 格式化时间
```js
//调用dataFormat函数对时间进行格式化
const dt=new Date()
const dtStr=james_tools.dateFormat(dt)
//结果
console.log(dtStr)
```

## 转义HTML中的特殊字符
```js
//调用htmlEscape函数对时间进行格式化
const htmlStr='<h1 title="abc">这是一个h1标签<span>&nbsp;</span></h1>'
const htmlEscapeStr01=james_tools.htmlEscape(htmlStr)
//结果
console.log(htmlEscapeStr01)
```

## 还原HTML中的特殊字符
```js
//待还原的HTML字符串
const htmlUnEscapeStr=james_tools.htmlUnEscape(htmlEscapeStr01)
//输出的结果
console.log(htmlUnEscapeStr)
```

## 开源协议
ISC