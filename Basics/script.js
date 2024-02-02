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
const prompt = require("prompt-sync")({ sigint: true });
const userAge = prompt("Type in your age:");
 if (userAge<18) {
 console.log(`You cannot be a president and can't even drink beer :(`)
 }
 else if(userAge<35){
    console.log(`At least you can have a beer.`)
 }
 else if (userAge<125 $$ userAge<=0)
 {

 } else {

 }
// Zadanie 9.
function shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer) {
  switch (true) {
    case isRaining:
      return true;
    case !hasJacket && longTrip && !isSummer:
      return true;
    default:
      return false;
  }
}

let isRaining = false;
let hasJacket = false;
let longTrip = false;
let isSummer = false;

if (shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer)) {
  console.log("You should take an umbrella!");
} else {
  console.log("You do not need an umbrella.");
}

// Zadanie 10.
function isEqual(a, b) {
  switch (true) {
    case a === b:
      return true;
    default:
      return false;
  }
}
console.log(isEqual(200, 100));
// Zadanie 11.
function canRideRollerCoaster(age, height) {
  if (age >= 18 && height >= 175) {
    return console.log(true, "Can ride!");
  } else {
    return console.log(false, "Sorry kiddo, no can do.");
  }
}
canRideRollerCoaster(20, 185);

function canRideRollerCoasterSwitch(age, height) {
  switch (true) {
    case age >= 18 && height >= 175:
      return console.log(true, "Can ride!");
    default:
      return console.log(false, "Sorry kiddo, no can do.");
  }
}
canRideRollerCoasterSwitch(18, 185);

// Zadanie 12.
function alphabeticalOrder(word) {
  const splitting = word.split("");
  const sorting = splitting.sort();
  const joining = sorting.join("");
  return joining;
}
console.log(alphabeticalOrder("michal"));
// Zadanie 13.
function reverseText(word) {
  return word.split("").reverse().join("");
}
console.log(reverseText("michal"));

// Zadanie 14.
function getInitials(fullName) {
  const splitting = fullName.split(" ");
  return splitting.at(0).charAt(0) + "." + splitting.at(1).charAt(0) + ".";
}
console.log(getInitials("Hari Pota"));
// Zadanie 15.
function slugify(text) {
  return text.toLowerCase().split(" ").join("-");
}
console.log(slugify("Top 10 my favourite songs"));

// Zadanie 16.
function makeUpperCase(initialText) {
  const splittedText = initialText.split(" "); //rozbilo na 5 x string
  for (let i = 0; i < splittedText.length; i++) {
    const firstLetter = splittedText[i].charAt(0).toUpperCase(); //zwiekszamy pierwsza litere kazdego slowa i ona jest osobnym elementem firstLetter
    splittedText[i] = firstLetter + splittedText[i].substring(1); //laczymy kazdy element arraya naszego firstLetter + substring(1)
  }
  return splittedText.join(" ");
}
// const prompt = require("prompt-sync")({ sigint: true });
// const changedText = prompt("Type in or paste your sentence for task 16:");
// console.log(makeUpperCase(`${changedText}`));
