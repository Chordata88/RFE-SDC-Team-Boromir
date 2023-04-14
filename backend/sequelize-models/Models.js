const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://james:root@localhost:5432/questions_answers', {query: {raw:true}}); //build env file with login parameters
sequelize

  .authenticate()

  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {

    console.error('Unable to connect to the database:', err);})



  const Products = sequelize.define('products', {

    product_id: {
      type: Sequelize.BIGINT,
      autoIncrement: true, primaryKey: true
    },

    product_name: {

      type: Sequelize.STRING,





    },

  }, {timestamps: false}, {indexes: [{unique: true, fields: ['product_id']}]});

  const Questions = sequelize.define('questions', { //product_id: {type: Sequelize.BIGINT,},


    question_id: {

      type: Sequelize.BIGINT,
      autoIncrement: true, primaryKey: true,

    }, product_id: {type: Sequelize.BIGINT,},
    question_body: {
      type: Sequelize.STRING,
    },

    date: {type: Sequelize.BIGINT, allowNull: false},
    asker_name: {type: Sequelize.STRING},

    asker_email: {type: Sequelize.STRING},

    question_reported: {type: Sequelize.INTEGER, defaultValue: 0},

    question_helpfulness: {

type: Sequelize.INTEGER, defaultValue: 0
    },

  }, {timestamps: false}, {indexes: [{unique: true, fields: ['question_id']}]});

  const Answers = sequelize.define('answers', {



    answer_id: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true


    },
    question_id: { type: Sequelize.BIGINT},

    answer_body: {type: Sequelize.STRING},
    answer_date: {type: Sequelize.BIGINT},
    answerer_name: {type: Sequelize.STRING},


    answerer_email: {type: Sequelize.STRING},


  answer_reported: {type: Sequelize.INTEGER, defaultValue: 0},
  // Products.hasMany(Questions);

answer_helpfulness: {type: Sequelize.INTEGER, defaultValue: 0}// Questions.belongsTo('Products', {foreignKey: 'product_id'});
}, {timestamps: false}, {indexes: [{unique: true, fields: ['answer_id']}]});




const Photos = sequelize.define('photos', {
  photo_id: {
    type: Sequelize.BIGINT,
    autoIncrement: true, primaryKey: true
  },
  answer_id: {

    type: Sequelize.BIGINT},

    url: {type: Sequelize.STRING}

}, {timestamps: false}, {indexes: [{unique: true, fields: ['photo_id']}]});




























// Products.hasMany(Questions);
// Questions.belongsTo(Products, {foreignKey: 'product_id'});
// Questions.hasMany(Answers);

// Answers.belongsTo(Questions, {foreignKey: 'question_id'});
(async () => {
  await sequelize.sync({ alter: true }).then(() => {console.log('synced')}).catch((err) => {console.log('sequelize sync error: ', err)});
})()




module.exports = {sequelize, Products, Questions, Answers, Photos}
