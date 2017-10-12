'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Absences', [{
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 1,
      RuleId: 4,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 3,
      RuleId: 5,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 1,
      RuleId: 5,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 1,
      RuleId: 6,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 1,
      RuleId: 7,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 3,
      RuleId: 4,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 3,
      RuleId: 6,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-10-11',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 3,
      RuleId: 7,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
