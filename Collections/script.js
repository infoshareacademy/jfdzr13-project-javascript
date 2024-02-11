import people from "./data.js"

// // Zadanie 1.
// const tickTackToe = [
// 	["x", "o", "x"], // 0
// 	["x", "x", "o"], // 1
// 	["**", "o", "x"], // 2
// ];

// tickTackToe[2][0] = "x";

// console.log(tickTackToe);

// // napisać funkcję, która zwróci kopię tickTackToe z podmienionymi ** na x;

// // Zadanie 2.
// function simpleSum(arr) {
//     let sum = 0; // temp var

//     arr.forEach((elem) => sum+=elem); // on every iteration add to sum

//     return sum;
// }

// function sumByReduce(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0)
// }

// function sumWithLoop(arr) {
//     let sum = 0; // temp var
//     let i = 0; // initial index

//     while(i < arr.length) {
//         console.log("current sum: ", sum);
//         sum += arr[i]
//         i++;
//     }

//     return sum;
// }


// console.log(simpleSum([2, 7, 4, 11, -1])); // 23
// console.log(sumByReduce([0, 8, 3, 14, 1])); // 26
// console.log(sumWithLoop([2, -7, 140, 10, -1])); // 144

// // Zadanie 3.
// function sortArr(order = "desc", arr) {
//     if (order === "asc") return arr.sort((a,b) => a - b);
//     return arr.sort((a,b) => b - a);
// }


// console.log(sortArr("asc", [2, 7, 4, 11, -1]));
// console.log(sortArr("desc", [2, 7, 4, 11, -1]));
// console.log(sortArr("asc", [0, 8, 3, 14, 1]));
// console.log(sortArr("desc", [0, 8, 3, 14, 1]));
// console.log(sortArr("asc", [2, -7, 140, 10, -1]));
// console.log(sortArr("desc", [2, -7, 140, 10, -1]));

// // Zadanie 4.
// function biggestInArray(arr) {
//     return Math.max(...arr);
// }

// function getBiggest(arr) {
//     return arr.sort((a,b) => b - a)[0];
// }

// function returnBiggest(arr) {
//     return arr.sort((a,b) => a-b)[arr.length - 1]
// }

// console.log(biggestInArray([2, 7, 4, 11, -1]));
// console.log(getBiggest([0, 8, 3, 14, 1]));
// console.log(returnBiggest([2, -7, 140, 10, -1]));

// // Zadanie 5.
// function reverseArray(arr) {
//     return arr.reverse();
// }

// function returnReversedCopy(arr){
//     let newArr = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }

//     return newArr;
// }

// function returnReversed(arr) {
//     let newArr = [];

//     arr.forEach((elem) => newArr.unshift(elem));

//     return newArr;
// }

// console.log(reverseArray([2, 7, 4, 11, -1]));
// console.log(returnReversedCopy([0, 8, 3, 14, 1]));
// console.log(returnReversed([2, -7, 140, 10, -1]));

// // Zadanie 6.
// function areElemsTruthy(topIndex, arr) {
//     let res = [];
//     const portionOfArrayToConsider = arr.slice(0, topIndex); // [1, NaN, undefined, 0]

//     portionOfArrayToConsider.forEach((elem) => res.push(Boolean(elem)));

//     return res;
// }

// function boolifyArrPart(topBorder, arr) {
//     const portionOfArrayToConsider = arr.slice(0, topBorder); // [1, NaN, undefined, 0]

//     return portionOfArrayToConsider.map((elem) => !!elem); // Boolean(elem);
// }

// function returnBoolified(topIndex, arr) {
//     let partialArr = [];

//     arr.forEach((elem, i) => {
//         if (i < topIndex) {
//             partialArr.push(elem);
//         }
//     })

//     return partialArr.map((elem) => !!elem);
// }

// console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]
// console.log(boolifyArrPart(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]
// console.log(returnBoolified(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

// // Zadanie 7.
// function stringLength(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].length;
//     }

//     return arr;
// }

// function mapStringsArrToLengths(arr) {
//     return arr.map((elem) => elem.length); // original -> modified copy
// }


// console.log(stringLength(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];
// console.log(mapStringsArrToLengths(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];

// // Zadanie 8.
// const numbers = [
// 	11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
// 	-53, 17, -21,
// ];

// function printBiggerOrEqual(arr, num) {
//     let newArr = [];

//     arr.forEach((elem) => {
//         if (elem >= num) {
//             newArr.push(elem);
//         }
//     })

//     const elementsToDisplay = newArr.sort((a, b) => a - b).join();

