'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Photos', {

      photo_id: {
        type: Sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true,

        allowNull: false,

      }, answer_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,

        autoIncrement: true
      },
      url: {

        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },

    }).then(() => {queryInterface.addConstraint('Photos', {fields: ['answer_id'], type: 'foreign key', name: 'answer_id_foreign_key', references: {table: 'Answers', field: 'answer_id'}})})
  },

  async down (queryInterface, Sequelize) {



    return queryInterface.dropTable('Photos');
  }
};
