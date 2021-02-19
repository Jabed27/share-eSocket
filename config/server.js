const http = require('http');

const express = require('express');
const app = express();
require('dotenv').config();


const userRouter = require('../router/user');
const messageRouter = require('../router/message');



app.use(express.json())
app.use(express.static('public'));

app.use('/user',userRouter);
app.use('/message',messageRouter)

app.get('/',(req,res) =>{
    res.send('HOŞGELDİNİZ');
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log("Server listening on port: "+port);
    
    
});

module.exports = server;