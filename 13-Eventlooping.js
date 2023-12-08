const { readFile } = require("fs");


//Event looping 

console.log("first task");
readFile("./content.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  }

  console.log(res)
  console.log("completed first task");
});
console.log("seccond task")
