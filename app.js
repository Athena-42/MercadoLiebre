const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/home', (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
});

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
});

app.post('/crear',(req,res)=>{
    res.send("Recibí un formulario")
})

app.listen(process.env.PORT || 3000, ()=> console.log("El servidor está corriendo"))