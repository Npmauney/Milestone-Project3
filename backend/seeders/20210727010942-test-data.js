'use strict';
require('dotenv').config()

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    const [users] = await queryInterface.sequelize.query(
      `SELECT user_id from users LIMIT 1;`
    );

    await queryInterface.bulkInsert('tasks', [
      {
        author_id: users[0].user_id,
        description: "mow the lawn",
        difficulty: "easy",
        deadline: 'end of the week',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('tasks', null, {});
  }
};