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

// function typeOfCar(obj){                                    // funkcja sprawdza rodzaj auta

//     if(obj.toUpperCase().includes("BMW") || obj.toUpperCase().includes("FORD")){ // weryfikujemy czy marki pojazdów są 'fajne'
//         return "which is fun car"
//     }
//     return "which is boring car";
// }
// function userInfo(obj) {                                    // funkcja podająca dane użytkownika w wersij tekstowej
//     let userDesctiption = [];
//         obj.map(element => userDesctiption.push([           //przechodzimy przez kolejne indeksy w bazie wprowadzając dane do wersji tekstowej  
//                                                             //jednocześnie wywołujemy funkcje do sprawdzenia auta. na koniec powstały string wporwadzamy do naszej tablicy osobno dla każdego użytkownika
//             `The user's ${element.name} is name and the user is ${element.age} years old. The user works as ${element.job} and drives ${element.car} ${typeOfCar(element.car)}`]))
//     return userDesctiption;
// }


// console.log(userInfo(people))

// Zadanie 12.

// function olderPersons(obj){                    //funkcja wyświetlająca założony tekst na podstawie danych
//     let overForty = [];
//     for(let elem of obj){                      // weryfikacja wieku uzytkowników
//         if(elem.age >= 40){
//             overForty.push(elem)
//         }
//     }
//     let textOutput = [];
//     for(let i = 0; i < overForty.length; i++){ // pętla wprowadzająca dane użytkownika do treści
//         if( i === 0){                          // wprowadzamy osobną treść dla pierwszego użytwkonika
//             textOutput.push(`The user is ${overForty[i].name} and he is ${overForty[i].age} years old`)
//         }
//         else{                                  //wszyscy kolejni użytkoniwcy jeśli jest ich nawet więcej niż dwóch, otrzymują ten sam tekst
//             textOutput.push(`Next user is ${overForty[i].name} and he is ${overForty[i].age} years old`)
//         }
//     };
//     let sumAge = 0;
//     for (let elem of overForty){               // pętla sumująca wiek
//         sumAge = sumAge + elem.age
//     }
//     textOutput.push(`Together they have ${sumAge} years`)
//     return textOutput;
// }

// console.log(olderPersons(people))

// Zadanie 13.

// function sortingByAge(obj){                          //tworzymy funckje sortującą wiek użytkowników
//     let sorted = obj.sort((a, b) => a.age - b.age);  // korzystamy z metody sort() do posortowania użytkowników
//     return sorted;
// }

// console.log(sortingByAge(people))

// Zadanie 14.

// function dayOfTheWeekYouWereBorn(str) {               // funkcja podająca dzień tygodnia z wprowadzonej daty
//     let fullDate = new Date(str);                     // korzystamy z obiektu Date, który pzoowli nam zamienić wprowadzony string na format daty
//     let day = fullDate.getDay();                      // korzystamy z metody getDay() która zwróci "index" dnia tygodnia
//     let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]   // tworzymy tabele z nazwami dni tygodnia

//     return `You were born on ${dayNames[day]} `;      // wprowadzamy konkretny dzień w tekst wybierając prawidłowy dzień tygodnia zgodnie z podanym indexem
// }

// console.log(dayOfTheWeekYouWereBorn("2000-11-20"))

// Zadanie 15.

// function countWordOccurrences(str) {                // funkcja licząca występowanie słów
//     let countedWords = {};  
//     let splitedStr = str.split(" ");                // dzielimy podany string na pojedyńcze słowa
//     for(let i = 0; i <splitedStr.length; i++){      // przechodzimy przez wszystkie słowa z tablicy
//         let word = splitedStr[i].replace(".", "")   // tworzymy zmienną przechowująca sprawdzane słowo, jednocześnie kasujemy ewentualny znak interpunkcyjny
//         if(countedWords[word]){                     // sprawdzamy czy w naszym obiekcie występuje już sprawdzane słowo
//             countedWords[word]++;                   // jeśli tak to zwiększamy jego wartość
//         }
//         else{   // jeśli słowo pojawia się pierwszy raz to nadajmy początkową wartość równą jeden
//             countedWords[word] = 1;
//         };
//     };
//     return countedWords;
// }


// console.log(countWordOccurrences(
// 	"JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript"
// ))

// Zadanie 16.

// function toCamelCase(str) {
//     let stringWithoutSigns;
//     if(str.includes("_")){                //pozbywamy sie "_" globalnie z tablicy
//         stringWithoutSigns = str.replace(/_/g, " ");
//     }
//     else if(str.includes("-")){           //pozbywamy sie "-"  globalnie z tablicy
//         stringWithoutSigns = str.replace(/-/g, " ")
//     }
//     else{
//         stringWithoutSigns = str;         // dodajemy ten warunek jeśli zostanie podany string bez znaków -/_
//     }

//     stringWithoutSigns = stringWithoutSigns.split(" ");  // dzielimy nasz string na osobne słowa
//     let camelCaseString = "";
//     for(let i = 0; i < stringWithoutSigns.length; i++){  // wprowadzamy kolejne słowa do pętli która ma cale zmiane wielkości pierwszy liter w każdym słowie
//         let word = stringWithoutSigns[i].split("")
//         if(i === 0){                                    // pierwsza litera w pierwszym słowie zostaje pomniejszona
//             for(let i = 0; i < word.length; i++ ){  
//                 word[0] = word[0].toLowerCase()
//             }
//         }
//         else{                                          // pierwsza litera w każdym kolejnym słowie zostaje powiększona
//             for(let i = 0; i < word.length; i++ ){  
//                 word[0] = word[0].toUpperCase()
//             }

//         }
//         camelCaseString += word.join("");              // dodajemy kolejne słowa do naszej zmiennej
//     }

//     return camelCaseString;

// }

// console.log(toCamelCase("java_script")); 
// console.log(toCamelCase("java-script")); 
// console.log(toCamelCase("Java-Script")); 
// console.log(toCamelCase("asp_Net_Core"));

// Zadanie 17.

// function getStudentTopGrades(arr) {
//     let topGrades = [];             
//     for (let elem of arr) {                             // sprawdzamy najwyższą ocenę w tablicy
//         if(elem.grades.length === 0){                   // jeśli tablica jest pusta wstawiamy najwyższą ocenę 0
//             topGrades.push(0)
//         }
//         else{
//             topGrades.push(Math.max(...elem.grades))    // wybieramy najwyższą ocenę z tablicy
//         }
        
//     }
//     return topGrades;

// }

// console.log(getStudentTopGrades([
//     {
//         id: 1,
//         name: "Jacek",
//         grades: [5, 3, 4, 2, 5, 5],
//     },
//     {
//         id: 2,
//         name: "Ewa",
//         grades: [2, 3, 3, 3, 2, 5],
//     },
//     {
//         id: 3,
//         name: "Zygmunt",
//         grades: [2, 2, 4, 4, 3, 3],
//     },
// ]))
