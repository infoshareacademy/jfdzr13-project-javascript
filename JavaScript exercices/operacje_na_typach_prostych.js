// 1. Napisz funkcję, która przyjmie 2 parametry - imię i nazwisko i zwróci ciąg znaków, którym będzie połączenie obu, skorzystać z konkatenacji stringów. Tak zwrócony ciąg przypisz do stałej i wyświetl w konsoli długość ciągu znaków

// let str1 = "Asia";
// let str2 = "Taratuta";
// function names(imie, nazwisko) {
//   return str1 + " " + str2;
// }
// let str3 = names(str1, str2);
// console.log(str3.length);

// 2. Napisz funkcję, która przyjmie 2 parametry - imię i nazwisko i zwróci ciąg znaków, którym będzie połączenie obu, skorzystać z interpolacji stringów. Tak zwrócony ciąg przypisz do stałej i wyświetl w konsoli długość ciągu znaków

// function names(name, surname) {
//   return `${name} ${surname}`;
// }
// let fullName = names("Asia", "Taratuta");
// console.log(fullName.length);

// 3. Napisz funkcję nieczystą wraz ze słownym opisem dlaczego jest ona nieczysta
// var numb = 5;
// function notPure(a) {
//   let z = a * Math.random();
//   numb = numb / z;
//   return z;
// }
// console.log(notPure(2));
// console.log(numb);
// a. Dla tych samych argumentów zawsze zwróci ten sam wynik (jest deterministyczna)
// b. Brak efektów ubocznych - nie ma wpływu na otaczający świat
// PURE FUNCTION

// 4. Napisz funkcję, która przyjmuje 3 liczby - skorzystać z każdego sposobu definiowania funkcji. Niech funkcja zwraca sumę - wyświetl ją następnie w console
// a Function declaration (deklaracja funkcji)
// function sum1(a, b, c) {
//   return a + b + c;
// }
// console.log(sum1(1, 2, 3));
// b. named function expression (nazwane wyrażenie funkcyjne)

// const sum2 = function sum1(a, b, c) {
//   return a + b + c;
// };
// console.log(sum2(1, 2, 3));
// c. anonymous function expression (anonimowe wyrażenie funkcyjne)
// const sum3 = function (a, b, c) {
//   return a + b + c;
// };
// console.log(sum3(1, 2, 3));
// d. arrow function expression (anonimowe wyrażenie funkcyjne)

// const sum4 = (a, b, c) => {
//   return a + b + c;
// };
// console.log(sum4(1, 2, 3));

// 5. a Przygotuj opis osoby (dane z głowy), na każdą z podanych informacji stwórz zmienną/stałą w zależnosci od przechowywanej informacji:
// imię
// nazwisko
// PESEL
// wiek

// let imie = "Asia";
// let nazwisko = "Taratuta";
// let PESEL = 1234;
// let wiek = 25;

// 5. b Przygotuj funkcję "greeting" (function declaration), która przyjmie te 4 informacje jako argumenty i zwróci informację:
// "Mam na imię Jacek Jakiśtam, mam 1000 lat a mój pesel to 123123123123123"

// const greeting = (a, b, c, d) => {
//   let str =
//     "Mam na imie " +
//     a +
//     " " +
//     b +
//     ". Mam " +
//     c +
//     " lat a moj pesel to " +
//     d +
//     ".";
//   return str;
// };
// console.log(greeting(imie, nazwisko, wiek, PESEL));
