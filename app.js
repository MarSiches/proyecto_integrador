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
app.get ('/servicio', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/servicio.html"))
});
app.get ('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})

app.listen(3030,()=>console.log("El servidor 3030 esta corriendo"))

