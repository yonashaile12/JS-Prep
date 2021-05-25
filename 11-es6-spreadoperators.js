let mid = [3,4];
let arr = [1, 2,...mid,5,6];
console.log(arr);

let str = 'Hello';
var chars = [...str];
console.log(chars);

//rest operators collects all elements into array

function fun(...theArgs){
  console.log(theArgs.length);
}

fun();
fun(5);
fun(5,6,7);

function multiply(multiplier, ...theArgs){
  return theArgs.map(element => multiplier * element); //[15,25,42]
}


let array = multiply(2, 15, 25, 42); //[ 30, 50, 84 ] 2*15, 2*25, 2*42
console.log(array);
