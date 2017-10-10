'use strict';
module.exports = function(sequelize, DataTypes) {
  var Absence = sequelize.define('Absence', {
    date: DataTypes.STRING,
    checkin: DataTypes.STRING,
    checkout: DataTypes.STRING,
    EmployeeId: DataTypes.INTEGER,
    RuleId: DataTypes.INTEGER,
    JobPositionId: DataTypes.INTEGER
  })
  Absence.associate = function(models) {
    Absence.belongsTo(models.JobPosition, {foreignKey:"JobPositionId"})
    Absence.belongsTo(models.Rule, {foreignKey:"RuleId"})
    Absence.belongsTo(models.Employee, {foreignKey:"EmployeeId"})
  }
  return Absence;
};
