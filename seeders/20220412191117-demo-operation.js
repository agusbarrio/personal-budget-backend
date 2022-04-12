'use strict';

const sampleData = require('../sample/sample-data');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'operations',
      await require('../sample/sample-data.js')(),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('operations', null, {});
  },
};
