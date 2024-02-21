import people from "./data.js";

// Zadanie 1.
// napisać funkcję, która zwróci kopię tickTackToe z podmienionymi ** na x;

// const tickTackToe = [
//   ["x", "o", "x"], // 0
//   ["x", "x", "o"], // 1
//   ["**", "o", "x"], // 2
// ];

// for (let elements in tickTackToe) {
//   for (let ele in tickTackToe[elements]) {
//     if (tickTackToe[elements][ele] == "**") {
//       tickTackToe[elements][ele] = "x";
//       console.log("found", ele);
//     }
//   }
// }
// console.log(tickTackToe);

// Zadanie 2.
// Napisz funkcję, która zsumuje wszystkie liczby w tablicy.

// function sumNumbersInArray(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(sumNumbersInArray([2, 7, 4, 11, -1])); // 23
// console.log(sumNumbersInArray([0, 8, 3, 14, 1])); // 26
// console.log(sumNumbersInArray([2, -7, 140, 10, -1])); // 144

// Zadanie 3.
//Napisz funkcję, która posortuje liczby w tablicy rosnąco lub malejąco w zależności od zadanego parametru.

// function sortArr(c, arr) {
//   if (c == "asc") {
//     arr.sort((a, b) => a - b);
//   } else {
//     arr.sort((a, b) => b - a);
//   }

//   return arr;
// }

// console.log(sortArr("asc", [2, 7, 4, 11, -1]));
// console.log(sortArr("desc", [2, 7, 4, 11, -1]));
// console.log(sortArr("asc", [0, 8, 3, 14, 1]));
// console.log(sortArr("desc", [0, 8, 3, 14, 1]));
// console.log(sortArr("asc", [2, -7, 140, 10, -1]));
// console.log(sortArr("desc", [2, -7, 140, 10, -1]));

// Zadanie 4.
//Napisz funkcję, która zwróci największą liczbę z tablicy

// function biggestInArray(arr) {
//   let max = 0;
//   for (let ele of arr) {
//     if (max < ele) {
//       max = ele;
//     }
//   }
//   return max;
// }

// console.log(biggestInArray([2, 7, 4, 11, -1]));
// console.log(biggestInArray([0, 8, 3, 14, 1]));
// console.log(biggestInArray([2, -7, 140, 10, -1]));

// Zadanie 5.
//Napisz funkcję, która pobiera tablicę jako argument i zwraca tablicę z elementami posortowanymi w odwrotnej kolejności.

// function reverseArray(arr) {
//   return arr.reverse();
// }

// console.log(reverseArray([2, 7, 4, 11, -1]));
// console.log(reverseArray([0, 8, 3, 14, 1]));
// console.log(reverseArray([2, -7, 140, 10, -1]));

// Zadanie 6.
//Napisz funkcję, która sprawdzi czy elementy określonego wycinka tablicy (od indeksu 0 do wskazanego elementu tablicy) są `truthy` czy `falsy`.

// function areElemsTruthy(num, arr) {
//   const result = [];
//   for (let ele in arr) {
//     if (ele == num) {
//       break;
//     } else if (arr[ele]) {
//       result.push(true);
//     } else {
//       result.push(false);
//     }
//   }
//   return result;
// }

// console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

// Zadanie 7.
//Napisz funkcję `stringLength()`, która jako parametr przyjmie tablicę ciągów znaków i zwróci tablicę ich długości.

// function stringLength(arr) {
//   const results = [];
//   for (let element in arr) {
//     results[element] = arr[element].length;
//   }
//   return results;
// }

// function mapStringsArrToLengths(arr) {
//   return arr.map((num) => num.length);
// }

// console.log(stringLength(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];
// console.log(
//   mapStringsArrToLengths(["hello", "world", "dog", "sophizzzzsticated"])
// );

// Zadanie 8.
// -  wyświetl tylko elementy większe lub równe 20: `Elementy większe lub równe 20: 50, 20, 21, 100, 20, 44`
// -  wyświetl sumę tylko ujemnych elementów tablicy: `Suma elementów ujemnych: -134`
// -  wyświetl sumę elementów na indeksach parzystych: `Suma elementów parzystych: 193`

// function filter(arr) {
//   const biggerThan20 = arr.filter((num) => num >= 20);
//   console.log("Bigger or equal to 20", biggerThan20);
//   const negative = arr.filter((num) => num < 0);
//   let sumNegative = 0;
//   for (let ele of negative) {
//     sumNegative += ele;
//   }
//   console.log("Sum of negative ", sumNegative);

//   let sumIndexPositive = 0;

//   for (let i in arr) {
//     if (i % 2 == 0) {
//       sumIndexPositive += arr[i];
//     }
//   }
//   console.log("Sum of index positive ", sumIndexPositive);
// }

// const numbers = [
//   11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
//   -53, 17, -21,
// ];

// filter(numbers);
// Zadanie 9.
//Napisz funkcję flatArray() która przyjmuje tablicę tablic i zwraca je połączone w jedną.

// function flatArray(arr) {
//   return arr.flat();
// }

// console.log(
//   flatArray([
//     ["a", "b"],
//     [1, 2],
//   ])
// ); // ['a', 'b', 1, 2]
// console.log(
//   flatArray([
//     ["red", "blue"],
//     ["green", "red", "yellow"],
//     ["black", "blue"],
//     ["pink", "black", "white"],
//   ])
// );

