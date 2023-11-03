const fs=require('fs')

//to read a file
const first=fs.readFile('./mainfile/first.txt','utf-8',(err1,result1)=>{
err1?console.log(err1):console.log(result1)
})

const second=fs.readFile('./mainfile/second.txt','utf8',(err2,result2)=>{
err2?console.log(err2):console.log(result2)
})

//to write a file
const result=fs.writeFile('./mainfile/result-async.txt','Adding new text to this file',(err3,result3)=>{
    err3?console.log(err3):console.log(result3)
})

//*to append the data use {flag:'a'}