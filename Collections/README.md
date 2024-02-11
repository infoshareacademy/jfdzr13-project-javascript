# JavaScript Collections

## Arrays

---

### Zadanie 1.

Wybierz element `**` z zagnieżdżonej tablicy i zastąp go `"x"`

```javascript
const tickTackToe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["**", "o", "x"],
];
```

### Zadanie 2.

Napisz funkcję, która zsumuje wszystkie liczby w tablicy.

Np:

```javascript
console.log(sumNumbersInArray([2, 7, 4, 11, -1])); // 23
console.log(sumNumbersInArray([0, 8, 3, 14, 1])); // 26
console.log(sumNumbersInArray([2, -7, 140, 10, -1])); // 144
```

### Zadanie 3.

Napisz funkcję, która posortuje liczby w tablicy rosnąco lub malejąco w zależności od zadanego parametru.

Np.

```javascript
console.log(sortArr("asc", [2, 7, 4, 11, -1]));
console.log(sortArr("desc", [2, 7, 4, 11, -1]));
console.log(sortArr("asc", [0, 8, 3, 14, 1]));
console.log(sortArr("desc", [0, 8, 3, 14, 1]));
console.log(sortArr("asc", [2, -7, 140, 10, -1]));
console.log(sortArr("desc", [2, -7, 140, 10, -1]));
```

### Zadanie 4.

Napisz funkcję, która zwróci największą liczbę z tablicy

Np:

```javascript
console.log(biggestInArray([2, 7, 4, 11, -1]));
console.log(biggestInArray([0, 8, 3, 14, 1]));
console.log(biggestInArray([2, -7, 140, 10, -1]));
```

### Zadanie 5.

Napisz funkcję, która pobiera tablicę jako argument i zwraca tablicę z elementami posortowanymi w odwrotnej kolejności.

Np.

```javascript
console.log(reverseArray([2, 7, 4, 11, -1]));
console.log(reverseArray([0, 8, 3, 14, 1]));
console.log(reverseArray([2, -7, 140, 10, -1]));
```

### Zadanie 6.

Napisz funkcję, która sprawdzi czy elementy określonego wycinka tablicy (od indeksu 0 do wskazanego elementu tablicy) są `truthy` czy `falsy`.

Np.

```javascript
console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]
```

### Zadanie 7.

Napisz funkcję `stringLength()`, która jako parametr przyjmie tablicę ciągów znaków i zwróci tablicę ich długości.

Przykład:

```javascript
stringLength(["hello", "world", "dog", "sophisticated"]); // [5, 5, 3, 13];
```

### Zadanie 8.

- wyświetl tylko elementy większe lub równe 20: `Elementy większe lub równe 20: 50, 20, 21, 100, 20, 44`
- wyświetl sumę tylko ujemnych elementów tablicy: `Suma elementów ujemnych: -134`
- wyświetl sumę elementów na indeksach parzystych: `Suma elementów parzystych: 193`

```javascript
const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];
```

### Zadanie 9.

Napisz funkcję flatArray() która przyjmuje tablicę tablic i zwraca je połączone w jedną.

Przykłady:

```javascript
 [['a', 'b'], [1,2]] // ['a', 'b', 1, 2]
[
  ["red", "blue"],
  ["green", "red", "yellow"],
  ["black", "blue"],
  ["pink", "black", "white"],
]; // ['red', 'blue', 'green', 'red', 'yellow', 'black', 'blue', 'pink', 'black', 'white']
```

---

## Objects

---

Do kolejnych zadań wykorzystaj dane z pliku `data.js`.

### Zadanie 10.

Napisz funkcję, która zwróci tablicę obiektów, spełniających kryterium: `age < 30`

### Zadanie 11.

Napisz funkcję, która wyświetli każdego z userów w konwencji:

`The user's name is name and the user is age years old. The user works as job and drives car`

- Zmodyfikuj funkcję tak, by w zależności od property `car` obiektów będących elementami tablicy `people`, zwracana była dodatkowo informacja:

`The user's name is name and the user is age years old. The user works as job and drives car` + "which is fun car/ boring car"

Samodzielnie zdefiniuj, kiedy powinna się wyświetlać jedna, a kiedy druga wiadomość.

### Zadanie 12.

Napisz funkcję, która zwróci tylko osoby mające conajmniej 40 lat i będące mężczyznami w konwencji `The user is X and he is Y years old`, i na koniec wyświetl sumę ich lat.

Przykład:

```javascript
// The user is Mark and he is 41 years old
// Next user is Carl and he is 82 years old
// Together they have 123 years
```

### Zadanie 13.

Napisz funkcję, która zwróci nową tablicę z posortowanymi od najmłodszego do najstarszego użytkownikami.

### Zadanie 14.

Napisz funkcję `dayOfTheWeekYouWereBorn()`, która zwróci dzień tygodnia, na podstawie daty Twoich urodzin.

```javascript
dayOfTheWeekYouWereBorn("2000-11-20"); // You were born on Tuesday
```

Skorzystaj z wbudowanego obiektu `Date`.

### Zadanie 15.

Napisz funkcję `countWordOccurrences`, która przyjmie ciąg znaków i zwróci obiekt, który będzie reprezentował ilość wystąpień każdego słowa w przekazanym stringu.

Przykład:

```javascript
countWordOccurrences(
  "JavaScript byl dla mnie skomplikowany a teraz JavaScript jest dla mnie znacznie prostszy. Viva Javascript"
); // => { javascript: 3, byl: 1, dla: 2, mnie: 2, skomplikowany: 1, a: 1, teraz: 1, jest: 1, znacznie: 1, prostszy: 1, viva: 1 }
```

### Zadanie 16.

Zaimplementuj funkcję `toCamelCase` która przyjmie ciąg znaków, gdzie każde słowo będą oddzielone od kolejnego albo myślnikiem `(-)` albo znakiem podkreślenia `(_)`. Funkcja `toCamelCase` powinna konwertować otrzymany w parametrze ciag znaków i modyfikować go tak, aby był napisany camelCase.

Dodatkowo zwracany ciąg znaków powinien być pisany wielkimi literami tylko wtedy, gdy oryginalne słowo było pisane wielkimi literami.

Przykłady:

```javascript
toCamelCase("java_script"); // => javaScript
toCamelCase("java-script"); // => javaScript
toCamelCase("Java-Script"); // => JavaScript
toCamelCase("asp_Net_Core"); // => aspNetCore
```

### Zadanie 17.

Utwórz funkcję `getStudentTopGrades`, która pobiera tablicę obiektów, gdzie każdy obiekt reprezentuje ucznia i jego oceny. Funkcja powinna zwrócić tablicę ich najwyższych ocen - każdy element tablicy powinien reprezentować najwyższą uzyskaną ocenę cząstkową danego studenta. Jeśli uczeń nie ma ocen, to przyjmijmy, że jego najwyższa ocena jest równa 0.

Przykład:

```javascript
getStudentTopGrades([
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
]); // => [5, 5, 4]
```
