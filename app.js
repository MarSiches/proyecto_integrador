const express = require('express'); 
const app = express(); 
const path= require('path');

const publicPath= path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
res.send("<h1>Proyecto Hotel Mocona</h1>")
})

app.listen(3030,()=>console.log("El servidor 3030 esta corriendo"))

