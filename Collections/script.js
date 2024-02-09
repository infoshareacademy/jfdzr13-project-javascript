// Zadanie 1.
const tickTackToe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["**", "o", "x"],
];
tickTackToe[2].splice(0, 1, "x"); //metoda splice usuwa i zastepuje wybrany element
// console.log(tickTackToe);

// Zadanie 2.
// 2.1
function sumNumbersInArray1(array) {
  let result = 0; // tworze rezultat, aby moc go uzyc w funkcji
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result; // for iteruje po wszystkich elementach tablicy i dodaje je jeden po drugim, na koniec zwraca rezultat
}
console.log(sumNumbersInArray1([2, -7, 140, 10, -1]));

// 2.2
const sumNumbersInArray2 = (array) => {
  //arrow funkcja, dla zmiennej (array) otwieramy nastepujace dzialania
  let result = 0;
  array.forEach((element) => {
    // uzywamy forEach i dla kazdej zmiennej (element) w array wykonujemy operacje: sumujemy jeden po drugim
    result = result + element;
  });
  return result; //zwracamy wynik
};
console.log(sumNumbersInArray2([0, 8, 3, 14, 1]));

// 2.3

const sumNumbersInArray3 = (
  array //arrow funkcja, dla zmiennej (array) otwieramy nastepujace dzialania
) => array.reduce((accumulator, currentValue) => accumulator + currentValue, 0); //uzywamy reduce dla podanego array, zgodnie z dokumentacja z MDNa, jakby za 0 dać inna liczbe poczatkowa, to wtedy o tyle zwiekszy sie wynik bo startujemy od tej liczby
console.log(sumNumbersInArray3([2, 7, 4, 11, -1]));

// Zadanie 3.
//nie wymyslilem innego sposobu :(
//tutaj zrobilem sam, jedyne co zgapilem to fakt zeby w sort() zawrzec od razu warunek sortowania liczb :D
const sortArr1 = (how = "asc", array) => {
  //funkcja przyjmuje 2 argumenty
  if (how === "desc") {
    //jezeli how=desc, to:
    const sortedArr = array.sort((a, b) => b - a);
    return sortedArr; //zwracamy posorotwana array sortem, po liczbach zgodnie z MDN
  } else {
    const sortedArr = array.sort((a, b) => a - b);
    return sortedArr; //analogicznie
  }
};
console.log(sortArr1("asc", [2, 7, 4, 11, -1]));

// Zadanie 4.
//4.1
function biggestInArray1(array) {
  const sortedArray = array.sort((a, b) => b - a); //najpierw sortujemy zgodnie z sortingiem z MDNa
  return sortedArray[0]; // a potem po prostu 1 rekord z posortowanej
}
console.log(biggestInArray1([2, 7, 4, 11, -1]));

//4.2
const biggestInArray2 = (array) => Math.max(...array); //tutaj znalazlem w necie Math.max i on dziala dla liczb, dla array tez ze spreadem :)
console.log(biggestInArray2([2, -7, 140, 10, -1]));

// Zadanie 5.
//5.1 zapis zwykly
function reverseArray1(array) {
  return array.reverse();
}
console.log(reverseArray1([2, 7, 4, 11, -1]));

//5.2 zapis arrow dla treningu
const reverseArray2 = (array) => array.reverse();
console.log(reverseArray2([0, 8, 3, 14, 1]));

// Zadanie 6.
//sprobowalem to napisac ponownie i sie udalo
function areElemsTruthy1(maxIndex, array) {
  let result = [];
  const tempArray = array.slice(0, maxIndex); //redukuje array o dany index poczatkowy
  tempArray.forEach((element) => result.push(Boolean(element))); //majac zredukowana array, kazdy Boolean(element) wrzucamy na koniec resultatu. Boolean(element) zwraca wartosc true/false w zaleznosci od typu
  return result;
}
console.log(areElemsTruthy1(4, [1, NaN, undefined, 0, true]));

// Zadanie 7.
//7.1
function stringLength1(array) {
  //funkcja przyjmuje tablice
  const lengths = []; //pusty array dlugosci
  for (let i = 0; i < array.length; i++) {
    lengths.push(array[i].length); //iterujemy po calej array i do pustej tablicy wrzucamy kazda wartosc dlugosci
  }
  return lengths; //zwracamy tablice
}
console.log(stringLength1(["hello", "world", "dog", "sophisticated"]));

//7.2
const stringLength2 = (array) => {
  const lengths = [];
  array.forEach((element) => lengths.push(element.length)); //dla danego array lecimy po kazdym elemencie forEach(), i od razu wewnatrz tworzymy zmienna element, ktora wrzuca do pustej tablicy na koniec dlugosci elementow
  return lengths;
};
console.log(stringLength2(["hello", "world", "dog", "sophisticated"]));

