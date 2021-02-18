const mongo = require('mongoose');
//const baseURL = 'MONGOURL ADRESİ';
require('dotenv').config();
console.log(process.env.MONGODB_URI)
mongo.connect(process.env.MONGODB_URI,{useUnifiedTopology: true,  useCreateIndex: true, useNewUrlParser: true}).then((db)=>{
    console.log('Connected MONGODB');
}).catch((error)=> console.log('Not Connected',error));