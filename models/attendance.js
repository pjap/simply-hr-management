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
  })
  Attendance.associate = function(models) {
    Attendance.belongsTo(models.JobPosition, {foreignKey:"JobPositionId"})
    Attendance.belongsTo(models.Rule, {foreignKey:"RuleId"})
    Attendance.belongsTo(models.Employee, {foreignKey:"EmployeeId"})
  }
  return Attendance;
};
