import people from "./data.js";

// Zadanie 1.

// const tickTackToe = [
//   ["x", "o", "x"],
//   ["x", "x", "o"],
//   ["**", "o", "x"],
// ];

// let results = [];

// for (let i = 0; i < tickTackToe.length; i++) {
//   for (let x of tickTackToe[i]) {
//     if (x == "**") {
//       x = "x";
//     }
//     results.push(x);
//   }
// }

// console.log(results);

// // Zadanie 2.

// function sumNumbersInArray(array) {
//   let wynik = 0;

//   for (let i = 0; i < array.length; i++) {
//     wynik += array[i];
//   }
//   return wynik;
// }

// console.log(sumNumbersInArray([2, 7, 4, 11, -1])); // 23
// console.log(sumNumbersInArray([0, 8, 3, 14, 1])); // 26
// console.log(sumNumbersInArray([2, -7, 140, 10, -1])); // 144

// // Zadanie 3.

// function sortArr(type, arr) {
//   if (type == "asc") return arr.sort((a, b) => a - b);
//   return arr.sort((a, b) => b - a);
// }
// console.log(sortArr("asc", [2, 7, 4, 11, -1]));
// console.log(sortArr("desc", [2, 7, 4, 11, -1]));
// console.log(sortArr("asc", [0, 8, 3, 14, 1]));
// console.log(sortArr("desc", [0, 8, 3, 14, 1]));
// console.log(sortArr("asc", [2, -7, 140, 10, -1]));
// console.log(sortArr("desc", [2, -7, 140, 10, -1]));
// // Zadanie 4.

// function biggestInArray(array1) {
//   return Math.max(...array1);
// }
// console.log(biggestInArray([2, 7, 4, 11, -1]));
// console.log(biggestInArray([0, 8, 3, 14, 1]));
// console.log(biggestInArray([2, -7, 140, 10, -1]));
// // Zadanie 5.

// function reverseArray(array2) {
//   return array2.reverse();
// }

// console.log(reverseArray([2, 7, 4, 11, -1]));
// console.log(reverseArray([0, 8, 3, 14, 1]));
// console.log(reverseArray([2, -7, 140, 10, -1]));

// Zadanie 6.

function areElemsTruthy(index, array) {
  let result = [];
  for (let i = 0; i < index; i++) {}
}

// Zadanie 7.

function stringLength(array1) {
  let numbers = [];
  let number = 0;

  for (let i = 0; i < array1.length; i++) {
    array1[i].split("");
    number = array1[i].length;
    numbers.push(number);
  }

  return numbers;
}

console.log(stringLength(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];

// Zadanie 8.

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

let newNumbers = numbers.map((x) => x >= 20);

console.log(newNumbers);

// Zadanie 9.

function flatArray(array2) {
  return array2.flat();
}

console.log(
  flatArray([
    ["a", "b"],
    [1, 2],
  ])
);
console.log(
  flatArray([
    ["red", "blue"],
    ["green", "red", "yellow"],
    ["black", "blue"],
    ["pink", "black", "white"],
  ])
);

// Zadanie 10.

function ageOver(entry) {
  let newArray = [];
  for (let i = 0; i < entry.length; i++) {
    if (entry[i].age < 30) {
      newArray.push(entry[i]);
    }
  }

  return newArray;
}

console.log(ageOver(people));

// Zadanie 11.

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.

// Zadanie 17.
