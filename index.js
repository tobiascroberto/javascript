// primeros pasos usar node para correr JS en el servidor!

console.log("Hello World!!");

let var1 = 3;

console.log("El valor de la variable es: ", var1);

// function
function pairFunction(value) {
  return value % 2 == 0;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let pair = arr1.filter(pairFunction);

let odd = arr1.filter((x) => x % 2 != 0);

console.log(pair, odd);

// reduce

let arraReduce = [2, 4, 6, 8, 10];

let reduceValue = arraReduce.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log("Salida de reduce: ", reduceValue);

let arraReduce1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reduce2 = arraReduce1.reduce((acc, curr) => acc + curr, 10);

console.log("Salida de reduce: ", reduce2);

// how to use map:
// a map is an entity or object hold key-value pairs and remeber the original insertion order of the keys.

const map1 = new Map(); // constructor

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);

console.log("El contenido de map es:");

// console.log(data,columns not to show)

console.log(map1);
console.table(map1);

// transform map to object: exchange the key for value first!

let obj = {};
let mapToObject = map1.forEach((value, key) => (obj[key] = value));
console.table(obj);