// Zadanie 10.
// Napisz funkcję, która zwróci tablicę obiektów, spełniających kryterium: `age < 30`
// function ageBelowe30(people) {
//   const arr = [];
//   for (let person of people) {
//     if (person.age < 30) {
//       arr.push(person);
//     }
//   }
//   return arr;
// }

// console.log(ageBelowe30(people));

// Zadanie 11.
// Napisz funkcję, która wyświetli każdego z userów w konwencji:

// function aboutUser(arr) {
//   for (let person of arr) {
//     let str = "";
//     if (person.car.includes("BMW") || person.car.includes("Ford")) {
//       str = " which is fun car.";
//     } else {
//       str = " which is boring car";
//     }
//     console.log(
//       `The user's name is ${person.name} and the user is ${
//         person.age
//       } years old. The user works as ${person.job} and drives ${
//         person.car + str
//       }`
//     );
//   }
// }

// aboutUser(people);

// Zadanie 12.
// Napisz funkcję, która zwróci tylko osoby mające conajmniej 40 lat i będące mężczyznami w konwencji `The user is X and he is Y years old`, i na koniec wyświetl sumę ich lat.

// function onlyMenOver40(arr) {
//   let ageSum = 0;
//   let first = true;
//   for (let person of arr) {
//     if (person.age >= 40 && person.gender == "man") {
//       if (first) {
//         console.log(
//           `First user is ${person.name} and he is ${person.age} years old`
//         );
//         ageSum = ageSum + person.age;
//         first = false;
//       } else {
//         console.log(
//           `Next user is ${person.name} and he is ${person.age} years old`
//         );
//         ageSum = ageSum + person.age;
//       }
//     }
//   }
//   console.log(`Together they have ${ageSum} years`);
// }
// console.log(onlyMenOver40(people));

// Zadanie 13.
// Napisz funkcję, która zwróci nową tablicę z posortowanymi od najmłodszego do najstarszego użytkownikami.

// function sortByAge(arr) {
//   const sortedData = arr.sort((a, b) => a.age - b.age);
//   return sortedData;
// }

// console.log(sortByAge(people));

// Zadanie 14.

// const dayOfTheWeekYouWereBorn = (date) => {
//   const birthDate = new Date(date);
//   const day = birthDate.getDay();
//   const daysOfTheWeek = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const ans = "You were born on " + daysOfTheWeek[day];
//   return ans;
// };

// console.log(dayOfTheWeekYouWereBorn("1998-08-30"));

// Zadanie 15.
// Napisz funkcję countWordOccurrences, która przyjmie ciąg znaków i zwróci obiekt, który będzie reprezentował ilość wystąpień każdego słowa w przekazanym stringu.

// function countWordOccurrences(text) {
//   const fixText = text.toLowerCase().replace(".", "").replace(",", "");
//   const words = fixText.split(" ");
//   const wordCounter = {};

//   words.forEach((word) => {
//     if (word in wordCounter) {
//       wordCounter[word] = wordCounter[word] + 1;
//     } else {
//       wordCounter[word] = 1;
//     }
//   });

//   return wordCounter;
// }

// const wordCounts = countWordOccurrences(
//   "JavaScript byl dla mnie skomplikowany, a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript"
// );
// console.log(wordCounts);

// Zadanie 16.
// Zaimplementuj funkcję `toCamelCase` która przyjmie ciąg znaków, gdzie każde słowo będą oddzielone od kolejnego albo myślnikiem `(-)` albo znakiem podkreślenia `(_)`. Funkcja `toCamelCase` powinna konwertować otrzymany w parametrze ciag znaków i modyfikować go tak, aby był napisany camelCase.

//Dodatkowo zwracany ciąg znaków powinien być pisany wielkimi literami tylko wtedy, gdy oryginalne słowo było pisane wielkimi literami.

// function toCamelCase(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char == "-" || char == "_") {
//       result += str[i + 1].toUpperCase();
//       i++;
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }

// console.log(toCamelCase("Java_script")); // => javaScript
// console.log(toCamelCase("java-script")); // => javaScript
// console.log(toCamelCase("Java-Script")); // => JavaScript
// console.log(toCamelCase("asp_Net_Core")); // => aspNetCore

// Zadanie 17.
// Utwórz funkcję `getStudentTopGrades`, która pobiera tablicę obiektów, gdzie każdy obiekt reprezentuje ucznia i jego oceny. Funkcja powinna zwrócić tablicę ich najwyższych ocen - każdy element tablicy powinien reprezentować najwyższą uzyskaną ocenę cząstkową danego studenta. Jeśli uczeń nie ma ocen, to przyjmijmy, że jego najwyższa ocena jest równa 0.

// function getStudentTopGrades(students) {
//   let topGrade;
//   const topGradesArr = [];

//   students.forEach((student) => {
//     topGrade = 0;
//     student.grades.forEach((grade) => {
//       if (grade > topGrade) {
//         topGrade = grade;
//       }
//     });
//     topGradesArr.push(topGrade);
//   });

//   return topGradesArr;
// }

// const topGrades = getStudentTopGrades([
//   {
//     id: 1,
//     name: "Jacek",
//     grades: [5, 3, 4, 2, 5, 5],
//   },
//   {
//     id: 2,
//     name: "Ewa",
//     grades: [2, 3, 3, 3, 2, 5],
//   },
//   {
//     id: 3,
//     name: "Zygmunt",
//     grades: [2, 2, 4, 4, 3, 3],
//   },
//   {
//     id: 4,
//     name: "Ola",
//     grades: [],
//   },
// ]);

// console.log(topGrades); // => [5, 5, 4]
