'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      idProduct: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      product: {
        type: Sequelize.STRING(80)
      },
      value: {
        type: Sequelize.DECIMAL(13,2)
      },
      amount: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Products');
  }
};