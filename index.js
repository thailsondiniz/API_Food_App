const express = require('express');
const server = express();
const categorias = require('./src/data/caterogias.json')
const pizzasMenu = require('./src/data/pizza.json')

server.get('/categorias',(req, res)=>{
    return res.json(categorias);
});

server.get('/pizzasMenu',(req, res)=>{
    return res.json(pizzasMenu);
});

server.listen(3000,()=>{
    console.log('servidor rodando!');
});