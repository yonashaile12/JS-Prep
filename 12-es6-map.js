let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

console.log(map.size);

console.log(map.get(1));

//Map can be used objects as keys
let student = {name:'Mike', age:20};

let visits = new Map();
visits.set(student, 100);

// Map can use functions as keys
let fun = function(){console.log('Hello');};

visits.set(fun, 'This is function');

console.log(visits.get(fun));

//chaining
let myCars = new Map();
myCars.set(1, 'HondaCivic')
.set(2, 'HondaAccord')
.set(3, 'HondaCRV');

console.log(myCars.get(2));

//iterating - over keys

for(let car of myCars.keys()){
  console.log(car);
}

for(let value of myCars.values()){
  console.log(value);
}

for(let [key, value] of myCars){
  console.log(key + ":"+value);
}


myCars.forEach((value, key) => { console.log(key+" + "+value);});
