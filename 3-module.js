//MODUL


//?exported in name.js
//const hide="hide"
// const tom="tom"
// const jerry="jerry" 

//?Exported in utils.js
// const myname=(name)=>{
//     console.log(`my name is ${name}`)
// }

const name =require('./4-names')
const myname=require('./5-utils')

const alter=require('./6-alter')
// console.log(alter)//? Printing data from alter file 

myname('ava')
myname(name.tom) //? Name are imported as objects
myname(name.jerry)

require('./7-mind')//? Calling a function without exporting it 