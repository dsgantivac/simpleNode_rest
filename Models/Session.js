const Sequelize = require("sequelize")

const sequelize = require("../Controllers/DatabaseController")

var Session = sequelize.define('Session', {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    userId: Sequelize.STRING,
    expires: Sequelize.DATE,
    data: Sequelize.STRING(5000)
  });

module.exports = Session
