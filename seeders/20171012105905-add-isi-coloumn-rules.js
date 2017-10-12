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
    return queryInterface.bulkInsert('Rules',[{
      ket_rules: 'Masuk',
      deduction: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ket_rules: 'Izin',
      deduction: 100000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ket_rules: 'Cuti',
      deduction: 20000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ket_rules: 'Terlambat',
      deduction: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ket_rules: 'Cuti Hamil',
      deduction: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ket_rules: 'Kecelakaan',
      deduction: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ket_rules: 'Bencana Alam',
      deduction: 0,
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
