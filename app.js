const express = require('express');
const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor online en puerto ${PORT}`);
});

// app.listen(3000, ()=>{
//     console.log(`Servidor online en puerto 3000`);
// });

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});