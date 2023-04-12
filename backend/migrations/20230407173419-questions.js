'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


    await queryInterface.createTable('questions', { //product_id: {type: Sequelize.DataTypes.BIGINT},

      question_id: { type: Sequelize.DataTypes.BIGINT,

        // allowNull: false,
        autoIncrement: true, primaryKey: true
      },

      product_id: {

        type: Sequelize.DataTypes.BIGINT,
        //allowNull: false,
        //validate: {notEmpty: true},
      },
      question_body: {
        type: Sequelize.DataTypes.STRING,
        //allowNull: true,

      },
      date: {

        type: Sequelize.DataTypes.BIGINT, allowNull: false, //defaultValue: Now()
      },
      asker_name: {
        type: Sequelize.DataTypes.STRING,

        //allowNull: false,
      },

      asker_email: {type: Sequelize.DataTypes.STRING, }, //allowNull: false},
      reported: {

              type: Sequelize.DataTypes.INTEGER, defaultValue: 0, //allowNull: false,
            },

      question_helpfulness: {
        type: Sequelize.DataTypes.INTEGER, //allowNull: true,
      },


//add in dates?
    }) //.then(() =>
//   queryInterface.addConstraint('Questions', { fields: ['product_id'], type: 'foreign key', name: 'product_id_foreign_key', references: {table: 'Products', field: 'product_id' }})

    // ).then(() => queryInterface.addConstraint('Questions', {fields: ['question_id'], type: 'primary key', name: 'question_id_primary_key'}))
  },


  async down (queryInterface, Sequelize) {


    return queryInterface.dropTable('questions');

  }

};
