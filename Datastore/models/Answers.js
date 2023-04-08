module.exports = (sequelize, DataTypes) => {

  const Answers = sequelize.define('Answers', {

    product_id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {notEmpty: true},
    },

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, primaryKey: true,
    },


    body: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    answerer_name: {
      type: DataTypes.STRING,

      allowNull: false,
    },

    answerer_email: {type: DataTypes.STRING, allowNull: false},




    helpful: {
      type: DataTypes.STRING, allowNull: true,

    },
    reported: {

      type: DataTypes.INTEGER, defaultValue: 0, allowNull: false,
    }


  })

  return Answers;
};