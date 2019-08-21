const Sequelize = require("sequelize")

const sequelize = require("../Controllers/DatabaseController")

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(45),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
})


module.exports = User

/*
json 

{
    "name": "prueba",
    "email": "prueba@gmail.com"
}

! para eliminar

{
    "id": 7
}

*/

