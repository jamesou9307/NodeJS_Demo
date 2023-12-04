const fs=require('fs')
const path=require('path')

// 定义正则表达式，分别匹配<style></style>和<script></script>标签
// [\s\S]* 表示匹配大小写字符，*表示无限多次
const styleRegPattern=/<style>[\s\S]*<\/style>/

const scriptRegPattern=/<script>[\s\S]*<\/script>/

// 读取需要被处理的HTML文件
fs.readFile(path.join(__dirname,'./index.html'),'utf8',function(error,dataStr){

    if(error){

        return console.log('读取html文件失败!'+error.message)

    }

    //如果读取文件成功，调用对应的三个方法
    resolveCSS(dataStr)
    resolveScript(dataStr)
    resolveHTML(dataStr)


})

//处理css样式
function resolveCSS(htmlStr){

    // 使用正则提取页面中的<style></style>标签
    // 如果有匹配到内容，则输出一个数组[]，否则输出null
    const r1=styleRegPattern.exec(htmlStr)

    // 将提取出来的样式字符串，做进一步处理
    // 提取出来后还会有<style>标签，需要再替换掉<style>和</style>标签
    const newCSS=r1[0].replace('<style>','').replace('</style>','')

    fs.writeFile(path.join(__dirname,'./index.css'),newCSS,function(error){


        if(error){
            return console.log('新css文件写入失败!'+error.message)
        }

        console.log('新css文件写入成功!')
    })





}

//提取script标签里面的脚本
function resolveScript(htmlStr){

    // 使用正则提取页面中的<style></style>标签
    // 如果有匹配到内容，则输出一个数组[]，否则输出null
    const r1=scriptRegPattern.exec(htmlStr)

    // 将提取出来的样式字符串，做进一步处理
    // 提取出来后还会有<script>标签，需要再替换掉<script>和</script>标签
    const newScript=r1[0].replace('<script>','').replace('</script>','')

    fs.writeFile(path.join(__dirname,'./index.js'),newScript,function(error){


        if(error){
            return console.log('新script文件写入失败!'+error.message)
        }

        console.log('新script文件写入成功!')
    })





}

function resolveHTML(htmlStr){

    // 将传入字符串的script标签和style标签进行替换

   const newHTML=htmlStr.replace(styleRegPattern,'<link rel="stylesheet" href="./index.css" />').replace(scriptRegPattern,'<script src="./index.js"></script>')

    // 写入index_new.html
    fs.writeFile(path.join(__dirname,'./index_new.html'),newHTML,function(error){


        if(error){
            return console.log('新html文件写入失败!'+error.message)
        }

        console.log('新html文件写入成功!')
    })



}