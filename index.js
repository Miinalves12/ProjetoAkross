const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let squads = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/squads', (req, res) => {
  res.json(squads);
});

app.post('/squads', (req, res) => {
  const { nome, colaboradores } = req.body;
  const novaSquad = { nome, colaboradores };
  squads.push(novaSquad);
  res.json({ mensagem: 'Squad criada com sucesso!', squad: novaSquad });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


