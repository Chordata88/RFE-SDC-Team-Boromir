'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Products', {

      product_id: {
        type: Sequelize.DataTypes.INTEGER,

        allowNull: false,
        validate: {notEmpty: true},
      },
      product_name: {

        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },

    }).then(() => {queryInterface.addConstraint('Products', {fields: ['product_id'], type: 'primary key', name: 'products_primary_key'})})
  },

  async down (queryInterface, Sequelize) {




    return queryInterface.dropTable('Products');



  }
};
