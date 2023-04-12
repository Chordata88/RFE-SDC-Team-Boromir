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
//     console.error('Unable to connect to the database:', err);})

app.get("/qa/questions", async (req, res) => {
  console.log("req got here!", req.query.params);
  await controllers.getQuestions().then((questions) => {
    res.send(questions);
  });
}); //let data = await sequelize.query(`SELECT * FROM "Questions"`);  // let table = "Products"; // console.log(data); // let data = await sequelize.table.findAll(); let product_id = req.query.params.toString();

app.post("/qa/questions", async (req, res) => {
  let body = req.body;
  console.log(body);
  await controllers
    .addQuestion(body, (err, msg) => {
      res.send(msg);
    })
    .catch((err) => res.send(err));
  res.end();
}); //add a question

//app.post() //add an answer

//app.put() //update helpfulness

//app.put() //update reported status

app.listen(port, () =>
  console.log(`backend server listening on port ${port}! the link: ${url}`)
);
