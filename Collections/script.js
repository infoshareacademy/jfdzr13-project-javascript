import people from "./data.js";

// HOMEWORK: Wykonaj ponizsze zadania na przynajmniej 1 sposób.
// Kazdy z wykonanych sposobów wytłumaczyć przy pomocy komentarzy (przykład powyzej w zadaniu 9);
// Wstępny termin oddania pracy: 9.02 do północy
// W przypadku wypełnionych ankiet termin przedłuzamy do 11.01 do północy
// Sprawdzane będą wyłącznie prace domowe oddane w formie pull requesta
// Pull request mozna wykonać na repozytorium https://github.com/infoshareacademy/jfdzr13-project-javascript lub swoim repozytorium w organizacji infoShare

// Max punktów do zdobycia: 7

// Zadanie 11.

function peopleAndCar(arr) {
  //funkcja jako argument przyjmuje tablicę
  let answer;
  for (let i = 0; i < arr.length; i++) {
    //pętla o długości tablicy obiektów
    let carLength = arr[i].car.split("").length; //moje kryterium czy auto jest fajne czy nudne to czy ilość znaków w nazwie jest parzysta czy nie (używam metody split i sprawdzam długiść tablicy)...
    if (carLength % 2 == 0) {
      //... i tutaj sprawdzam ten warunek i wynik przypisuje do zmiennej answer
      answer = `The user's name is ${arr[i].name} and the user is ${arr[i].age} age years old. The user works as ${arr[i].job} and drives ${arr[i].car} - which is fun car`;
      console.log(answer); //i wyświetlam w konsoli
    } else {
      answer = `The user's name is ${arr[i].name} and the user is ${arr[i].age} age years old. The user works as ${arr[i].job} and drives ${arr[i].car} - which is boring car`;
      console.log(answer);
    }
  }
  return answer; //tu zwracam funkcję
}
peopleAndCar(people); //a tu wywołuje funkcję

// Zadanie 12.

function manAge(arr, age) {
  //funkcja jako argument przyjmuje tablice i wiek
  let answer;
  let helpVar = 0; //zmienna pomocnicza, żeby sprawdzić kiedy przypisać do zmiennej answer właściwą wartość
  let yearsTogether = 0; //do tej zmiannej dodamy wiek użytkowników którzy spełniają kryteria
  for (let i = 0; i < arr.length; i++) {
    //pętla o długości tablicy
    if (arr[i].age >= age) {
      //sprawdzam czy jest spałniony warunek podany w argumencie funkcji
      helpVar++; //uruchamiamy zmienną pomocniczą
      if (helpVar === 1) {
        //jeżeli zmianna pomocnicza uruchomiona jest pierwszy raz to do zmiannej answer przypisujemy odpowiednią wartość
        answer = `The user is ${arr[i].name} and he is ${arr[i].age} years old`;
        console.log(answer); //wyświetlamy w konsoli
        yearsTogether += arr[i].age; //dodajemy wiek użytkownków
      } else {
        answer = `Next user is ${arr[i].name} and he is ${arr[i].age} years old`;
        console.log(answer);
        yearsTogether += arr[i].age;
      }
    }
  }
  console.log(yearsTogether); //po wyjściu z pętli wyświetlamy sumę wieku użytkowników
}
manAge(people, 40); //uruchamiamy funkcję

// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// Zadanie 16.

// Zadanie 17.
