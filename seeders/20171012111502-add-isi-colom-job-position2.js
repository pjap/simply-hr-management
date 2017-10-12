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
    return queryInterface.bulkInsert('JobPositions',[{
      name_position: 'HRD',
      salary: 6000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name_position: 'Manager',
      salary: 9000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name_position: 'Direktur',
      salary: 15000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name_position: 'OB',
      salary: 1000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name_position: 'Staff',
      salary: 500000,
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
