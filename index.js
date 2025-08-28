const express = require("express");
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const piadas = JSON.parse(fs.readFileSync('piadas.json'));


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/piadas',(req,res)=>{
    const randomIndex = Math.floor(Math.random() * piadas.length);
    res.json({ piada: piadas[randomIndex] })
});


app.listen(port,()=>{
    console.log(`API de piadas rodando em http://localhost:${port}`);
})