'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};

// 'use strict';

// import { QueryInterface } from 'sequelize';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   up: async (queryInterface: QueryInterface): Promise<void> => {
//     await queryInterface.bulkInsert('users', [
//       {
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'example@example.com',
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);
//   },
  
//   down: async (queryInterface: QueryInterface): Promise<void> => {
//     await queryInterface.bulkDelete('users', { email: 'example@example.com' }, {});
//   },
// };