//     return `Elementy większe lub równe ${num}: ${elementsToDisplay}`
// }

// function sumOfNegatives(arr) {
//     // let newArr = [];

//     // arr.forEach((elem) => {
//     //     if (elem < 0) {
//     //         newArr.push(elem);
//     //     }
//     // })

//     const newArr = arr.filter((elem) => elem < 0);

//     const sum = newArr.reduce((acc, curr) => acc + curr ,0);

//     return `Suma elementów ujemnych: ${sum}`;
// }

// function sumOfEvens(arr) {
//     const sum = arr.reduce((acc, curr, i) => {
//         if (i % 2 !== 0) return acc;
//         return acc + curr;
//     }, 0);

//     return `Suma elementów parzystych: ${sum}`;
// }

// console.log(printBiggerOrEqual(numbers, 20));
// console.log(sumOfNegatives(numbers));
// console.log(sumOfEvens(numbers));

// // Zadanie 9.
// function flatArr(arr) {
//     let newArr = []; // definiujemy pustą tablicę, do której zapiszemy nowe elementy spełniające kryteria określone ponizej
    
//     arr.forEach((elem) => { // wykonujemy pętlę na elementach oryginalnej arrayki
//         if (Array.isArray(elem)) { // jezeli element jest arrayką to argumenty tego elementu dodajemy do newArray pojedynczo
//             newArr.push(...elem);
//         } else { // jezeli elem nie jest arrayką, to dodajemy go do newArr takim jaki jest
//             newArr.push(elem);
//         }
//     });

//     return newArr;
// }

// console.log(
// 	flatArr([
// 		["a", "b"],
// 		[1, 2],
//         2,
//         {
//             "tablica": [1,2,3],
//             "obj": {
//                 "tablica": [1,23]
//             }
//         }
// 	])
// );
// console.log(
// 	flatArr([
// 		["red", "blue", "kolejny argument"],
// 		["green", "red", "yellow"],
// 		["black", "blue"],
// 		["pink", "black", "white"],
// 	])
// );

// Zadanie 10.
// function filterByAge(arr, limitAge) {
//     return arr.filter((elem) => elem.age > limitAge);
// }

// console.log(filterByAge(people, 30));




// HOMEWORK: Wykonaj ponizsze zadania na przynajmniej 1 sposób.
// Kazdy z wykonanych sposobów wytłumaczyć przy pomocy komentarzy (przykład powyzej w zadaniu 9);
// Wstępny termin oddania pracy: 9.02 do północy
// W przypadku wypełnionych ankiet termin przedłuzamy do 11.01 do północy
// Sprawdzane będą wyłącznie prace domowe oddane w formie pull requesta
// Pull request mozna wykonać na repozytorium https://github.com/infoshareacademy/jfdzr13-project-javascript lub swoim repozytorium w organizacji infoShare

// Max punktów do zdobycia: 7

// Zadanie 10.


/*
function ageFilter(age, arr) {  // deklaruję funkcję z dwoma parametrami. Pierwszy przyjmować będzie wartość odpowiadającą za wiek, a drugi wskazuje tablicę na której będę wyszukiwał.
    return arr.filter(value => value.age > age) // za pomocą metody filter zwracam elementy tablicy arr, których wartość dla klucza "age" jest większa niż zadeklarowany w funkcji argument "age"
}

console.log(ageFilter(30, people)) // drukuję zwrócone w funkcji wyfiltrowane elementy tablicy people
*/

// Zadanie 11.


function aboutUsers(arr) {  // deklaruję funkcję, której jako parametr podaję tablicę danych

    arr.forEach(user =>  // za pomocą metody forEach iteruję elementy tablicy i dla każdego elementu drukuję treść "wstrzykując" w nią za pomocą interpolacji stringa wybrane wartości pobrane za pomocą odniesienia się do właściwości tego elementu (user.name, user.age itd)
        console.log(`The user's name is  ${user.name} and the user is ${user.age} years old. 
        The user works as ${user.job} and drives ${user.car}.`))
}

aboutUsers(people) // wywołuję funkcję dla tablicy people


console.log("-- druga część zadania 11 --") 


