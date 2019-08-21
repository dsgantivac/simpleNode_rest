
const dotenv = require('dotenv');
result = dotenv.config();

const Sequelize = require("sequelize")
const DB_NAME = process.env.DB_NAME ? process.env.DB_NAME : "despliegue"
const DB_USER = process.env.DB_USER ? process.env.DB_USER : "despliegue"
const DB_PASSWORD = process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "1234"
const DB_HOST = process.env.DB_HOST ? process.env.DB_HOST : "localhost"
const DB_LOGGING = process.env.DB_LOGGING ? true : false


var sequelize = new Sequelize(DB_NAME, DB_USER,DB_PASSWORD,{localhost: DB_HOST, dialect: "mysql", logging: DB_LOGGING})

module.exports = sequelize
