const fs = require('fs');
const faker = require('faker');
const fileName = 'test.txt';

let name = faker.name.findName();
let email = faker.internet.email();

const person = {
  name,
  email,
};
console.log(person);
let dataToSave = JSON.stringify(person) + '\n';
console.log(dataToSave);

fs.appendFileSync(fileName, dataToSave);

const dataFromFile = fs.readFileSync(fileName, 'utf8');
const arrayFromFile = dataFromFile.trim().split('\n');
const length = arrayFromFile.length - 1;
const myFavoriteString = arrayFromFile[8];
// myFavoriteString.name = '123232323';
const newObj = JSON.parse(myFavoriteString);
console.log(newObj);
newObj.name = 'Maxim';
console.log(newObj);


