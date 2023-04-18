const express = require("express");
const controllers = require("./backend-controllers.js");
const app = express();
const Sequelize = require("sequelize");
var cors = require("cors"); //const bodyParser = require('body-parser');
const port = 8080;
const url = `http://localhost:${port}`;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const sequelize = new Sequelize('postgres://james:root@localhost:5432/questions_answers'); //build env file with login parameters

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');

//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);}) let data = console.log('questions before foreach:', questions);
// app.get("/qa/questions", async (req, res) => { let product_id = req.query.product_id;
//  //console.log("req got here!", req.query.product_id);
//   //let attempts = [];

//   let data = await controllers.getQuestions(product_id).then(async (questions) => { // questions.results =
//     for (var i = 0; i < questions.results.length; i++) {

//        questions.results[i].answers = await controllers.getAnswers(questions.results[i].question_id).then(async(answers) => { for (var j = 0; j < answers.length; j++) {  answers[j].photos = await controllers.getPhotos(answers[j].answer_id); }; return answers })};

//         //};

//         return questions
//       }).then((updatedQuestions) => {  res.json(updatedQuestions)}); //console.log('updated Questions', updatedQuestions);
//     })









// app.post("/qa/questions/", async (req, res) => {
//   let body = req.body;
//   console.log(body);

//   await controllers


//     .addQuestion(body, (msg) => {
//       res.send(msg);
//     })

//     .catch((err) => res.send(err));
//   res.end();
// }); //add a question console.log('req got here', req.params.question_id);console.log(body);
// app.post("/qa/questions/:question_id/answers", async (req, res) => { let body = req.body;   body.question_id = req.params.question_id; console.log('updated body', body);

// await controllers.addAnswer(body, (msg) => {

//   res.send(msg);



// }).catch((err) => {res.send(err)}) //add an answer
// //.then((msg) => res.send(msg))




// }); //add an answer
// ****Lines 22 - 73 **** original routes ****
//app.put() //update helpfulness


app.put('/qa/questions/:question_id/report', async (req, res) => { //console.log('question_id:', req.query.question_id);

   await controllers.reportQuestion(req.query.question_id, (data) => {res.send(data)})
}); //console.log('req got here', req.query, req.params);

app.listen(port, () =>

  console.log(`backend server listening on port ${port}! the link: ${url}`)
);
