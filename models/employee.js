'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define('Employee', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING,
    foto: DataTypes.STRING,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Employee;
};
