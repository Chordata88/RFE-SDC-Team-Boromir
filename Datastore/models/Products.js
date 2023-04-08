module.exports = (sequelize, DataTypes) => {

  const Products = sequelize.define('Products', {

    product_id: {

      type: DataTypes.INTEGER, primaryKey: true,
      allowNull: false,
      validate: {notEmpty: true},
    },

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },





  })
  return Products;
};