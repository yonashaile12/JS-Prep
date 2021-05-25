//Creating array
var scores = new Array();//empty
var numbers = new Array(10); //array with initial size 10
var myNumbers = new Array(9,10,4,5); // new keyword is optional // array with the given numbers

var athlets = Array(3); // array with initial size 3
var signs = Array('Red'); // array with one element

var emptyArray = [];
var colors = ['red', 'green', 'blue'];

//Accessing array element
var students = ['Mike', 'Tim', 'Ozzy'];
console.log(students);
console.log(students.toString());
console.log(students[0]);

//Basic operations on arrays
students.push('Emma'); // adds element to end of an arrray
console.log(students);

students.unshift('Adam');// adds element to beginning of an array
console.log(students);


students.pop(students); //removes an element from the end of an arrays
console.log(students);

students.shift(); // removes ann element from the beginning of an arrays
console.log(students);

var index = students.indexOf('Mike'); //indexOf method gives the index of the element
console.log(index);

students.splice(0, 1); // delete elements in arrays
console.log(students);

students.splice(2, 0, 'Matt'); //inserts elements
//2 - starting position in the array that new elements will be inserted
//0 - instruct the splice() method to not to delete any array elements
//Third argument, fourth argument, and so on are the new elements that are inserted into arrays
console.log(students);

var array =[1, 30, 4, 21];
console.log(array.sort()); // cast elements to string and compares the strings to determine the 
