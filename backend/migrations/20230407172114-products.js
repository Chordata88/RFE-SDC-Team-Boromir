'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('products', {

      product_id: {
        type: Sequelize.DataTypes.BIGINT,

        autoIncrement: true,
       primaryKey: true,
      },
      product_name: {

        type: Sequelize.DataTypes.STRING,
       // allowNull: false
      },

    })  //.then(() => {queryInterface.addConstraint('products', {fields: ['product_id'], type: 'primary key', name: 'products_primary_key'})})
  },

  async down (queryInterface, Sequelize) {




    return queryInterface.dropTable('products');



  }
};
