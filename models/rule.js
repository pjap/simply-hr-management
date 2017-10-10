'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rule = sequelize.define('Rule', {
    ket_rules: DataTypes.STRING,
    deduction: DataTypes.INTEGER,
    createdAt: new Date,
    updatedAt: new Date
  }, {

  });
  return Rule;
};
