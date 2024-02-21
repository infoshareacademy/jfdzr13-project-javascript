/* 
Stworzyć funkcję wyższego rzędu map, która przyjmuje 2 parametry: tablicę i callback i zwraca nową tablicę, której wartości to efekty wywołania funkcji callback dla wszystkich elementów starej tablicy

*/

// function multiplyBy2(item) {
//   return item * 2;
// }

// function toUpperCase(item) {
//   return item.toUpperCase();
// }

// function toObject(name) {
//   return { name: name };
// }

// function map(array, callback) {
//   let resultArray = [];

//   for (let item of array) {
//     const newItem = callback(item);
//     resultArray.push(newItem);
//   }
//   return resultArray;
// }
// const tab = [1, 2, 3, 4];
// const tab2 = ["Asia", "Joanna"];

// const newArray = map(tab, multiplyBy2);
// const newArray2 = map(tab2, toUpperCase);
// const newArray3 = map(tab2, toObject);
// console.log(newArray3);

/*
Stworzyć funkcję wyższego rzędu mapObject, która przyjmuje 2 parametry: obiekt i callback i zwraca nowy obiekt, którego wartości to efekty wywołania funkcji callback dla wszystkich pól starego obiektu
*/

// function multiplyBy2(item) {
//   return item * 2;
// }

// function mapObject(obj, callback) {
//   let resultObj = {};
//   const array = Object.entries(obj);

//   for (let [key, value] of array) {
//     const newEntry = callback(value);
//     resultObj[key] = newEntry;
//   }
//   return resultObj;
// }

// const obj1 = {
//   test1: 1,
//   test2: 2,
//   test3: 3,
// };

// const result = mapObject(obj1, multiplyBy2);
// console.log(result);

/* 
  Implementacja funkcji wyższego rzędu startCounter, która zwraca funkcję, która podnosi swój wewnętrzny licznik po każdym wywołaniu. Przykład użycia

  
  const counter = startCounter();
  const counter2 = startCounter();
  counter() // 1;
  counter() // 2;
  counter2() // 1;
  counter() // 3;
*/
// function startCounter() {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// const counter = startCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const counter2 = startCounter();
// console.log(counter2());

/*
Stwórz funkcję average, która będzie wyliczać średnią wartość z tablicy otrzymanej jako parametr
2. Dodaj “cache”, w taki sposób, by funkcja nie wyliczała średniej od nowa, gdy przekazana tablica składa się z tych samych wartości przekazanych w tej samej kolejności co poprzednio.
3. Przykład użycia:
const average = startAverageWithCache();
console.log(average([1, 2, 3, 4])); // 2.5
console.log(average([1, 2]); // 1.5
console.log(average([1, 2, 3, 4])); // FROM CACHE 2.5
*/

function startAverageWithCache() {
  const cache = {};
  return function (arr) {
    const stringifeldArray = arr.join(",");
    if (cache[stringifeldArray] !== undefined) {
      console.log("from cache", cache[stringifeldArray]);
      return cache[stringifeldArray];
    }

    let sum = 0;
    for (let item of arr) {
      sum = sum + item;
    }
    const ave = sum / arr.length;
    console.log("calculated: ", ave);
    cache[stringifeldArray] = ave;

    return ave;
  };
}
const average = startAverageWithCache();

average([1, 2, 3, 4]);
average([1, 2]);
average([1, 2, 3, 4]);
