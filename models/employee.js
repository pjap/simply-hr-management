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
    updatedAt: new Date,
    JobPositionId: DataTypes.INTEGER
  })
  Employee.associate = function(models) {
    Employee.belongsTo(models.JobPosition, {foreignKey: 'JobPositionId'})
    Employee.hasMany(models.Attendance, {foreignKey: 'EmployeeId'})
    Employee.belongsToMany(models.Rule, {through: 'Absence'})
  }
  return Employee;
};
