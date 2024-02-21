/* Ćwiczenie 1. 
    Stwórz tablicę 4 elementów.
    Zaloguj całą tablicę do konsoli
    Zaloguj pierwszy i trzeci element 
*/

// const arr = [1, 2, 3, 4];
// console.log(arr);
// console.log(arr[0], arr[arr.length -1]);

/* Ćwiczenie 2.
    Stwórz tablicę 2 elementów
    Dodaj element na koniec
    Usuń pierwszy element
    Usuń ostatni element
    Dodaj element na początek
    Po każdym kroku sprawdź kształt tablicy.
*/

// const arr = [1, 2];
// arr.push(3);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(4);
// console.log(arr);

/* Ćwiczenie 3
    push(), unshift(), splice(), reverse(), join()

    Uzupełnij tablicę brokenArray tak aby przedstawiała ciąg kolejnych liczb całkowitych (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
    Odwróć kolejność tablicy
    Przekształć tablicę w string, łącząc elementy za pomocą '-'
    Zaloguj efekt do konsoli (oczekiwany rezultat: 9-8-7-6-5-4-3-2-1-0)
*/

// let brokenArray = [1, 2, 5, 8];

// brokenArray.unshift(0);
// brokenArray.push(9);
// console.log(brokenArray);
// brokenArray.splice(3, 0, 3, 4);
// console.log(brokenArray);
// brokenArray.splice(6, 0, 6, 7);
// brokenArray.reverse();
// let str = brokenArray.join("-");
// console.log(str);

/* Ćwiczenie 4
    concat slice

    Połącz dwie dane tablice (arr1 i arr2) w jedną
    Stwórz dwie nowe tablice na podstawie zmergowanej tablicy, tak, by pierwszą była lewą połową nowej tablicy, a drugą prawą połową.
    Zaloguj w konsoli nowopowstałe tablice jak i arr1 i arr2, zwróć uwagę które wartości zostały zmodyfikowane a które nie
*/

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9];

// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// n = arr3.length;
// m = Math.round(n / 2);

// const arr4 = arr3.slice(0, m);
// const arr5 = arr3.slice(m, n);
// console.log(arr4);
// console.log(arr5);

/* Ćwiczenie 5
    Zmodyfikuj obiekt student, tak aby przedstawiał Twoje dane
    Usuń pole z nieodpowiadającą płcią

    Skopiuj zmodyfikowany obiekt i zmień w nim dowolne pole Object.assign / Object.create
    Zaloguj w konsoli oba obiekty i sprawdź czy posiadają odpowiednie wartości
*/

// const student = {
//   name: "",
//   surname: "",
//   age: null,
//   male: true,
//   female: true,
// };

// student.name = "Asia";
// student.surname = "Taratuta";
// student.age = 25;
// delete student.male;

// const newObject = Object.assign({}, student);
// newObject.name = "Joanna";

// console.log(student);
// console.log(newObject);

/* Ćwiczenie 6
    Za pomocą operacji destrukturyzacji i spread stwórz nową tablicę na postawie oldArray
    W nowej tablicy zawrzyj kopie tablicy oldArray za wyjątkiem pierwszego jej elementu, oraz dodaj na końcu nowy element 6
    Oczekiwany rezultat to tablica [2, 3, 4, 5, 6]
    Sprawdź czy przeprowadzone operacje miały wpływ na wartości w oldArray
*/

// const oldArray = [1, 2, 3, 4, 5];
// const [first, ...rest] = oldArray;
// console.log(oldArray);
// const newArray = [...rest, 6];
// console.log(newArray);
