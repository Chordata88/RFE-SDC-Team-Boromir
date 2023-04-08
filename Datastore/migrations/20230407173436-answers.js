'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Answers', {

      answer_id: {
        type: Sequelize.DataTypes.INTEGER,

        allowNull: false,
        autoIncrement: true
      },
      question_id: { type: Sequelize.DataTypes.INTEGER,
        allowNull: false,

        autoIncrement: true
      },
      answer_body: {

        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      }, answer_date: { type: Sequelize.DataTypes.BIGINT, allowNull: false },
      answerer_name: {
        type: Sequelize.DataTypes.STRING,

        allowNull: false,

      },
      answerer_email: {type: Sequelize.DataTypes.STRING, allowNull: false},

      // answer_helpfulness: {
      //   type: Sequelize.DataTypes.INTEGER, defaultValue: 0, allowNull: true,
      // },

      reported: {
        type: Sequelize.DataTypes.INTEGER, defaultValue: 0, allowNull: false,

      },     answer_helpfulness: {
        type: Sequelize.DataTypes.INTEGER, defaultValue: 0, allowNull: false,
      },
//add in dates?

    }).then(() =>
      queryInterface.addConstraint('Answers', { fields: ['question_id'], type: 'foreign key', name: 'question_id_foreign_key', references: {table: 'Questions', field: 'question_id' }})

    ).then(() => queryInterface.addConstraint('Answers', {fields: ['answer_id'], type: 'primary key', name: 'answer_id_primary_key'}))
  },


  async down (queryInterface, Sequelize) {


    return queryInterface.dropTable('Answers');


  }
};
