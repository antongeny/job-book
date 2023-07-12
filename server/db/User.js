const { DATE, STRING } = require("sequelize");
const db = require("./db");
const {UUID, UUIDV4 } = db.Sequelize;

const User = db.define("user",{
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
},
name: {
    type: STRING
},

email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
},


})

module.exports = User;