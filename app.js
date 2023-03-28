const express  = require('express');
const app = express();
const fs = require("fs");

var userCntrl = require('./controllers/userController.js');
console.log("userCntrl", userCntrl.addUser);


const port = '8080';
require('./models');



app.get("/", (req,res)=> { 
    res.send("home page ")
})

app.get("/add", userCntrl.addUser);

// app.get("/add", (req,res)=> {
//    console.log(userCntrl.addUser)
//     res.status(200).json({
//         data:"ok"
//     });
// });

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})