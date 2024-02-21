// Zadanie 1 - wyświetlenie liczb parzystych od 0 do 20 za wyjątkiem 2

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0 && i != 2) {
//     console.log(i);
//   }
// }

// Zadanie 2 - FizzBuzz
// liczby 0 -> 100
// podzielna przez 3 => fizz
// podzielna przez 5 => buzz
// podzielna przz 3 i 5 => fizzbuzz

// let n = 0;

// while (n <= 100) {
//   console.log(n);
//   if (n % 3 == 0 && n % 5 == 0) {
//     console.log("fizzbuzz");
//   } else if (n % 3 == 0) {
//     console.log("fizz");
//   } else if (n % 5 == 0) {
//     console.log("buzz");
//   }
//   n += 1;
// }

// zadanie 3 - choinka:

// *
// **
// ***
// ****
// *****
// ******
// **

const choinka = (a) => {
  for (let i = 1; i <= a; i++) {
    let str = "";
    for (let j = i; j > 0; j--) {
      str = str + "*";
    }
    console.log(str);
  }
  console.log("**");
};
choinka(9);
