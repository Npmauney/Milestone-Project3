'use strict';
require('dotenv').config()

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'example@example.com',
      created_at: new Date(),
      updated_at: new Date()
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
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('tasks', null, {});
  }
};