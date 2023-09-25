const express = require('express');
const {rota} = require('./roteador');
const app = express();

app.use(rota);

app.listen(3000);