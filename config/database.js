var express = require('express');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('portal', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = sequelize;