const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
//app.use(express.static('public'));


app.listen(process.env.PORT || 3030, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
