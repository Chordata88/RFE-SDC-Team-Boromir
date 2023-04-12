const Sequelize = require("sequelize");
const database = require("./sequelize-models/Models.js");

// const sequelize = new Sequelize('postgres://james:root@localhost:5432/questions_answers'); //build env file with login parameters

// sequelize

//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })

//   .catch(err => {
//     console.error('Unable to connect to the database:', err);})

//sequelize.query(`SELECT * FROM "Questions" WHERE product_id = 180;`); //sequelize.query(`INSERT INTO "Questions"(product_id, question_body, asker_name, asker_email) VALUES ( ,${body.product_id}, '${body.question_body}', '${body.name}', '${body.email}, , ') RETURNING *;`)

const getQuestions = async () => {
  console.log(37311, "in controller");
  let data = await database.Questions.findAll({ where: { product_id: "180" } });
  if (data) {
    return data;
  }
};

const reportQuestion = () => {};

const reportAnswer = () => {};
const helpfulQuestion = () => {};
const addQuestion = async (body, callback) => {
  console.log(body, "in controller");
  let date = Math.floor(new Date().getTime() / 1);
  let next_id = await database.sequelize.query(`select setval('questions_question_id_seq', (SELECT MAX(question_id) FROM questions) + 1);`); let q_id = Number(next_id[0][0].setval);
  let obj = { question_id: q_id,
    product_id: body.product_id,
    question_body: body.question_body,
    date: date,
    asker_name: body.name,
    asker_email: body.email,
  }; console.log('the object to insert: ', obj)
  await database.Questions.create(obj)
    .then(() => callback(err, "success"))
    .catch((err) => callback(err));
};


const addAnswer = () => {};
const helpfulAnswer = () => {};

// Post.findAll({
//   where: {
//     authorId: 2
//   }
// });

module.exports = {
  getQuestions,
  addQuestion,
  reportAnswer,
  reportQuestion,
  helpfulQuestion,
  helpfulAnswer,
};
