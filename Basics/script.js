// Zadanie 1.
const userName = "Zygfryd";
const age = "77";
const city = "Seul";

const first_solution = "Our user's name is" + " " + userName + " " + "and the user is" + " " + age + " " + "years old. The user lives in" + " " + city;

const second_solution = `Our user's name is ${userName} and the user is ${age} years old. The user lives in ${city}`;

console.log(first_solution);
console.log(second_solution);

// Zadanie 2.

function sum(a,b) {
    return a + b;
}

function sum_1(a,b) {
    return [...arguments].reduce((prev, curr) => prev + curr,0);
}

const sum_2 = (a,b) => a+b;

const sum_3 = (...args) => [...args].reduce((prev, curr) => prev+curr, 0);

console.log(sum(1,2));
console.log(sum_1(1,2));
console.log(sum_2(1,2));
console.log(sum_3(1,2));

// Zadanie 3.

const firstSolution = "Username:" + " " + userName + " " + "have length:" + " " + userName.length
const secondSolution = `Username: ${userName} have length: ${userName.length}`;

console.log(firstSolution);
console.log(secondSolution);

// Zadanie 4.
const firstUser = "Zenon";
const secondUser = "Jakub";

if (firstUser == secondUser) {
    console.log("Oh! The names are the same!")
} else {
    console.log("Unfortunately the names are different :/")
}

console.log(`${firstUser === secondUser ? "Oh! The names are the same!" : "Unfortunately the names are different :/"}`)

// Zadanie 5.
const _age = 15;

// 1
if (age >= 18) {
    console.log("User is adult");
} else {
    console.log("User is underaged");
}

// 2
console.log(age >= 18 ? "User is adult" : "User is underaged");

// Zadanie 6.
function getBiggerNumber(a,b) {
    return a > b ? a : b;
}

const getBiggerNumber_1 = (a,b) => a > b ? a : b;

function getBiggerNumber_2(a,b) {
    return Math.max(...arguments);
}

const getBiggerNumber_3 = (...args) => Math.max(...args);

console.log(getBiggerNumber(1,2))
console.log(getBiggerNumber_1(1,2))
console.log(getBiggerNumber_2(1,2))
console.log(getBiggerNumber_3(1,2))

// Zadanie 7.
const itemsInCart = (num) => {
    const form = num === 1 ? "item" : "items";
    const statement = `You have ${num} ${form} in your cart`;
    return statement;
}

// Zadanie 8. 
// Można tę funkcję zrealizować przy pomocy prompt() umieszczając nasz kod w //
// <script>
// ...nasz kod
// </script>
// w HTML
// lub wywołując ją w konsoli przeglądarki.
// prompt() nie jest jednak obsługiwany w node.js, więc używamy modułu "readline", by wywołać sobie użyteczny kod przy pomocy node script.js w terminalu
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your age? ', (age) => {
    let preparedStatement = ''

    if (age > 125 || age < 0) {
        preparedStatement += "You provided incorrect age";
    } else if (age >= 35) {
        preparedStatement += "You could be a president";
    } else if (age >= 18) {
        preparedStatement += "At least you can have a beer"
    } else {
        preparedStatement += "You cannot be a president and can't even drink beer :("
    }

    console.log(preparedStatement);


  rl.close();
});


// Zadanie 9.
function shouldTakeUmbrella(isRaining, hasJacket, longTrip, isSummer) {
    // nie pada, nie szykujemy się do długiej podróży, ani pora roku to nie lato
    if (!isRaining && !longTrip && !isSummer) return false;
    // pada
    if (isRaining) {
        // ale mamy płaszcz
        if (hasJacket) return false;
        // ale nie mamy płaszcza
        return true;
    }
    // nie pada, ale szykujemy się do długiej podróży i jest lato
    return true;
}

