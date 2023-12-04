const http=require('http')

const fs=require('fs')

const path=require('path')



const server=http.createServer();

server.on('request',(request,response)=>{

    const url=request.url
    let content='404 Not Found!'

    if(url==='/'||url==='/index.html'){

        content='<h1>首页</h1>'
    }else if(url==='/about.html'){

        content='<h1>关于页面</h1>'
    }


    if(!url.includes('favicon.ico')){

        if(url.includes('clock')){

            const fpath=path.join(__dirname,url)

            fs.readFile(fpath,'utf-8',function (error,dataStr){

                if(error){

                    console.log('文件读取失败!'+error.message)
                    return response.end('404 File Not Found!')

                }



                return response.end(dataStr)
            })

        }else{

            response.setHeader('Content-Type','text/html;charset=utf-8')
            response.end(content)

        }


    }




})


server.listen('8081',function (){


    console.log('Server Running at http:127.0.0.1:8081')

})
