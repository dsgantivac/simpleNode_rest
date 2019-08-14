const Sequelize = require("sequelize")

var sequelize = new Sequelize("despliegue", "despliegue","1234",{localhost: "localhost", dialect: "mysql"})

module.exports = sequelize