function aboutUsersMore(arr) { // deklaruję funkcję, której jako parametr podaję tablicę danych
arr.forEach(user =>  user.car.includes("BMW") || user.car.includes("Mustang") ? // tak jak w pierwszej części zadania stosuję metodę forEach jednak dodatkowo stosuję w pierwszej kolejności instrukcję warunkową ternary operator, której warunkiem jest obecność słów kluczowych BMW lub Mustang w wartości obiektu klucza car przeszukiwanej tablicy "arr".
            console.log(`The user's name is  ${user.name} and the user is ${user.age} years old.  
            The user works as ${user.job} and drives ${user.car} which is fun car.`) : console.log(`The user's name is  ${user.name} and the user is ${user.age} years old. 
            The user works as ${user.job} and drives ${user.car} which is boring car.`)) // jeśli warunek jest true to drukuję treść jak w pierwszej częsci zadania dodając na koniec fragment "which is fun car" a w przypadku false (czyli pojazdów nie będących BMW lub Mustangiem) dodaję fragment "which is boring car"
    }

aboutUsersMore(people) // wywołuję funkcję dla tablicy people


// -----> kolejne zadania zostawiłem zakomentowane każde osobno za pomocą /* */ aby nie wpływały na siebie 
            

// Zadanie 12.
/*

function adultMan(age, arr) { // deklaruj funkcję, której parametrami będą wiek oraz tablica danych
let newArr = arr.filter((user) => user.age >= age && user.gender === "man"); // deklaruję zmienną, której wartością będzie nowa tablica zawierająca osoby których wartość klucza age jest większa lub równa wartości podanej jako pierwszy argument funkci oraz warotość klucza gender równa 'man'    
console.log(`The user is ${newArr[0].name} and he is ${newArr[0].age} years old`); // uruchamiam pierwszą consolę z treścią rozpoczynającą się od 'The user is.. ' i wstawionymi za pomocą interpolacji stringa wartościam name oraz age pierwszego elementu tablicy newArr (index 0)
if ( newArr.length > 1 )  { // jesli tablica newArr zawiera więcej niż jeden element ( wyszukano więcej niż jednego użytkownia spełniającego warunek wieku i płci) to ..
for ( let i = 1 ; i < newArr.length; i++) { // iteruję tablicę zaczynając od drugiego elementu ( index 1) i ..
console.log(`Next user is ${newArr[i].name} and he is ${newArr[i].age} years old`) // drukuję w consoli treść rozpoczynającą się od 'Nex user is.. ' i wstawionymi za pomocą interpolacji stringa wartościam name oraz age aktualnie iterowanego elementu tablicy newArr (index = i)
} 
}
let sumAge = newArr.reduce((acc, curr) => acc + curr.age, 0); // deklaruję zmienną, której wartością będzie zwrócona suma wszystkich wartości klucza age tabeli newArr.
console.log(`Together they have ${sumAge} years`) // drukuję w consoli treść `Together they have...'  i  za pomocą interpolacji stringa dodaję wartość zmiennej sumAge jako suma wieku wszystkich userów.

}

adultMan(40, people) // wywołuję funkcję aby wydrukować zadane informację. 

*/
// // Zadanie 13.
/*


function youngToOld(arr) { // deklarują funkcję przyjmującą jako parametr tablicę danych.
    let newArr = arr.sort((a, b) => a.age - b.age ); // Deklaruję nową tablicę. Stosuję metodę sort() na tablicy podanej jako argument funkcji. Jako parametr metody/funkcji sort() podaję funkcję, która posortuje wskazane wartości elementów tablicy ( [age] ) w kolejności rosnącej.
    return newArr // zwracam nową tabilę
}
console.log(youngToOld(people))


*/
// // Zadanie 14.
/*


function dayOfTheWeekYouWereBorn(date) { // deklaruję funkcję, która jako parametr przyjmie datę urodzenia
    let myBirthDate = new Date(date); //  przypisuję do zmiennej "myBirthDate"  objekt Date() przyjmujący jako parametr argument funkcji dayOfTheWeekYouWereBorn 
    let getDay = myBirthDate.getDay(); // deklaruję nową zmienną pomocniczą, której wartość będzie stanowić dzień tygodnia otrzymany za pomocą użytej metody getDay() na wcześniej utworzonym objekcie myBirthDate.
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // ponieważ powyższe zwróci jedynie dzień togodnia w postaci numeru dnia tygodnia 1-7 tworzę zmienną pomocniczą aby nazwać dni tygodnia 
return `You were born on ${dayNames[getDay]}` // zwracam stringa i "wstrzykuję" do niego wartość pobraną z indexu  tabeli pomocniczej zawierającej nazwane dni tygodnia - dayNames. Numerem indexu jest wartość otrzymana z metody getDay() i przypisanej do zmiennej getDay
}
console.log(dayOfTheWeekYouWereBorn("1986-05-26")) // drukuję wywołanie funcji z argumentem zawierającym datę urodzenia.

*/
// // Zadanie 15.
/*


function countWordOccurrences(string) { // deklarują funkcję przyjmującą jako parametr  typ String
let arrWords = string.split(" "); // tworzę tablicę ze stringa, której elementami są pojedyncze wyrazy. Przypisuję ją do nowej zmiennej arrWords
arrWords = arrWords.map( element => element.toLowerCase()) // zmienijszam litery dla wszystkich elementów nowej tablicy 
arrWords = arrWords.map( element => element.replace(".", "")) // usówam z ciągów znaków elementów nowej tablicy znak kropki zamieniając go na pusty string. 
let objWords = {}; // deklaruję nowy pusty objekt
arrWords.forEach( (element) => {  // dla każdego elementu nowej  tablicy arrWords tworzę funkcję, która :
    let sum = arrWords.filter((word) => word === element); // filtruje z tej tablicy wszystkie wartości które są równe wartości elementu na którym obecnie występuje iteracja. Przypisuję te wartości do nowej zmiennej "sum" dzięki temu mam tablicę zawierającą tylko te elementy ( i tyle elementów), które aktualnie iteruję
    objWords[element] = sum.length; // przypisuję do nowego objektu objWords wartość, którą jest jako klucz objektu nazwa elementu iterowanego a jako wartość klucza długość aktualnej tablicy sum. 
   
})

return objWords // zwracam cały objekt 
}

console.log(countWordOccurrences("JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript"))


*/
// // Zadanie 16.
/*


function toCamelCase(string) {  // deklaruję funkcję przyjmującą jako parametr  typ String
    let arrWords = string.replaceAll("_", " ") // deklaruję zmienną, której wartością jest String użyty jako argument funkcji z usuniętym znakiem "_" ( zamieniony na pusty znak metodą replace)     
    arrWords = arrWords.replaceAll("-", " ") // jak wyżej tylko zamieniam dodatokwo znak "-" na w.w. zmiennej, która już jest pozbawiona znaków "_" ( pewnie da się to jakoś jedną metodą zrobić - zamienić dwa różne znaki na pusty string = ale ja nie wiem jak więc wykonuję w dwóch etapach)
    arrWords = arrWords.split(" ") // splituję wartość zmiennej i uzyskuje tablicę z poszczególnymi wyrazami jako elementy ( już bez znaków "-" oraz "_")
for ( let i = 1; i < arrWords.length; i++ ) {  // iteruję tablicę zaczynając od drugiego elementu czyli index 1. Pierwszy chcemy aby pozostawał bez zmian.
    arrWords[i] = arrWords[i].replace(arrWords[i][0], arrWords[i][0].toUpperCase() ) // zamieniam drugi a następnie każdy kolejny element tablicy w taki sposób, że dla każdego takiego elementu pobieram za pomocą metody replace  pierwszą wartość tego elementu ( index 0 elementu i) i zamieniam go na powiększony metodą toUpperCase.
 }
let camelCase = arrWords.join("")  // deklaruję nową zmienną do której przypisuję połączone elementy tablicy arrWords już z zamienionymi pierwszymi literami.
  return camelCase // zwracam zmienną i drukuję funkcję z przykładowymi stringami jako argument
}
console.log(toCamelCase("java_script")); // => javaScript
console.log(toCamelCase("java-script")); // => javaScript
console.log(toCamelCase("Java-Script")); // => JavaScript
console.log(toCamelCase("asp_Net_Core")); // => aspNetCore


*/
// // Zadanie 17.
/*


function getStudentTopGrades(arr) { // deklaruję funkcję przyjmującą jako parametr tablicę
let topGrades = arr.map(element => element.grades)  // deklaruję nową tablicę, której elementami będą wszystkie oceny każdego ucznia
let resultArr = topGrades.map(element => element.length === 0 ? element = 0 : element = Math.max(...element)) // deklaruję tablicę wynikową, do której przypisuję najwyższą wartość każdego elementu wyżej przypisanej tablicy topGrades, chyba że długość tego elementu jest równa 0 (czyli uczeń nie ma żadnej oceny) wówczas zwracam 0 z tego elementu. 
return resultArr // zwracam tablicę wynikową
}



console.log(getStudentTopGrades([ // drukuję funkcje z z przykładowym argumentem 
    {
      id: 1,
      name: "Jacek",
      grades: [5, 3, 4, 2, 5, 5],
    },
    {
      id: 2,
      name: "Ewa",
      grades: [2, 3, 3, 3, 2, 5],
    },
    {
      id: 3,
      name: "Zygmunt",
      grades: [2, 2, 4, 4, 3, 3],
    },
  ]))

  */