// Zadanie 10.
const isEqual = (a,b) => a === b;
console.log(isEqual(1,2))
console.log(isEqual(12,2))
console.log(isEqual(2,2))
console.log(isEqual(-1,-1))

// Zadanie 11.

function canRideRollerCoaster(age, height) {
    const condition = age > 18 && height > 175;
    const textToReturn = condition ? "Can ride! " : "Sorry kiddo, no can do. ";

    // używamy console.log, by condition w terminalu nie zostało transformowane do postaci ciągu znaków (vide: return `${textToReturn} ${condition}`), ale aby zostało wyświetlone jako Boolean;
    console.log(`${textToReturn} `, condition);
}

canRideRollerCoaster(29, 179)
canRideRollerCoaster(9, 179)

function switchCanRideRollerCoaster(age, height) {
    const condition = age > 18 && height > 175;

    switch(condition) {
        case true:
            console.log("Can ride! ", condition);
            break;
        case false:
            console.log("Sorry kiddo, no can do. ", condition);
            break;
    }
}

switchCanRideRollerCoaster(29, 179)
switchCanRideRollerCoaster(9, 179)

// Zadanie 12.
function alphabeticalOrder(someString) {
    const tempArr = someString.split(""); // [c, a, y, f]
    const sortedArr = tempArr.sort(); // [a, c, f, y]
    const resultStr = sortedArr.join("") // acfy

    return resultStr;
}

const alphabeticalOrder_1 = (someStr) => someStr.split("").sort().join("");

console.log(alphabeticalOrder("javascript"))
console.log(alphabeticalOrder_1("javascript"))

// Zadanie 13.
const reverseStr = (str) => str.split("").reverse().join("");

function reverseString(str) {
    const tempArr = str.split("");
    let result = '';

    // wykonuj instrukcję po elementach tablicy tempArr w pętli
    // zaczynająć od ostatniego elementu tablicy, tj. tempArr.length - 1
    // a kończąc na pierwszym
    for (let i = tempArr.length - 1; i >= 0; i--) {
        // w każdej iteracji dodawaj litery do ciągu znaków result
        result += tempArr[i];
    }
    // powyższa pętla efektywnie przepisuje od tyłu ciąg znaków podany jako argument funkcji 

    return result;
}

console.log(reverseStr("javascript"))
console.log(reverseString("javascript"))

// Zadanie 14.
// const getInitials = (someName) => someName.split(" ").map((elemOfArr) => `${elemOfArr[0]}.`).join("");

function getInitials(someName) {
    const arrFromString = someName.split(" ");
    const arrOfInitials = arrFromString.map((elem) => `${elem[0]}.`);
    const resultString = arrOfInitials.join("");

    return resultString;
}


console.log(getInitials("Harry Potter"))
console.log(getInitials("Jan Trzeci Sobieski"))
console.log(getInitials("Imię Drugieimię Nazwisko Drugienazwisko"))

// Zadanie 15.

function slugify(someStr) {
    return someStr.toLowerCase().split(" ").join("-");
}

console.log(slugify("Top 10 my favourite songs")); // top-10-my-favourite-songs
console.log(slugify("Name of my blog article")); // name-of-my-blog-article

// Zadanie 16.
function makeUpperCase(someString) {
    // const tempArr = someString.split(" ")
    // const arrOfUppercasedWords = tempArr.map((elem) => `${elem[0].toUpperCase()}${elem.slice(1,)}`); // gdzie elem.slice(1, ) to po prostu wyraz przeczytany od drugiej litery do końca wyrazu (vide: pierwsza litera wyrazu ma indeks 0);
    // const resultArr = arrOfUppercasedWords.join(" ");

    // return resultArr
    return someString.split(" ").map((elem) => `${elem[0].toUpperCase()}${elem.slice(1,)}`).join(" ");
}

console.log(makeUpperCase("top 10 my favourite songs")); // Top 10 My Favourite Songs
console.log(makeUpperCase("Name of my Blog article")); // Name Of My Blog Article