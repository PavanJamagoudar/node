const os= require('os')
// console.log(os);

//user information
console.log(os.userInfo())

//system uptime
console.log(`uptime ${os.uptime()} seconds`)

//name os system
console.log(`name of the system is ${os.type()}`)

//version or relese of system
console.log(`relese is ${os.release()}`)

//total memory of system
console.log(`total memory is ${os.totalmem()}`)

//free memory of the system
console.log(`free memory is ${os.freemem()}`)