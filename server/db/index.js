const Date = require("./Date");
const User = require("./User");
const People = require("./People");
const JobApplication = require("./JobApplication");
const Company = require("./Company");


People.hasone(Date);

module.exports = {
  People,
}