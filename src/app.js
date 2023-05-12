const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const rota_aluno = require('./routes/rota_aluno.js');
const rota_turma = require('./routes/rota_turma.js');

//carregando o cabeçalho do html em outras páginas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// arquivos estaticos
app.use('/bootstrapStyle', express.static('public/bootstrap/css'));
app.use('/bootstrapIcons', express.static('public/bootstrap/icons/font'));
app.use('/images', express.static('public/img'));
app.use('/bootstrapScript', express.static('public/bootstrap/js'));
app.use('/style', express.static('public/css'));


//Remanejando Rotas de Turma
app.use('/rota_turma', rota_turma);

//Remanejando Rotas de Turma
app.use('/rota_aluno', rota_aluno);

const PORT = 8081;
app.listen(PORT, () => {
console.log("Servidor Rodando");
});