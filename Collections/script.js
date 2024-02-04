import people from "./data.js";

// Zadanie 1.
const tickTackToe = [
	["x", "o", "x"], // 0
	["x", "x", "o"], // 1
	["**", "o", "x"], // 2
];

tickTackToe[2][0] = "x";

console.log(tickTackToe);

// napisać funkcję, która zwróci kopię tickTackToe z podmienionymi ** na x;

// Zadanie 2.
function simpleSum(arr) {
    let sum = 0; // temp var

    arr.forEach((elem) => sum+=elem); // on every iteration add to sum

    return sum;
}

function sumByReduce(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)
}

function sumWithLoop(arr) {
    let sum = 0; // temp var
    let i = 0; // initial index

    while(i < arr.length) {
        console.log("current sum: ", sum);
        sum += arr[i]
        i++;
    }

    return sum;
}


console.log(simpleSum([2, 7, 4, 11, -1])); // 23
console.log(sumByReduce([0, 8, 3, 14, 1])); // 26
console.log(sumWithLoop([2, -7, 140, 10, -1])); // 144

// Zadanie 3.
function sortArr(order = "desc", arr) {
    if (order === "asc") return arr.sort((a,b) => a - b);
    return arr.sort((a,b) => b - a);
}


console.log(sortArr("asc", [2, 7, 4, 11, -1]));
console.log(sortArr("desc", [2, 7, 4, 11, -1]));
console.log(sortArr("asc", [0, 8, 3, 14, 1]));
console.log(sortArr("desc", [0, 8, 3, 14, 1]));
console.log(sortArr("asc", [2, -7, 140, 10, -1]));
console.log(sortArr("desc", [2, -7, 140, 10, -1]));

// Zadanie 4.
function biggestInArray(arr) {
    return Math.max(...arr);
}

function getBiggest(arr) {
    return arr.sort((a,b) => b - a)[0];
}

function returnBiggest(arr) {
    return arr.sort((a,b) => a-b)[arr.length - 1]
}

console.log(biggestInArray([2, 7, 4, 11, -1]));
console.log(getBiggest([0, 8, 3, 14, 1]));
console.log(returnBiggest([2, -7, 140, 10, -1]));

// Zadanie 5.
function reverseArray(arr) {
    return arr.reverse();
}

function returnReversedCopy(arr){
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

function returnReversed(arr) {
    let newArr = [];

    arr.forEach((elem) => newArr.unshift(elem));

    return newArr;
}

console.log(reverseArray([2, 7, 4, 11, -1]));
console.log(returnReversedCopy([0, 8, 3, 14, 1]));
console.log(returnReversed([2, -7, 140, 10, -1]));

// Zadanie 6.
function areElemsTruthy(topIndex, arr) {
    let res = [];
    const portionOfArrayToConsider = arr.slice(0, topIndex); // [1, NaN, undefined, 0]

    portionOfArrayToConsider.forEach((elem) => res.push(Boolean(elem)));

    return res;
}

function boolifyArrPart(topBorder, arr) {
    const portionOfArrayToConsider = arr.slice(0, topBorder); // [1, NaN, undefined, 0]

    return portionOfArrayToConsider.map((elem) => !!elem); // Boolean(elem);
}

function returnBoolified(topIndex, arr) {
    let partialArr = [];

    arr.forEach((elem, i) => {
        if (i < topIndex) {
            partialArr.push(elem);
        }
    })

    return partialArr.map((elem) => !!elem);
}

console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]
console.log(boolifyArrPart(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]
console.log(returnBoolified(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

// Zadanie 7.
function stringLength(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length;
    }

    return arr;
}

function mapStringsArrToLengths(arr) {
    return arr.map((elem) => elem.length); // original -> modified copy
}


console.log(stringLength(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];
console.log(mapStringsArrToLengths(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];

// Zadanie 8.
const numbers = [
	11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
	-53, 17, -21,
];

function printBiggerOrEqual(arr, num) {
    let newArr = [];

    arr.forEach((elem) => {
        if (elem >= num) {
            newArr.push(elem);
        }
    })

    const elementsToDisplay = newArr.sort((a, b) => a - b).join();

    return `Elementy większe lub równe ${num}: ${elementsToDisplay}`
}

function sumOfNegatives(arr) {
    // let newArr = [];

    // arr.forEach((elem) => {
    //     if (elem < 0) {
    //         newArr.push(elem);
    //     }
    // })

    const newArr = arr.filter((elem) => elem < 0);

    const sum = newArr.reduce((acc, curr) => acc + curr ,0);

    return `Suma elementów ujemnych: ${sum}`;
}

function sumOfEvens(arr) {
    const sum = arr.reduce((acc, curr, i) => {
        if (i % 2 !== 0) return acc;
        return acc + curr;
    }, 0);

    return `Suma elementów parzystych: ${sum}`;
}

console.log(printBiggerOrEqual(numbers, 20));
console.log(sumOfNegatives(numbers));
console.log(sumOfEvens(numbers));

// Zadanie 9.
function flatArr(arr) {
    let newArr = []; // definiujemy pustą tablicę, do której zapiszemy nowe elementy spełniające kryteria określone ponizej
    
    arr.forEach((elem) => { // wykonujemy pętlę na elementach oryginalnej arrayki
        if (Array.isArray(elem)) { // jezeli element jest arrayką to argumenty tego elementu dodajemy do newArray pojedynczo
            newArr.push(...elem);
        } else { // jezeli elem nie jest arrayką, to dodajemy go do newArr takim jaki jest
            newArr.push(elem);
        }
    });

    return newArr;
}

console.log(
	flatArr([
		["a", "b"],
		[1, 2],
        2,
        {
            "tablica": [1,2,3],
            "obj": {
                "tablica": [1,23]
            }
        }
	])
);
console.log(
	flatArr([
		["red", "blue", "kolejny argument"],
		["green", "red", "yellow"],
		["black", "blue"],
		["pink", "black", "white"],
	])
);

// Zadanie 10.
function filterByAge(arr, limitAge) {
    return arr.filter((elem) => elem.age > limitAge);
}

console.log(filterByAge(people, 30));

// HOMEWORK: Wykonaj ponizsze zadania na przynajmniej 1 sposób.
// Kazdy z wykonanych sposobów wytłumaczyć przy pomocy komentarzy (przykład powyzej w zadaniu 9);
// Wstępny termin oddania pracy: 9.02 do północy
// W przypadku wypełnionych ankiet termin przedłuzamy do 11.01 do północy
// Sprawdzane będą wyłącznie prace domowe oddane w formie pull requesta
// Pull request mozna wykonać na repozytorium https://github.com/infoshareacademy/jfdzr13-project-javascript lub swoim repozytorium w organizacji infoShare

// Max punktów do zdobycia: 7


// Zadanie 11.

// Zadanie 12.

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.

// Zadanie 17.
