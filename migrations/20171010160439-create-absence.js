'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Absences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      checkin: {
        type: Sequelize.STRING
      },
      checkout: {
        type: Sequelize.STRING
      },
      EmployeeId: {
        type: Sequelize.INTEGER
      },
      RuleId: {
        type: Sequelize.INTEGER
      },
      JobPositionId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Absences');
  }
};