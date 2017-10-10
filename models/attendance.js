'use strict';
module.exports = function(sequelize, DataTypes) {
  var Attendance = sequelize.define('Attendance', {
    date: DataTypes.STRING,
    checkin: DataTypes.STRING,
    checkout: DataTypes.STRING,
    EmployeeId: DataTypes.INTEGER,
    RuleId: DataTypes.INTEGER,
    ket_rules: DataTypes.STRING,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Attendance;
};
