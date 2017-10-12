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
    return queryInterface.bulkInsert('Employees',[{
      first_name: 'Prana',
      last_name: 'Otong',
      email: 'pjap18@gmail.com',
      address: 'Bogor',
      phone: '087573298',
      gender: 'Pria',
      foto: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Kautzar',
      last_name: 'Bulu Bani',
      email: 'beruk09@gmail.com',
      address: 'Bandung',
      phone: '08757209849',
      gender: 'Pria',
      foto: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Ariel',
      last_name: 'Maya',
      email: 'noahah@gmail.com',
      address: 'Bandung Kota',
      phone: '0809696969',
      gender: 'Pria',
      foto: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Ceu',
      last_name: 'Tari',
      email: 'taritari@gmail.com',
      address: 'Bogor',
      phone: '08790812402839',
      gender: 'Wanita',
      foto: '98765',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Udin',
      last_name: 'Petot',
      email: 'petotpetot@gmail.com',
      address: 'Cileungsi',
      phone: '0875932084920384',
      gender: 'Pria',
      foto: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Lengan',
      last_name: 'Hercules',
      email: 'ototbarbel@gmail.com',
      address: 'Ujung Kulon',
      phone: '0879328492738',
      gender: 'Pria',
      foto: '12345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'Candra',
      last_name: 'Tampan',
      email: 'matikitacuk@gmail.com',
      address: 'Bekasi',
      phone: '0875798978',
      gender: 'Pria',
      foto: '12345',
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
