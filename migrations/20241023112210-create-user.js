'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};


// 'use strict';

// import { QueryInterface, DataTypes } from 'sequelize';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface: QueryInterface): Promise<void> {
//     await queryInterface.createTable('users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER
//       },
//       firstName: {
//         type: DataTypes.STRING
//       },
//       lastName: {
//         type: DataTypes.STRING
//       },
//       email: {
//         type: DataTypes.STRING
//       },
//       createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       }
//     });
//   },
  
//   async down(queryInterface: QueryInterface): Promise<void> {
//     await queryInterface.dropTable('users');
//   }
// };
