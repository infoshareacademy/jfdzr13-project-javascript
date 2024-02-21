import people from "./data.js";

// 1. Napisz funkcję, która przyjmie jako argument tablicę people
// i zwróci ciąg znaków w konwencji:
// const fnWomenMenAge = (array) => {
//   const womenArray = array.filter((el) => el.gender === "woman");
//   const womenCount = womenArray.length;
//   const womenNames = womenArray.map((el) => el.name);
//   const womenAges = womenArray.reduce(
//     (accumulator, currentValue) => accumulator + currentValue.age,
//     0
//   );
//   let womenString = "";
//   womenNames.forEach((element, index) => {
//     if (index < womenNames.length - 2) {
//       womenString += element + ", ";
//     } else if (index < womenNames.length - 1) {
//       womenString += element;
//     } else {
//       womenString += " and " + element;
//     }
//   });
//   return `There are ${womenCount} women in provided data source, their names are ${womenString}
//     and in total they have ${womenAges} years.`;
// };
// console.log(fnWomenMenAge(people));

/*
    There are A women in provided data source, their names are B, C, D and E
    and in total they have F years. There are G men in the data source,
    their names are H, I, J and K and in total they have L years.
*/
// gdzie A, F, G i L to liczby, a pozostałe zmienne to ciągi znaków

// 2. Napisz funkcję, która przyjmie jako argument tablicę people oraz indeks
// elementu tablicy i zwróci tablicę w konwencji
// ["Alice", "woman", 27, "New York", 168, "Software Engineer", "Toyota Corolla"]
// decydując o tym, który zestaw danych zwrócić na podstawie otrzymanego indeksu

const peopleFunction = function (arr, id) {
  let person = arr[id];
  let result = Object.values(person);
  return result;
};

console.log(peopleFunction(people, 2));

// 3. Napisz funkcję, która przyjmie jako argument wartość zwracaną przez funkcję
// z zadania 2. i wydrukuje w konsoli ciąg znaków w następującej konwencji:
// "Bob, a 35 years old man, lives in San Francisco. He is 172 cm tall. Currently
// he works as Marketing Manager and he drives Honda Civic"

const peopleString = function (arr) {
  let gender = "she";
  if (arr[1] == "man") {
    gender = "he";
  }
  console.log(arr);
  let str = `${arr[0]}, a ${arr[2]} years old ${arr[1]}, lives in ${arr[3]}. ${gender} is ${arr[4]} cm tall. Currently
  ${gender} works as ${arr[5]} and ${gender} drives ${arr[6]}`;
  return str;
};
console.log(peopleString(peopleFunction(people, 2)));
