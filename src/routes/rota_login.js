const express = require('express');
const router = express.Router();

//vamos carregar nosso modelo
const Login = require("../models/Login");

//rota do botão do form para criar o Login
router.post('/login/nova', (req, res) => {
    Login.create({
        usuario: req.body.username,
        email: req.body.email,
        senha: req.body.password,
        nivel: 2
    }).then(() => {
        res.redirect("/");
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro);
    });
});

//rota do botão do form para autenticar o Login
router.post('/login/auth',async  (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await Login.findOne({
            where: {
                usuario: username,
                senha: password
            }
        });

        if (user) {
            req.session.id_login = user.id; // Store user ID in the session
            res.redirect('/home'); // Redirect to the dashboard after successful login
        } else {
            res.send('Credenciais inválidas');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.send('Houve um erro ao fazer o login');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error logging out:', err);
      }
      res.redirect('/');
    });
  });
  


//______ Fim das rotas do aluno ___________
module.exports = router;