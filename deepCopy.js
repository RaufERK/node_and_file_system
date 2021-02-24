const array1 = [[1, 2, 3, 4, [3, 4, 5, 67, [555, 666]]]];

const newArray = JSON.parse(JSON.stringify(array1));
newArray[0][0] = 'Z';

const notDeepCopy = [...array1];
notDeepCopy[0][0]='FF'

console.log(notDeepCopy);
console.log(array1);
console.log(newArray);
