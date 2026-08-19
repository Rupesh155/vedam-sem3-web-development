// web server using nodejs
// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("URL:", req.url);
//     console.log("Method:", req.method);

//     res.end("Hello from Node.js Server");
// });

// server.listen(3000, () => {
//     console.log("Node.js server running on port 3000");
// });




// const http = require("http");

// const server = http.createServer((req, res) => {

//     if (req.url === "/") {
//         res.end("Home Page");
//     }

//     else if (req.url === "/about") {
//         res.end("About Page");
//     }

//     else if (req.url === "/contact") {
//         res.end("Contact Page");
//     }

//     else {
//         res.statusCode = 404;
//         res.end("Page Not Found");
//     }

// });

// server.listen(3000, () => {
//     console.log("Node.js server running on port 3000");
// });




// // web server using expresss


// const express = require("express");

// const app = express();

// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });

// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//     res.send("About Page");
// });

// app.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

// app.listen(3000, () => {
//     console.log("Express server running on port 3000");
// });


let express=  require('express')
let app=  express()
app.post('/about',(req,res)=>{
    console.log(req.body);
    
})
app.listen(3000,()=>{
    console.log("server");
    
})