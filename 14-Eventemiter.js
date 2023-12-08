const EventEmiter=require('events')

const customEmiter = new EventEmiter

//on method will listen for the event
customEmiter.on('res',()=>{
    console.log("first comment")
})

customEmiter.on('res',()=>{
    console.log("second comment")
})

//when we pass arguments in emit function
customEmiter.on('res',(name,id)=>{
console.log(`person name ${name} with the id ${id}`)
})

//emit method will emit an event
//The position of emit matters more because it's a line by line exicution 
//we can pass arguments also in the emit
customEmiter.emit("res","Tom",81)
