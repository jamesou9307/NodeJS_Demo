const james_tools=require('./james-tools')


const dt=new Date()
const dtStr=james_tools.dateFormat(dt)
console.log(dtStr)

const htmlStr='<h1 title="abc">这是一个h1标签<span>&nbsp;</span></h1>'

const htmlEscapeStr01=james_tools.htmlEscape(htmlStr)

console.log('转义......')
console.log(htmlEscapeStr01)

const htmlUnEscapeStr=james_tools.htmlUnEscape(htmlEscapeStr01)

console.log('反转义......')
console.log(htmlUnEscapeStr)