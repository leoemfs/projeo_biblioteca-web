const express = require('express');
const app = express();

//configurando o servidor
app.set('view engine', 'ejs');//Configurando o EJS como visualizador padrão
app.use(express.static('public'));//Configurando o Express para arquivos estáticos (CSS e Javascripts)
app.use(express.json());//Configurando o Express para trabalhar com JSONs
app.use(express.urlencoded({ extended: true }));//Configurando o Express para receber formulários HTML como JSON

module.exports = app;