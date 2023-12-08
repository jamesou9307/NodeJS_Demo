function dateFormat(dateStr){

    const dateVal=new Date(dateStr)

    const year=padZero(dateVal.getFullYear())
    const month=padZero(dateVal.getMonth()+1)
    const date=padZero(dateVal.getDate())

    const hour=padZero(dateVal.getHours())
    const minute=padZero(dateVal.getMinutes())
    const second=padZero(dateVal.getSeconds())

    return `${year}-${month}-${date} ${hour}:${minute}:${second}`


}

/*补零函数*/
function padZero(num){

    return num>9?num:'0'+num

}


module.exports = {

    dateFormat

}