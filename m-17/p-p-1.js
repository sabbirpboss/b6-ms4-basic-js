var fruits = ['Apple', 'Banana', 'orange'];

const positionOfBanana = fruits.indexOf('Banana');
console.log("index of Banana:", positionOfBanana);

fruits[1] = 'mango';

console.log("replace Banana with mango:", fruits);

fruits.pop('Orange');
console.log("remove Orange:", fruits);

fruits.push('Watermelon');
console.log("add watermelon:", fruits);


// output for above console.log : 
// index of Banana: 1
// replace Banana with mango: [ 'Apple', 'mango', 'orange' ]
// remove Orange: [ 'Apple', 'mango' ]
// add watermelon: [ 'Apple', 'mango', 'Watermelon' ]