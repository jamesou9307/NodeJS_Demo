//引入http模块
const http=require('http')

//创建一个http服务器实例
const server=http.createServer()

//为服务器实例绑定request事件,监听客户端请求
//request是请求对象，包含了与客户端相关的数据和属性
server.on('request', (request,response)=>{
    console.log('Someone visit our web server')
    //url：http请求的url
    //method:http请求的method(GET/POST等)
    const url=request.url
    const method=request.method

    const str=`你请求的地址是  ${url},请求的method类型为 ${method}`

    console.log(str)

    //调用setHeader方法,解决中文乱码
    response.setHeader('Content-Type','text/html; charset=utf-8')

    //调用response.end方法，向客户端相应内容
    response.end(str)
})

//启动服务器
server.listen(8081,function(){

    console.log('server running at http://127.0.0.1:8081')

})

