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
  console.log(`Together they have ${yearsTogether} years`); //po wyjściu z pętli wyświetlamy sumę wieku użytkowników
}
manAge(people, 40); //uruchamiamy funkcję

// Zadanie 13.

function sortArray(arr) {
  let newArray = []; //torzymy nową tablicę

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
  } //zawartość starej tablicy pushujemy do nowej w pętli o długości tablicy arr
  //tworzymy zmienną do której przypisujemy wynik funkcji, która sortuje tablicę według klucza age
  let sortedArray = newArray.sort((a, b) => {
    return a.age - b.age; //sortujemy od najmniejszej do największej wartości
  });

  return sortedArray; //zwracamy wynik funkcji przypisany do zmiannej
}

console.log(sortArray(people)); //wywołujemy funkcję i wyświetlamy w konsoli
console.log(people); //tu dla sprawdzenia czy stara tablicy nie jest naruszona...

// Zadanie 14.

function dayOfTheWeekYouWereBorn(dayYouBorn) {
  //budujemy tablicę z dniami tygodnia. Zaczynamy od niedzieli wiedząc że obiekt Date zwraca niedzielę jako 0
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayYouBornAnswer = new Date(dayYouBorn).getDay(); //pobieramy interesujący nas dzień tygodnia używając obiektu Date

  return days[dayYouBornAnswer]; //zwracamy element z tablicy którego indexem jest uzyskany wcześniej dzień tygodnia
}

console.log(dayOfTheWeekYouWereBorn("2000-11-20")); //tu wywołujemy funkcje i wyświetlamy w konsoli

// Zadanie 15.

function countWordOccurrences(sentence) {
  let sentenceLower = sentence.toLowerCase().replace(".", ""); //porządkujemy tablicę - zmieniamy wszystkie duże litery na małe oraz usuwamy kropki
  let newSentence = sentenceLower.split(" "); //zdanie dzielimy na tablicę, gdzie kryterium podziału jest spacja
  let sentenceObj = {}; //tworzymy pusty obiekt (do niego będziemy dodawać właściwości)
  let oneWord = new Set(); //tworzymy pusty zbiór - dzięki temu wyseparujemy pojedyncze indeksy z rozpatrywanej tablicy
  let oneWordTab = []; //a tutaj wyseparowane indeksy dodamy do nowej tablicy

  for (let i = 0; i < newSentence.length; i++) {
    oneWord.add(newSentence[i]); //dodajemy unikatowe rekordy do zbioru
  }

  for (let x of oneWord) {
    oneWordTab.push(x); //zbiór przekazujemy do tablicy
  }

  for (let i = 0; i < oneWordTab.length; i++) {
    //w pętli o długości równej ilości unikatowych rekordów w tablicy sprawdzamy ile razy dana wartość się powtarza
    let licznik = 0; //tu startujemy z licznikiem, za każdym razem go zerujemy żeby policzyć każde wystąpienia
    for (let j = 0; j < newSentence.length; j++) {
      //tu wchodzimy w pętle o długości wejściowej tablicy
      if (oneWordTab[i] == newSentence[j]) {
        licznik++; //jeżeli wyrażenie na indeksie z pierwszej tablicy wystąpi na drugiej to licznik na to policzy
      }
    }
    let type = oneWordTab[i]; //towrzymy zmienną która będzie właściwością obiektu
    sentenceObj[type] = licznik; //do obiektu dodajemy właściwość do której przypisujemy wartość wskazaną w liczniku
  }
  return sentenceObj; //po wyjściu z pętli zwracamy gotowy obiekt
}
let say =
  "JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript";

console.log(countWordOccurrences(say)); //wywołujemy funkcje

// Zadanie 16.

function toCamelCase(word) {
  let textLength = word.length; //sprawdzamy jaka jest długość słowa, żeby nie pominąc zadnego znaku przy sprawdzaniu
  let exSign1 = "-"; //wiemy jakich znaków szukamy więc przypisujemy je do zmiannych
  let exSign2 = "_";
  let newWord; //do tej zmiannej będziemy przypisywać zmodyfikowane wartości

  for (let i = 0; i < textLength; i++) {
    //ruszamy z pętą o długości przeszukiwanego stringa
    if (word.charAt([i]) == exSign1) {
      //szukamy w pętli czy dany znak występuje na którymś indeksie
      newWord = word.replace(
        word.charAt(word.indexOf(exSign1) + 1),
        word.charAt(word.indexOf(exSign1) + 1).toUpperCase()
      ); //jeżeli taki znak występuje zamieniamy znak na kolejnym indeksie na wielką literę i przypisujemy do zadeklarowanej wcześniej zmiannej

      word = newWord.replace(exSign1, ""); //do początkowej zmiannej przypisujemy nową zmienną usuwając równocześnie niepotrzebny znak
    }
    if (word.charAt([i]) == exSign2) {
      //dalej robimy dokładnie to samo z kolejnym znakiem
      newWord = word.replace(
        word.charAt(word.indexOf(exSign2) + 1),
        word.charAt(word.indexOf(exSign2) + 1).toUpperCase()
      );

      word = newWord.replace(exSign2, "");
    }
  }
  console.log(word); //po wyjściu z pętli wyświetlamy w konsoli zmodyfikowanego stringa

  return;
}
toCamelCase("java_script"); //wywołujemy finkcje
toCamelCase("java-script");
toCamelCase("Java-Script");
toCamelCase("asp_Net_Core");

// Zadanie 17.

let tablica = [
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
];

function getStudentTopGrades(tab) {
  let maxGrades = []; //nowa tablica do której przekażemy wyszukane wartości

  for (let i = 0; i < tab.length; i++) {
    //uruchamiamy pętle o długości przekazanej tablicy
    let maxGradesTemp = Math.max.apply(Math, tab[i].grades); //tworzymy zmienną do której przypisujemy maksymalną wartość właściwości obiektu. Używamy funkci applay dedykowanej do tablic
    maxGrades.push(maxGradesTemp); //wyszukaną wartośc dodajemy do wcześniej utworzonej tablicy
  }
  return maxGrades; //funkcja zwraca nową tablicę
}

console.log(getStudentTopGrades(tablica)); //uruchamiamy finkcję wyświrtlamy w konsoli
