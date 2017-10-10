'use strict';
module.exports = function(sequelize, DataTypes) {
  var JobPosition = sequelize.define('JobPosition', {
    name_position: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    createdAt: new Date,
    updatedAt: new Date
  })
  JobPosition.associate = function(models) {
    JobPosition.hasMany(models.Employee, {foreignKey:"JobPositionId"})
    JobPosition.hasMany(models.Attendance, {foreignKey: 'JobPositionId'})
  }
  return JobPosition;
};
