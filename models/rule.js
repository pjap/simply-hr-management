'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rule = sequelize.define('Rule', {
    ket_rules: DataTypes.STRING,
    deduction: DataTypes.INTEGER,
    createdAt: new Date,
    updatedAt: new Date
  })
  Rule.associate = function(models) {
    Rule.hasMany(models.Attendance, {foreignKey: 'RuleId'})
    Rule.belongsToMany(models.Employee, {through: 'Absence'})
  }
  return Rule;
};
