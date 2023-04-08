module.exports = (sequelize, DataTypes) => {

  const Questions = sequelize.define('Questions', {

    product_id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {notEmpty: true},
    },

    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },


    question_body: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    asker_name: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    asker_email: {type: DataTypes.STRING, allowNull: false},



    question_helpfulness: {

      type: DataTypes.STRING, allowNull: true,

    },
    reported: {

      type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false,
    },

    //add in dates?
  })

  return Questions;
};