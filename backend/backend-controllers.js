const Sequelize = require("sequelize");
const database = require("./sequelize-models/Models.js");

// const sequelize = new Sequelize('postgres://james:root@localhost:5432/questions_answers'); //build env file with login parameters

// sequelize

const getAnswers = async (id) => {//   .authenticate()
//   .then(() => {
let answers = await database.Answers.findAll({where: {question_id: id, answer_reported: 0}}); //let answer_obj = {}; answers.forEach//     console.log('Connection has been established successfully.');

return answers;
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);})

}//sequelize.query(`SELECT * FROM "Questions" WHERE product_id = 180;`); //sequelize.query(`INSERT INTO "Questions"(product_id, question_body, asker_name, asker_email) VALUES ( ,${body.product_id}, '${body.question_body}', '${body.name}', '${body.email}, , ') RETURNING *;`)

const getQuestions = async (id) => {
  //console.log(37311, "in controller");
  let data = await database.Questions.findAll({ where: { product_id: id, question_reported: "0"  } }); //console.log('data returned:', data); console.log('starting answer question:', data);
// data.forEach(async (question) => { //let question_answers = await database.Answers.findAll({include : question.question_id})}); console.log('jfdskalfs:', question_answers) // let answer_list = await database.Answers.findAll({where: {question_id: }});
  //.then((data) => {
  //   if (data) {
  //let answers = await database.Answers

  //   }


  // }); //console.log(data); console.log('the q_id', id);

return {product_id: id, results: data}};

const reportQuestion = async (id, callback) => {  await database.Questions.update({question_reported: 1}, {where: {question_id: id}}).then(() => database.Questions.findAll({where: {question_id: id}})).then((question) => {callback(question)}); };

const reportAnswer = () => {};
const helpfulQuestion = () => {};
const addQuestion = async (body, callback) => { //console.log(body, "in controller");

  let date = Math.floor(new Date().getTime() / 1);
  let next_id = await database.sequelize.query(`select setval('questions_question_id_seq', (SELECT MAX(question_id) FROM questions) + 1);`); let q_id = Number(next_id[0][0].setval);

  let obj = { question_id: q_id,
    product_id: body.product_id,

    question_body: body.question_body,
    date: date,
    asker_name: body.name,
    asker_email: body.email,
  }; //console.log('the object to insert: ', obj)

  await database.Questions.create(obj)
    .then(() => callback(err, "success"))

    .catch((err) => callback(err));
};
const getPhotos = async (id) => { let photos = await database.Photos.findAll({where : {answer_id: id}}); return photos.map((photo) => photo.url)}
const addAnswer = async (body, callback) => {
  let date = Math.floor(new Date().getTime() / 1);
  let next_qa_id = await database.sequelize.query(`select setval('answers_answer_id_seq', (SELECT MAX(answer_id) FROM answers) + 1);`); let qa_id = Number(next_qa_id[0][0].setval);

  let obj = { answer_id: qa_id,

    question_id: body.question_id,



    answer_body: body.answer_body,
    answer_date: date,
    answerer_name: body.name,
    answerer_email: body.email, answer_helpfulness: 0, answer_reported: 0}; //console.log('PHOTOINFO :', photoInfo); console.log("THE OBJ:", obj); console.log('PHOT OBJ: ,', {photo_id: picture_id, answer_id: qa_id, url: photoInfo} );
    await database.Answers.create(obj).then(async () => { if (body.photos.length) { await body.photos.forEach(async (photoInfo) => { let picture_id = await database.sequelize.query(`select setval('photos_photo_id_seq', (SELECT MAX(photo_id) FROM photos) + 1);`); picture_id = Number(picture_id[0][0].setval);  await database.Photos.create({photo_id: picture_id, answer_id: qa_id, url: photoInfo})})} }).then(() => callback("success")) // }; console.log('the ANSWERS object to insert: ', obj); (async () => { await database.Answers.create(obj).then(async () => { if (body.photos.length) {body.photos.forEach(async (photoInfo) => {let picture_id = await database.sequelize.query(`select setval('photos_photo_id_seq', (SELECT MAX(photo_id) FROM photos) + 1);`); picture_id = Number(picture_id[0][0].setval); console.log('PHOT OBJ: ,', {photo_id: picture_id, answer_id: qa_id, url: photoInfo.url} ); await database.Photos.create({photo_id: picture_id, answer_id: qa_id, url: photoInfo.url})})} })}).then(() => callback("success"))

  // .catch((err) => callback(err))();  //onsole.log('next ANSWER ID:', qa_id);

  // let obj = { answer_id: qa_id,

  //   question_id: body.question_id,



  //   answer_body: body.answer_body,
  //   answer_date: date,
  //   answerer_name: body.name,
  //   answerer_email: body.email, photos: photoInfo
  // }; console.log('the ANSWERS object to insert: ', obj);




  // await database.Answers.create(obj).then(async () => { if (body.photos.length) {body.photos.forEach(async (photoInfo) => {let picture_id = await database.sequelize.query(`select setval('photos_photo_id_seq', (SELECT MAX(photo_id) FROM photos) + 1);`); picture_id = Number(picture_id[0][0].setval); console.log('PHOT OBJ: ,', {photo_id: picture_id, answer_id: qa_id, url: photoInfo.url} ); await database.Photos.create({photo_id: picture_id, answer_id: qa_id, url: photoInfo.url})})} })
  //   .then(() => "success")
//return obj
  //   .catch((err) => callback(err));
};
const helpfulAnswer = () => {};

// Post.findAll({
//   where: {
//     authorId: 2
//   }
// });

module.exports = {

  getQuestions, addAnswer,
  addQuestion, getAnswers, getPhotos,
  reportAnswer,
  reportQuestion,
  helpfulQuestion,
  helpfulAnswer,
};
