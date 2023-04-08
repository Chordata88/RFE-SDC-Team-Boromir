const fs = require('fs'); const csv = require('csv-parser');

const path = require('path');

//const data = require('./sampledata.txt');

var arr = [];

// var readerFunc = () => { //debugger


//   fs.readFile(path.join(__dirname, './product.csv'), (err, data) => {

//     if (err) {

//       console.log('readFile error:', err);

//     } else {
//     let textContents = data; arr.push(data); var contentsRead = Buffer.concat(arr).toString();
//     //let contentsArr = textContents.split('\n'); console.log(contentsArr, data);
//   }
// })



//console.log('Contents:', contentsRead);
var readerFunc = () => { //console.log('in here')

fs.createReadStream(path.join(__dirname, './product.csv')).pipe(csv()).on('data', (data) => {arr.push(data)}).on('end', () => {console.log(arr)});}

readerFunc();





//exports.counterFile = path.join(__dirname, 'sampledata.txt')
