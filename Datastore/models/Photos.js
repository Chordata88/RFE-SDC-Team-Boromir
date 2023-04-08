module.exports = (sequelize, DataTypes) => {

  const Photos = sequelize.define('Photos', {

    id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true, primaryKey:true,
    },

    //answer_id foreign key





    url: {
      type: DataTypes.STRING,
      allowNull: false
    },





  })
  return Photos;
};