require('dotenv').config();
const Sequelize = require('sequelize');

const sequelizeConfig = {
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    logging: console.log
};

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    sequelizeConfig
);

module.exports = { sequelize };
