const express = require('express');
const router = express.Router();
const Aluno = require("../models/Aluno");
const Turma = require("../models/Turma");

router.get('/', (req, res) => {



    Aluno.sequelize.query("select * from selecAluno",
        { model: Aluno }).then(function (alunos) {
            var nalunos = JSON.parse(JSON.stringify(alunos));

            Turma.findAll().then((turmas) => {
                turmas = turmas.map((turma) => {
                    return turma.toJSON();
                });
                res.render("index", { alunos: nalunos, car: true, turmas: turmas });
            });
        });
});

router.get('/carousel', (req, res) => {
    res.render("carousel");
});

module.exports = router;