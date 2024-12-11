const { Sequelize } = require('sequelize');

require('dotenv').config();
 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {

    host: process.env.DB_HOST,

    port: process.env.DB_PORT,

    dialect: process.env.DB_DIALECT,

    dialectOptions: {

        ssl: {

            require: true,

            rejectUnauthorized: false // Dependendo da configuração de SSL

        }

    }

});
 
sequelize.authenticate()

    .then(() => console.log('Conexão bem-sucedida com o banco de dados!'))

    .catch(err => console.error('Erro ao conectar:', err));

 

module.exports = sequelize;