const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const admin = require('./routes/admin');
const rota_aluno = require('./routes/rota_aluno');
const rota_turma = require('./routes/rota_turma');
const rota_login = require('./routes/rota_login');

//carregando o cabeçalho do html em outras páginas

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'escola',
  resave: false,
  saveUninitialized: true
}));


app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// arquivos estaticos
app.use('/bootstrapStyle', express.static('public/bootstrap/css'));
app.use('/bootstrapIcons', express.static('public/bootstrap/icons/font'));
app.use('/images', express.static('public/img'));
app.use('/bootstrapScript', express.static('public/bootstrap/js'));
app.use('/style', express.static('public/css'));
app.use('/fonts', express.static('public/fonts'));

//Remanejando Rotas admin
app.use('/', admin);

//Remanejando Rotas de Turma
app.use('/rota_turma', rota_turma);

//Remanejando Rotas de Turma
app.use('/rota_aluno', rota_aluno);

//Remanejando Rotas de Login
app.use('/rota_login', rota_login);


const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor Rodando");
});