//7.3
// to jest najbardziej kozacie, map po prostu zamienia co chcemy wystarczy dobrze wybrac i mapuje wg naszego polecenia
const stringLength3 = (array) => array.map((element) => element.length); //dla array, array zamienia kazdy kolejny element w jego dlugosc
console.log(stringLength3(["hello", "world", "dog", "sophisticated"]));

// Zadanie 8.

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];
//8.1
const checkEqualOrHigher = (array) => array.filter((el) => el > 20); //wezmy array i lecimy po calosci, filtrujemy wszystie elementy mniejsze od 20
console.log(checkEqualOrHigher(numbers));
//8.2
const sumAllNegatives = (array) => {
  const tempArray = array.filter((el) => el < 0); //tak samo jak w 8.1, ale tworzymy array pomocniczy, najpierw usuwamy niepotrzebne
  return tempArray.reduce(
    //no i zerowymr reduce sciagamy sume
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
console.log(sumAllNegatives(numbers));

//8.3
const sumAllEven = (array) => {
  const tempArray = array.filter((el) => el % 2 === 0); //tak samo jak 8.2
  return tempArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};
console.log(sumAllEven(numbers));

// Zadanie 9.

const flatArray = (array) => array.flat(2); //po prostu flatem splaszczamy i tyle :)
let arr2 = [
  ["red", "blue"],
  ["green", "red", "yellow"],
  ["black", "blue"],
  ["pink", "black", "white"],
];
console.log(flatArray(arr2));

import people from "./data.js"; //importuje obiekt z innego pliku
// Zadanie 10.
const ageBelow30 = (array) => {
  //funkcja przyjmuje parametr array (w domysle bedzie to macierz people)
  const tempArray = array.filter((el) => el.age > 30); //dla kazdego elementu array, filtrujemy po wieku, zmienna el + precyzyjnie el.age)
  return tempArray; //zwracamy sobie nasze obliczenie czyli nowy obiekt array
};
console.log(ageBelow30(people));

// Zadanie 11.
const userCar = (
  array //ponownie iterujemy po calej array za pomocą mapa
) =>
  array.map(
    (
      el //zamiast kazdego elementy, wstawiamy stringa z odniesieniami do poszczegolnych elementow ${}
    ) =>
      `The user's name is ${el.name} and the user is ${el.age} years old. The user works as ${el.job} and drives ${el.car}`
  );
console.log(userCar(people));

const userCarModified = (
  array //tutaj początek jest identyczny i zdecydowalem sie na switcha
) =>
  array.map((el) => {
    //od tego miejsca mamy switcha, ktory sprawdza wartosc el.car i zwraca odpowiedni komentarz
    let comment = "";
    switch (
      el.car //konsturkcja switcha, generalnie zrobilem go sam ale gpt mi pomogl bo nie dalem commenta zerowego na poczatek ;/
    ) {
      case "Ford Mustang":
        comment = "fun car";
        break;
      case "BMW 3 Series":
        comment = "fun car";
        break;
      default:
        comment = "boring car";
        break;
    } //ponizej identyczny return tylko dodany ${comment}
    return `The user's name is ${el.name} and the user is ${el.age} years old. The user works as ${el.job} and drives ${el.car} which is a ${comment}`;
  });

console.log(userCarModified(people));
// Zadanie 12.

const menOlderThan40 = (array) => {
  const tempArray = array.filter((el) => el.age >= 40); //krok1 - redukowalem people do tylko co najmniej 40 lat przy pomocy filter
  const tempAge = tempArray.map((man) => [man.age]).flat(); //krok 2 - tworze pomocnicza array z samym wiekiem
  const tempName = tempArray.map((man) => [man.name]); //ktok 3 - tworze pomocniczy array z samymi imionami
  const sumAge = sumNumbersInArray1(tempAge); //krok 4 - tworze sume z wieków przy pomocy jednej z funkcji z poprzedniego zadania(bazujacej na reduce)
  return `The user is ${tempName[0]} and he is ${tempAge[0]} years old, Next user is ${tempName[0]} and he is ${tempAge[0]} years old, Together they have ${sumAge} years`; //tutaj jest po prostu string wynikowy ale Uwaga - przyjalem zalozenie, ze wiem ze nowa tablica ma 2 uzytkownikow - zgodnie z poleceniem. gdyby bylo ich wiecej, no to wtedy trzeba by iterowac po pomocnyczych array.length
};
console.log(menOlderThan40(people));

// Zadanie 13.
const compareAge = (a, b) => a.age - b.age; // tutaj tworze funkcje porownujaca ktorej potem uzyje do sortowania wieku, analogicznie do Zadania 4, ale dodaje .age zeby jasno okreslic co bede porowywac juz teraz
const sortingAge = (array) => array.sort(compareAge); //tworze funkcje wykorzystujac compareAge i sort, czyli sortuje moj obiekt wedle wieku
const newPeopleByAge = sortingAge(people); //zwracam nowa tablice zgodnie z poleceniem
console.log(newPeopleByAge);

// Zadanie 14.
//tutaj sie troche meczylem, wiedzialem jak ma byc skonstruowana sama funkcja, ale ten new Date() nie wychodzil i dopiero GPT podpowiedzial mi linie 229
const dayOfTheWeekYouWereBorn = (dateInput) => {
  //dateInput czyli data uzytkownika jako argument funkcji
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; //definiuje dni tygodnia bo .getDay zwraca numer, nie stringa. Od niedzieli, bo array liczymy od 0
  const date = new Date(dateInput); //zmienna daty, ktora pozwala mi potem uzyc getDay() jako number
  const result = days[date.getDay()]; //zmienna pomocnicza result aby mocyc grawisu, w jej skladzie wybieram element po date z tablicy days
  return `You were born on ${result}`; //string z polecenia do zadania
};
console.log(dayOfTheWeekYouWereBorn("2024-02-11"));

// Zadanie 15.
const text =
  "JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript";

const countWordOccurrences = (string) => {
  const words = string.replace(/[^\w\s]/g, "").split(/\s+/); // usuwam znaki i rozbijam, z generatora regexow
  const wordCounter = {}; //obiekt pomocniczy
  //tutaj zliczam ilosci slow, pomogl mi GPT.
  words.forEach((word) => {
    //dla kazdego slowa w arrayce iterujemy forEach
    if (wordCounter[word]) {
      //jezeli dane slowo wystepuje w arrayce, to funkcja idzie dalej i zwieksza licznik o 1
      wordCounter[word] = wordCounter[word] + 1;
    } else {
      //a jesli nie pojawia sie wiecej, to znaczy ze jest tylko jedno takie slowo
      wordCounter[word] = 1;
    }
  });
  return wordCounter; //zwracamy obiekt licznik
};
console.log(countWordOccurrences(text));

let theString = "Welcome toto W3Docs to";
console.log(theString.split("to").length - 1); //to moze byc dobre

// Zadanie 16.
const toCamelCase = (string) => {
  const stringSplitted = string.split(/[_-]/); //najpierw tworze stringa rozbitego, jesli znajdzie - albo _
  for (let i = 1; i < stringSplitted.length; i++) {
    //iteruje po wszystkich slowach oprocz 1(no bo po co skoro logicznym jest, ze jesli ma byc wielkimi to bedzie wielkimi, i analogicznie malymi)
    stringSplitted[i] =
      stringSplitted[i].charAt(0).toUpperCase() + stringSplitted[i].slice(1); //zwracamy sume zawsze duzego pierwszego znaku i reszty
  }
  return stringSplitted.join(""); //laczymy calosc tak zeby byl camel case
};
console.log(toCamelCase("java_script"));
console.log(toCamelCase("java-script"));
console.log(toCamelCase("Java-Script"));
console.log(toCamelCase("asp_Net_Core"));

// Zadanie 17
const studentsGrades = [
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
    grades: [],
  },
];

const getStudentTopGrades = (array) => {
  const gradesArray = array.map((student) => {
    if (student.grades == "" && []) {
      return 0;
    } else {
      return Math.max(...student.grades);
    }
  });
  // tutaj gpt pomogl mi uzyc spreada w Math.max
  // 1. tworzymy zmienna gradesArray ktora mapuje po array czyli po kazdym elemencie tablicy
  // 2. najpierw warunek, jesli oceny sa puste lub brak ocen, to zwracamy 0, a jesli nie to wykonujemy operacje ponizej
  // 3. w map mamy student, ktory dla kazdego rekordu uzywa math.max do znalezienia maksa ze student.grades)
  // 4. uzycie mapa gwarantuje, ze przejedziemy po kazdym z rekordow, a ... zapewnia, ze mamy osobne listy, a nie tablice list, przez co mozemy uzyc Math.max
  return gradesArray;
};
console.log(getStudentTopGrades(studentsGrades));
//Homework:
//zadania do domu do końca (7 pkt)
// opis tego co robimy i jak
// nowy branch homework-03-platek92
