const { foo, exportExpl1, value2 } = require('./file2');
const fs = require('fs');
const readlineSync = require('readline-sync');
const faker = require('faker');

var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
// var randomCard = faker.helpers.createCard();

const myStr =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quas doloremque corporis commodi, iusto esse necessitatibus vitae officia aliquam incidunt repellendus labore pariatur earum. Sit maxime voluptate voluptas, hic expedita ducimus, distinctio rem, dicta a ad error ex natus amet. Illum libero delectus saepe deleniti obcaecati vitae corporis modi omnis?';
const enteredText = readlineSync.question('Enter some text : ');
// запрашивает тект из консоли
// console.log('enteredText =', enteredText);

// let i = 0;
// while (i < 5) {
let name = faker.name.findName();
let email = faker.internet.email();
const person = {
  name,
  email,
};
console.log(person);
let dataToSave = JSON.stringify(person);
console.log();

fs.appendFileSync('test.txt', dataToSave + '\n');

//   i++;
// }

//читаем из файла
// const readFileRes = fs.readFileSync('test.txt', 'utf8');
// console.log('readFileRes =', readFileRes);
