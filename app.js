const express = require('express'); 
const app = express(); 
const path= require('path');

const publicPath= path.resolve(__dirname, './public');
app.use(express.static(publicPath));


app.get ('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.get ('/habitaciones', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/habitaciones.html"))
});
app.get ('/servicios', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/servicios.html"))
});
app.get ('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});
app.get ('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});
app.post('/register', (req, res) =>{
res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.listen(3030,()=>console.log("El servidor 3030 esta corriendo"))

