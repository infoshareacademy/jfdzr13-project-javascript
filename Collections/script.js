import peopleArray from "./data.js";

// Zadanie 1.

// const tickTackToe = [
//   ["x", "o", "x"],
//   ["x", "x", "o"],
//   ["**", "o", "x"],
// ];

// for (let i = 0; i < tickTackToe.length; i++) {
//   for (let j = 0; j < tickTackToe[i].length; j++) {
//     if (tickTackToe[i][j] === "**") {
//       tickTackToe[i][j] = "x";
//     }
//   }
// }

// const updatedTickTackToe = tickTackToe.map(function(row) {
//     return row.map(function(cell) {
//         return cell === '**' ? 'x' : cell;
//     });
// });

// console.log(tickTackToe);

// Zadanie 2.

// function sumNumbersInArray(numbers) {
//     return numbers.reduce(function(sum, number) {
//         return sum + number;
//     }, 0);
// }
// strzałkami
// function sumNumbersInArray(numbers) {
//     return numbers.reduce((sum, number) => sum + number, 0);
// }

// console.log(sumNumbersInArray([2,7,4,11,-1]));
// console.log(sumNumbersInArray([2, -7, 140, 10, -1]));

// Zadanie 3.

// function sortArr(order, numbers) {
//     if (order === 'rosnąco') {
//         return numbers.slice().sort(function(a, b) {
//             return a - b;
//         });
//     } else {
//         return numbers.slice().sort(function(a, b) {
//             return b - a;
//         });
//     }
// }

// function sortArr(order, numbers) {
//     function compare(a, b) {
//         return order === 'rosnąco' ? a - b : b - a;
//     }

//     return numbers.slice().sort(compare);
// }

// console.log(sortArr("rosnąco", [2, 7, 4, 11, -1]));
// console.log(sortArr("malejąco", [2, 7, 4, 11, -1]));
// console.log(sortArr("rosnąco", [0, 8, 3, 14, 1]));
// console.log(sortArr("malejąco", [0, 8, 3, 14, 1]));
// console.log(sortArr("rocnąco", [2, -7, 140, 10, -1]));
// console.log(sortArr("malejąco", [2, -7, 140, 10, -1]));

// Zadanie 4.

// function biggestInArray(numbers) {

//     if (numbers.length === 0) {
//         return undefined;
//     }
//     return numbers.reduce(function(max, current) {
//         return current > max ? current : max;
//     }, numbers[0]);
// }

// function biggestInArray(arr) {
//   return Math.max(...arr);
// }

// console.log(biggestInArray([0, 8, 3, 14, 1]));
// console.log(biggestInArray([2, -7, 140, 10, -1]));

// Zadanie 5.
// function reverseArray(inputArray) {
//     return inputArray.slice().reverse();
// }

// console.log(reverseArray([2, 7, 4, 11, -1]));   // [-1, 11, 4, 7, 2]
// console.log(reverseArray([0, 8, 3, 14, 1]));     // [1, 14, 3, 8, 0]
// console.log(reverseArray([2, -7, 140, 10, -1]));  // [-1, 10, 140, -7, 2]

// Zadanie 6.

// function areElemsTruthy(endIndex, array) {

//     if (endIndex < 0 || endIndex >= array.length) {
//         console.error("Invalid endIndex. It should be within the range of the array.");
//         return [];
//     }

//     const results = array.slice(0, endIndex + 1).map(element => Boolean(element));

//     return results;
// }

// console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

// function areElemsTruthy(endIndex, array) {
//   if (endIndex < 0 || endIndex >= array.length) {
//     console.error(
//       "Invalid endIndex. It should be within the range of the array."
//     );
//     return [];
//   }

//   const results = array
//     .slice(0, endIndex + 1)
//     .map((element) => Boolean(element));

//   return results;
// }

// const inputArray = [true, "Hello", 0, null, undefined, "World"];

// // Sprawdź, czy elementy do indeksu 3 są truthy czy falsy
// const result = areElemsTruthy(5, inputArray);

// console.log(result);
// // Oczekiwany wynik: [true, true, false, false, false, true]

// // Zadanie 7.

// function stringLength(stringsArray) {
//   return stringsArray.map((str) => str.length);
// }

// // Przykład użycia funkcji:
// const inputArray = ["apple", "banana", "orange", "kiwi"];
// const lengthsArray = stringLength(inputArray);

// console.log(lengthsArray);
// // Oczekiwany wynik: [5, 6, 6, 4]

// // Zadanie 8.

// const numbers = [
//   11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
//   -53, 17, -21,
// ];

// // Elementy większe lub równe 20
// const greaterThanOrEqual20 = numbers.filter((num) => num >= 20);
// console.log(
//   `Elementy większe lub równe 20: ${greaterThanOrEqual20.join(", ")}`
// );

