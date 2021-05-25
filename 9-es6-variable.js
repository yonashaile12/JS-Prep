// var x = 1; //global and function scoped
// if(x === 1){
//   var x = 2;
//   console.log(x);
// }
//
// console.log(x);

let x = 1; // block scoped

if(x === 1){
  let x = 2;
  console.log(x);
}

console.log(x);

const number = 50;
//number = 40; //TypeError: Assignment to constant variable.
console.log(number);

// Template strings
let firstName = 'Mike';
let lastName = 'Smith';

console.log('My Name is: '+firstName+' '+lastName);

console.log(`My Name is : ${firstName} ${lastName}`);
