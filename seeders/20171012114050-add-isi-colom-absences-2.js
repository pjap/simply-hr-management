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
      date: '2017-09-01',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 4,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-09-02',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 5,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-09-03',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 5,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-09-04',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 6,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-09-05',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 7,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-09-06',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 4,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-09-07',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 6,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      date: '2017-09-08',
      checkin: '09:00',
      checkout: '18:00',
      EmployeeId: 6,
      RuleId: 7,
      JobPositionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        date: '2017-09-09',
        checkin: '09:00',
        checkout: '18:00',
        EmployeeId: 6,
        RuleId: 5,
        JobPositionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      date: '2017-09-10',
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
