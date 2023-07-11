const { DATE } = require("sequelize");
const db = require("./db");
const {UUID, UUIDV4 } = db.Sequelize;

const Date = db.define("date",{
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  date: {
    type: DATE,
  }
})

module.exports = Date;