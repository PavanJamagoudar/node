const http = require("http");

//to create a server
const server = http.createServer((req, res) => {
  //*To create a request port
  if (req.url === "/") {
    res.end("Hi!! Welcome to home page ");
  }
  if (req.url === "/about") {
    res.end("This is about page");
  }
  // res.end("Oops somting went wrong")  //?for the error page

  // res.write("Welcome to this page") //*to write in the browser
  // res.end()  //*to end the server
});

server.listen(3000);
