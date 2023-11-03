const path=require('path')

//to get the seperator
console.log(path.sep)

//to join the paths 
const pathjoin=path.join('mainfile','subfile','word.txt')
console.log(pathjoin)

//to get the base name
const base=path.basename(pathjoin)
console.log(base)

//to get the absolute path
const absolute=path.resolve(__dirname,'mainfile','subfile','word.text')
console.log(absolute)