const express = require('express');
const { get, getPorId, getPorQuery } = require('./controladores/sistemaDeBusca');
const rota = express();

rota.get('/', get);
rota.get('/livros/:id', getPorId);
rota.get('/busca-livro', getPorQuery);

module.exports = {rota};