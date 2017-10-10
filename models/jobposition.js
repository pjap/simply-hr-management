'use strict';
module.exports = function(sequelize, DataTypes) {
  var JobPosition = sequelize.define('JobPosition', {
    name_position: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    createdAt: new Date,
    updatedAt: new Date
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JobPosition;
};