// // Suma elementów ujemnych
// const sumOfNegativeNumbers = numbers
//   .filter((num) => num < 0)
//   .reduce((sum, num) => sum + num, 0);
// console.log(`Suma elementów ujemnych: ${sumOfNegativeNumbers}`);

// // Suma elementów na indeksach parzystych
// const sumOfEvenIndexedNumbers = numbers
//   .filter((num, index) => index % 2 === 0)
//   .reduce((sum, num) => sum + num, 0);
// console.log(`Suma elementów parzystych: ${sumOfEvenIndexedNumbers}`);

// Zadanie 9.
//przykład Bartka
// function flatArr(arr) {
//   let newArr = []; // definiujemy pustą tablicę, do której zapiszemy nowe elementy spełniające kryteria określone ponizej

//   arr.forEach((elem) => { // wykonujemy pętlę na elementach oryginalnej arrayki
//       if (Array.isArray(elem)) { // jezeli element jest arrayką to argumenty tego elementu dodajemy do newArray pojedynczo
//           newArr.push(...elem);
//       } else { // jezeli elem nie jest arrayką, to dodajemy go do newArr takim jaki jest
//           newArr.push(elem);
//       }
//   });

//   return newArr;
// }

// console.log(
// flatArr([
//   ["a", "b"],
//   [1, 2],
//       2,
//       {
//           "tablica": [1,2,3],
//           "obj": {
//               "tablica": [1,23]
//           }
//       }
// ])
// );
// console.log(
// flatArr([
//   ["red", "blue", "kolejny argument"],
//   ["green", "red", "yellow"],
//   ["black", "blue"],
//   ["pink", "black", "white"],
// ])
// );

// Zadanie 10.

// Funkcja, która zwróci tablicę obiektów spełniających warunek age < 30
function filterPeopleByAgeBelow30(peopleArray) {
  // Wykorzystujemy funkcję filter do odfiltrowania osób poniżej 30 roku życia
  const result = peopleArray.filter((person) => person.age < 30);
  return result;
}
//filterPeopleByAgeBelow30: Jest to nazwa funkcji, która przyjmuje tablicę obiektów jako argument (peopleArray).
//peopleArray.filter(...): Wykorzystuje funkcję filter, aby odfiltrować tylko te osoby, które spełniają warunek age < 30.

// Wywołanie funkcji i wyświetlenie wyniku w konsoli
const filteredPeople = filterPeopleByAgeBelow30(peopleArray);
console.log(filteredPeople);

// Zadanie 11.

// Funkcja sprawdzająca, czy samochód jest "fun"
function isFunCar(car) {
  // Załóżmy, że samochody marki "Volkswagen Beetle" są uznawane za "fun", bo są :)
  const funCars = ["volkswagen beetle"];
  return funCars.includes(car.toLowerCase());
}

// Funkcja, która wyświetla informacje o użytkownikach
function displayUserInfo(peopleArray) {
  // Przechodzimy i sprawdzamy każdego użytkownika w tablicy
  peopleArray.forEach(function (person) {
    // Tworzymy podstawową wiadomość
    let message =
      "The users name is " +
      person.name +
      " and the user is " +
      person.age +
      " years old. The user works as " +
      person.job +
      " and drives " +
      person.car +
      ",";

    // Dodajemy dodatkową informację w zależności od tego czy jest fajny czy nudny samochód
    if (isFunCar(person.car)) {
      message += " which is a fun car.";
    } else {
      message += " which is a boring car.";
    }

    // Wyświetlamy wiadomości
    console.log(message);
  });
}
// Wywołujemy funkcję i wyświetlamy wynik w konsoli :)
displayUserInfo(peopleArray);

// Zadanie 12.

// Funkcja, która zwraca osoby mające co najmniej 40 lat i będące mężczyznami
function getOldMen(peopleArray) {
  // Filtrujemy osoby mające co najmniej 40 lat i będące mężczyznami
  const oldMen = peopleArray.filter(function (person) {
    return person.age >= 40 && person.gender === "man";
  });

  // Tworzymy wiadomość dla każdej osoby
  const messages = oldMen.map(function (person) {
    return (
      "The user is " + person.name + " and he is " + person.age + " years old"
    );
  });

  // Sumujemy wiek wszystkich znalezionych osób
  const totalAge = oldMen.reduce(function (sum, person) {
    return sum + person.age;
  }, 0);

  // Dodajemy wiadomość o sumie wieku
  messages.push("Together they have " + totalAge + " years");

  // zwracamu wiadomości
  return messages;
}

const result = getOldMen(peopleArray);
result.forEach(function (message) {
  console.log(message);
});

// Zadanie 13.

