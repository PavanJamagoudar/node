const fs=require('fs')

//to read the file
const first=fs.readFileSync('./mainfile/first.txt','utf-8')
console.log(first)

const second=fs.readFileSync('./mainfile/second.txt','utf8')
console.log(second)

// const thired=fs.readFileSync('./mainfile/thired.txt','utf8')
// console.log(thired)   //?it will not creat a file

//to write into a file
const result=fs.writeFileSync('./mainfile/result.txt','new file created')

//to append a data into a file we use flag property 

fs.writeFileSync('./mainfile/result.txt',`\n${first} \n${second}`,{flag:'a'})  //flag to append the data


