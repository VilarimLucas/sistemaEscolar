const db = require('./db');
//reproduzindo a tabela Login
const Login = db.sequelize.define('login', {
    id_login: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    },
    nivel: {
        type: db.Sequelize.INTEGER
    }
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

// Login.sync({ force: true });
module.exports = Login;