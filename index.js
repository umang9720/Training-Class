const express  =  require('express');
const app = express();
const user = require('./route/user')

app.use(user)

app.listen(3000,(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("server is runnning on 3000");
        
    }
})

//localhost:3000/user