// models/Application.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Application = db.define('Application', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Additional fields as necessary
});

module.exports = Application;
