const {createReadStream}=require('fs')

const stream=createReadStream('./mainfile/result.txt',{highWaterMark:90000,encoding:'utf8'})

//Default 64kb
//heigWaterMark = to control the size
//last buffer = reminder
//const stream=createReadStream('./mainfile/result.txt',{highWaterMark:90000})
//const stream=createReadStream('./mainfile/result.txt',{encoding:'utf8'})

stream.on('data',(res)=>{
console.log(res)
})

stream.on('error',(err)=>{
    console.log(err)
})