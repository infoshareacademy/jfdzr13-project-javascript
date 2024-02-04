import people from "./data.js";
// Zadanie 1.
const tickTackToe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["**", "o", "x"],
];
tickTackToe[2].splice(0, 1, "x");
// console.log(tickTackToe);
// Zadanie 2.
let result = 0;
function sumNumbersInArray(array) {
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
}

// console.log(sumNumbersInArray([2, 7, 4, 11, -1]));

// Zadanie 3.
function sortArr(condition, array) {
  if (condition === "asc") {
    return array.sort(compareAsc);
  } else {
    return array.sort(compareDesc);
  }
}
function compareDesc(a, b) {
  if (a > b) {
    return -1;
  }
}

function compareAsc(a, b) {
  if (a > b) {
    return 1;
  }
}

// console.log(sortArr("asc", [2, 7, 4, 11, -1]));
// console.log(sortArr("desc", [2, 7, 4, 11, -1]));
// Zadanie 4.
function biggestInArray(array) {
  const sortedArray = array.sort(compareDesc);
  return sortedArray[0];
}

// console.log(biggestInArray([2, 7, 4, 11, -1]));

// Zadanie 5.
function reverseArray(array) {
  return array.reverse();
}
// console.log(reverseArray([2, 7, 4, 11, -1]));

// Zadanie 6.

function areElemsTruthy(maxIndex, array) {
  let result = [];
  const portionorarraytoconsider = array.slice(0, maxIndex); //redukuje array
  portionorarraytoconsider.forEach((element) => result.push(Boolean(element)));
  return result;
}

// console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true]));

// MOJE
// function falTru(element) {
//   if (element == true || element == undefined || element == NaN) {
//     return true;
//   } else {
//     false;
//   }
// }
// let array = [];
// function areElemsTruthy(value, array) {
//   for (let i = 0; i < value; i++) {
//     return falTru(array[i]);
//   }
// }
// console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true]));
// Zadanie 7.

function stringLength(array) {
  const lengths = [];
  for (let i = 0; i < array.length; i++) {
    lengths.push(array[i].length);
  }
  return lengths;
}
// console.log(stringLength(["hello", "world", "dog", "sophisticated"]));

// Zadanie 8.

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

const checkEqualOrHigher = (number) => number >= 20;
const allNegative = (number) => number < 0;
const dividedByTwo = (number) => number % 2 === 0;

function myResult(array, myFunc) {
  const result = array.filter(myFunc);
  return result;
}
// console.log(myResult(numbers, checkEqualOrHigher));
// console.log(sumOfArray(myResult(numbers, allNegative)));
// console.log(sumOfArray(myResult(numbers, dividedByTwo)));

function sumOfArray(arr) {
  let sum = 0;
  for (const el of arr) {
    sum += el;
  }
  return sum;
}

// Zadanie 9.

const flatArray = (array) => array.flat(2);
let arr2 = [
  ["red", "blue"],
  ["green", "red", "yellow"],
  ["black", "blue"],
  ["pink", "black", "white"],
];
console.log(flatArray(arr2));

// Zadanie 10.

// Zadanie 11.

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.

// Zadanie 17

//Homework:
//zadania do domu do końca (7 pkt)
// opis tego co robimy i jak
// nowy branch homework-03-platek92