// Funkcja, która zwraca nową tablicę z posortowanymi użytkownikami od najmłodszego do najstarszego
function sortUsersByAge(peopleArray) {
  // Używamy metody sort do posortowania użytkowników. Używamy slice przed sortowaniem, aby utworzyć kopię oryginalnej tablicy, aby nie modyfikować jej kolejności.
  const sortedUsers = peopleArray.slice().sort(function (a, b) {
    // Porównujemy wiek dwóch użytkowników
    return a.age - b.age;
  });

  // Zwracamy nową posortowaną tablicę
  return sortedUsers;
}

const sortedUsers = sortUsersByAge(peopleArray);
console.log(sortedUsers);

// Zadanie 14.

// Funkcja, która zwraca dzień tygodnia na podstawie daty urodzin
function dayOfTheWeekYouWereBorn(birthDate) {
  // Tworzymy obiekt Date na podstawie daty urodzin
  const dateOfBirth = new Date(birthDate);

  // Tablica z nazwami dni tygodnia
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Pobieramy dzień tygodnia z obiektu Date
  const dayOfWeekIndex = dateOfBirth.getDay();

  // Zwracamy komunikat z nazwą dnia tygodnia
  return `You were born on ${daysOfWeek[dayOfWeekIndex]}`;
}

const result2 = dayOfTheWeekYouWereBorn("1992-06-08");
const result3 = dayOfTheWeekYouWereBorn("2000-11-20");
console.log(result2);
console.log(result3);

// Zadanie 15.

// Funkcja, która zlicza wystąpienia każdego słowa w przekazanym ciągu znaków
function countWordOccurrences(inputString) {
  // Tworzymy obiekt do zapisywania ilości wystąpień słów
  const wordCount = {};

  // funkcja dzieli ciąg znaków na słowa i przekształca je na małe litery
  const words = inputString.toLowerCase().match(/\b\w+\b/g);

  // tu dunkcja liczy wystąpienia każdego słowa w zdaniu w obiekcie wordCount
  words.forEach((word) => {
    if (word in wordCount) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  });

  // Zwracamy obiekt z ilościami wystąpień słów w poszczególnym zdaniu
  return wordCount;
}

const result4 = countWordOccurrences(
  "JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript"
);
console.log(result4);
const result5 = countWordOccurrences(
  "JavaScript jest dla mnie nadal skomplikowany ale przekonuje sie do funkcji strzalkowej. Viva Javascript ViVa strzalkowej"
);
console.log(result5);

// Zadanie 16.

// Funkcja, która konwertuje ciąg znaków na camelCase
function toCamelCase(inputString) {
  // Używamy split aby podzielić ciąg znaków na słowa przy użyciu myślnika (-) lub znaku podkreślenia (_)
  const words = inputString.split(/[-_]/);

  // Każde słowo jest modyfikowane. Pierwsza litera każdego słowa jest zamieniana na małą literę, a pozostałe litery pozostawiane są bez zmian.
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase();
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  });

  // Zmodyfikowane słowa są następnie łączone w jedno słowo camelCase przy użyciu metody join
  const camelCaseString = camelCaseWords.join("");

  // Zwracamy ostateczny ciąg znaków
  return camelCaseString;
}

console.log(toCamelCase("java_script"));
console.log(toCamelCase("java-script"));
console.log(toCamelCase("Java-Script"));
console.log(toCamelCase("asp_Net_Core"));

// Zadanie 17.

// Funkcja, która zwraca tablicę najwyższych ocen uczniów
function getStudentTopGrades(studentsArray) {
  // Mapujemy tablicę uczniów na tablicę ich najwyższych ocen
  const topGrades = studentsArray.map((student) => {
    // Sprawdzamy, czy uczeń ma oceny
    if (student.grades && student.grades.length > 0) {
      // Sortujemy oceny malejąco i zwracamy najwyższą
      return Math.max(...student.grades);
    } else {
      // Jeśli uczeń nie ma ocen, przyjmujemy najwyższą ocenę jako 0
      return 0;
    }
  });

  // Zwracamy tablicę najwyższych ocen
  return topGrades;
}

// Przykładowa tablica z randomowymi studentami
const randomStudentsArray = [
  { id: 4, name: "Anna", grades: [4, 3, 5, 4, 2, 4] },
  { id: 5, name: "Piotr", grades: [3, 3, 2, 4, 5, 4] },
  { id: 6, name: "Kazimiera", grades: [5, 5, 5, 5, 4, 5] },
  { id: 7, name: "Janusz", grades: [2, 3, 2, 3, 3, 4] },
  { id: 8, name: "Marta", grades: [] },
];

// Wywołanie funkcji i wyświetlenie wyniku w konsoli
const result6 = getStudentTopGrades(randomStudentsArray);
console.log(result6);
