// Zadanie 1.
const userName = "Michal";
let age = 31;
let city = "gda";

console.log(
  "Our users name is " +
    userName +
    " and the user is " +
    age +
    " years old. The user lives in " +
    city
);
// Zadanie 2.
function sum(a, b) {
  return a + b;
}
let ten = sum(5, 5);
let four = sum(2, 2);
let myAddedNumbers = sum(ten, four);
console.log(myAddedNumbers);
// Zadanie 3.

let x = userName;
let y = userName.length;
console.log("Username: " + x + " have length: " + y);

// Zadanie 4.
let firstUser = userName;
let secondUser = "Magda";

if (firstUser === secondUser) {
  console.log("Oh! The names are the same!");
} else {
  console.log("Unfortunately the names are different :/");
}
// Zadanie 5.
let age5 = 33;
if (age5 >= 18) {
  console.log("User is adult");
} else {
  console.log("User is underaged");
}

const result = age >= 18 ? "User is adult" : "User is underaged";
console.log(result);
// Zadanie 6.
function getBiggerNumber(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}
console.log(getBiggerNumber(4, 4));
// Zadanie 7.
function itemsInCart(a) {
  if (a == 1) {
    return a + " item ";
  } else {
    return a + " items ";
  }
}
console.log("You have " + itemsInCart(1) + "in your cart");
// Zadanie 8.
const userAge = prompt("Please enter your age:");
console.log(userAge);
// Zadanie 9.

// Zadanie 10.

// Zadanie 11.

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.
