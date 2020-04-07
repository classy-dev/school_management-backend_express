var bodyParser = require("body-parser");
var express = require('express');
var cors = require("cors");

var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const User = db.user;

// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  createAdmin();
});

const createAdmin = () => {
  User.create({
    role: 'admin',
    email: 'admin',
    password: 'admin',
  });
};

require('./app/routes/auth')(app);
require('./app/routes/dashboard/finances')(app);
require('./app/routes/dashboard/students')(app);
require('./app/routes/dashboard/parents')(app);
require('./app/routes/dashboard/teachers')(app);
require('./app/routes/dashboard/librarians')(app);
require('./app/routes/dashboard/accountants')(app);
require('./app/routes/dashboard/employees')(app);
require('./app/routes/dashboard/awards')(app);
require('./app/routes/dashboard/notes')(app);
require('./app/routes/dashboard/events')(app);

module.exports = app;