const express = require('express');
const router = express.Router();
const Aluno = require("../models/Aluno");
const Turma = require("../models/Turma");

router.get('/home', (req, res) => {



    Aluno.sequelize.query("select * from selecAluno",
        { model: Aluno }).then(function (alunos) {
            var nalunos = JSON.parse(JSON.stringify(alunos));

            Turma.findAll().then((turmas) => {
                turmas = turmas.map((turma) => {
                    return turma.toJSON();
                });
                res.render("index", { alunos: nalunos, car: true, login:false, turmas: turmas });
            });
        });
});

router.get('/carousel', (req, res) => {
    res.render("carousel");
});

router.get('/', (req, res) => {
    res.render("login", {login:true});
});

router.get('/cadlogin', (req, res) => {
    res.render("cadLogin", {login:true});
});



module.exports = router;