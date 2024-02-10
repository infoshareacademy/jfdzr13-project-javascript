import people from "./data.js";

// Zadanie 1.
const tickTackToe = [
	["x", "o", "x"], // 0
	["x", "x", "o"], // 1
	["**", "o", "x"], // 2
];

tickTackToe[2][0] = "x";

console.log(tickTackToe);

// napisać funkcję, która zwróci kopię tickTackToe z podmienionymi ** na x;

// Zadanie 2.
function simpleSum(arr) {
    let sum = 0; // temp var

    arr.forEach((elem) => sum+=elem); // on every iteration add to sum

    return sum;
}

function sumByReduce(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)
}

function sumWithLoop(arr) {
    let sum = 0; // temp var
    let i = 0; // initial index

    while(i < arr.length) {
        console.log("current sum: ", sum);
        sum += arr[i]
        i++;
    }

    return sum;
}


console.log(simpleSum([2, 7, 4, 11, -1])); // 23
console.log(sumByReduce([0, 8, 3, 14, 1])); // 26
console.log(sumWithLoop([2, -7, 140, 10, -1])); // 144

// Zadanie 3.
function sortArr(order = "desc", arr) {
    if (order === "asc") return arr.sort((a,b) => a - b);
    return arr.sort((a,b) => b - a);
}


console.log(sortArr("asc", [2, 7, 4, 11, -1]));
console.log(sortArr("desc", [2, 7, 4, 11, -1]));
console.log(sortArr("asc", [0, 8, 3, 14, 1]));
console.log(sortArr("desc", [0, 8, 3, 14, 1]));
console.log(sortArr("asc", [2, -7, 140, 10, -1]));
console.log(sortArr("desc", [2, -7, 140, 10, -1]));

// Zadanie 4.
function biggestInArray(arr) {
    return Math.max(...arr);
}

function getBiggest(arr) {
    return arr.sort((a,b) => b - a)[0];
}

function returnBiggest(arr) {
    return arr.sort((a,b) => a-b)[arr.length - 1]
}

console.log(biggestInArray([2, 7, 4, 11, -1]));
console.log(getBiggest([0, 8, 3, 14, 1]));
console.log(returnBiggest([2, -7, 140, 10, -1]));

// Zadanie 5.
function reverseArray(arr) {
    return arr.reverse();
}

function returnReversedCopy(arr){
    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

function returnReversed(arr) {
    let newArr = [];

    arr.forEach((elem) => newArr.unshift(elem));

    return newArr;
}

console.log(reverseArray([2, 7, 4, 11, -1]));
console.log(returnReversedCopy([0, 8, 3, 14, 1]));
console.log(returnReversed([2, -7, 140, 10, -1]));

// Zadanie 6.
function areElemsTruthy(topIndex, arr) {
    let res = [];
    const portionOfArrayToConsider = arr.slice(0, topIndex); // [1, NaN, undefined, 0]

    portionOfArrayToConsider.forEach((elem) => res.push(Boolean(elem)));

    return res;
}

function boolifyArrPart(topBorder, arr) {
    const portionOfArrayToConsider = arr.slice(0, topBorder); // [1, NaN, undefined, 0]

    return portionOfArrayToConsider.map((elem) => !!elem); // Boolean(elem);
}

function returnBoolified(topIndex, arr) {
    let partialArr = [];

    arr.forEach((elem, i) => {
        if (i < topIndex) {
            partialArr.push(elem);
        }
    })

    return partialArr.map((elem) => !!elem);
}

console.log(areElemsTruthy(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]
console.log(boolifyArrPart(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]
console.log(returnBoolified(4, [1, NaN, undefined, 0, true])); // [true, false, false, false]

// Zadanie 7.
function stringLength(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length;
    }

    return arr;
}

function mapStringsArrToLengths(arr) {
    return arr.map((elem) => elem.length); // original -> modified copy
}


console.log(stringLength(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];
console.log(mapStringsArrToLengths(["hello", "world", "dog", "sophisticated"])); // [5, 5, 3, 13];

// Zadanie 8.
const numbers = [
	11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
	-53, 17, -21,
];

function printBiggerOrEqual(arr, num) {
    let newArr = [];

    arr.forEach((elem) => {
        if (elem >= num) {
            newArr.push(elem);
        }
    })

    const elementsToDisplay = newArr.sort((a, b) => a - b).join();

    return `Elementy większe lub równe ${num}: ${elementsToDisplay}`
}

function sumOfNegatives(arr) {
    // let newArr = [];

    // arr.forEach((elem) => {
    //     if (elem < 0) {
    //         newArr.push(elem);
    //     }
    // })

    const newArr = arr.filter((elem) => elem < 0);

    const sum = newArr.reduce((acc, curr) => acc + curr ,0);

    return `Suma elementów ujemnych: ${sum}`;
}

function sumOfEvens(arr) {
    const sum = arr.reduce((acc, curr, i) => {
        if (i % 2 !== 0) return acc;
        return acc + curr;
    }, 0);

    return `Suma elementów parzystych: ${sum}`;
}

console.log(printBiggerOrEqual(numbers, 20));
console.log(sumOfNegatives(numbers));
console.log(sumOfEvens(numbers));

// Zadanie 9.
function flatArr(arr) {
    let newArr = []; // definiujemy pustą tablicę, do której zapiszemy nowe elementy spełniające kryteria określone ponizej
    
    arr.forEach((elem) => { // wykonujemy pętlę na elementach oryginalnej arrayki
        if (Array.isArray(elem)) { // jezeli element jest arrayką to argumenty tego elementu dodajemy do newArray pojedynczo
            newArr.push(...elem);
        } else { // jezeli elem nie jest arrayką, to dodajemy go do newArr takim jaki jest
            newArr.push(elem);
        }
    });

    return newArr;
}

console.log(
	flatArr([
		["a", "b"],
		[1, 2],
        2,
        {
            "tablica": [1,2,3],
            "obj": {
                "tablica": [1,23]
            }
        }
	])
);
console.log(
	flatArr([
		["red", "blue", "kolejny argument"],
		["green", "red", "yellow"],
		["black", "blue"],
		["pink", "black", "white"],
	])
);

// Zadanie 10.
function filterByAge(arr, limitAge) {
    return arr.filter((elem) => elem.age > limitAge);
}

console.log(filterByAge(people, 30));

// HOMEWORK: Wykonaj ponizsze zadania na przynajmniej 1 sposób.
// Kazdy z wykonanych sposobów wytłumaczyć przy pomocy komentarzy (przykład powyzej w zadaniu 9);
// Wstępny termin oddania pracy: 9.02 do północy
// W przypadku wypełnionych ankiet termin przedłuzamy do 11.01 do północy
// Sprawdzane będą wyłącznie prace domowe oddane w formie pull requesta
// Pull request mozna wykonać na repozytorium https://github.com/infoshareacademy/jfdzr13-project-javascript lub swoim repozytorium w organizacji infoShare

// Max punktów do zdobycia: 7


// Zadanie 11.

people.forEach(function(user) {
    let userDescription = `The user's name is ${user.name} and the user is ${user.age} years old. The user works as ${user.job} and drives ${user.car}`;

//uzywamy funkcji forEach, zeby przejść przez kazdy element tabeli people i nazywamy sobie kazdy element tabeli jako 'user' i informujemy funkcje, ze ma przejsc przez kazdy taki element 'user' i wyswietlic jego dane zgodnie z opisem

if(people.car === "Ford Mustang" || people.car === "BMW 3 Series") {
    userDescription += " which is fun car.";
}
else {
    userDescription += " which is boring car.";
}
//ustalamy sobie warunki, dla których ma się dodawać kwestia tego czy to fajny, czy nudny samochód 


console.log(userDescription);
//dajemy console loga wewnątrz funkcji, zeby miec dostep do elementow

});


// Zadanie 12.

people.forEach(function(user) {
//znowu uzywamy sobie funkcji forEach, aby przejsc przez wszystkie elementy tablicy 'people'
if(user.age >= 40 && user.gender === "man"){
    let olderMen = `The user is a ${user.gender} and he is ${user.age} years old.`;
//stawiamy warunek- JEŚLI age i gender spełniają warunkui, to dopiero wtedy wyświetl zmienną olderMen
    console.log(olderMen);
}
});

function menAgeSum(people){ //nawiązujemy sobie do tabeli people
    let sumAge = 0; //tworzymy zmienną, do której przypiszemy zsumowany wiek
    people.filter(function(user){
        // if(user.age >= 40 && user.gender === "man"){
        //     return true;
        // }
        //     return false; LUB

    return user.age >= 40 && user.gender === "man"
    }).forEach(function(user){ //tutaj miałam duuzy problem; po odfiltrowaniu userow zgodnie z wiekiem i płcią bierzemy kazdego i dodajemy jego wiek do zmiennej, ktora poki co wynosi 0, na początku zrobiłam if(warunki), ale chat podpowiedział mi, ze wtedy musialabym zwrócić true/ false i dopiero wtedy jeśli true to sumAge += user.age, sama bym pewnie na to nie wpadła...
        sumAge += user.age;

    });

    return sumAge; 
    //zwracamy wynik z funkcji
}

console.log("Together they're", menAgeSum(people), "years old.");

// Zadanie 13.

function sortedAge(people) {

let copyPeople = people.slice(); //w zadaniu jest napisane, aby zwrócić nową tablicę, nie modyfikować starą, więc skopiowałam oryginalną (to dodałam na końcu w sumie)

copyPeople.sort(function (a,b){
    return a.age - b.age //tego trochę nie kminię, szczerze, ale w skrócie załapałam, ze jak bedzie a - b i wynik będzie ujemny, to znaczy, ze a jest mniejsze i będzie przed b, jak bym dała b - a, to na odwrót (ale trzeba patrzeć na liczy, bo jeśli b będzie mniejsze od a i zrobimy a - b, to b będzie mniejsze czyli stanie przed a jeśli dobrze rozumiem)
});

return copyPeople;
//zwracamy sobie działanie z funkcji ustalające kolejność
}

console.log(sortedAge(people));
//wywołujemy funkcje w console.logu przedatawiającą userów po kolei zgodnie z wiekiem rosnąco


// Zadanie 14.

let birthday = new Date("1999-06-09"); //newDate tworzymy sobie zmienną reprezentującą naszą datę urodzin
let day = birthday.toLocaleDateString("en", {weekday: "long"}); //musiałam wygooglować i poszukać więcej o obiekcie Date
console.log("I was born on", day += ".");

// Zadanie 15.

//to zadanie jest dla mnie zbyt skomplikowane i mimo ze CHAT GPT wygenerował mi rozwiązanie i komentarze, to jest to na tyle trudne, ze nie rozumiem nawet wyjaśnień, więc myślę, ze to zadanie odpuszczę w pracy domowej- kompletnie nie rozumiem.

// Zadanie 16.
//okej wydawało się łatwe, totalnie level hard jak dla mnie- nie wiedziałam za bardzo od czego zacząć, więc zaczęłam coś skrobać tylko dla let a, zeby jakkolwiek to pojąć, a dopiero później edytowałam całą funkcję 

let a = "java_script";
let b = "java-script";
let c = "Java-Script";
let d = "asp_Net_Core";

function toCamelCase (input) {
    let parts = input.split(/-|_/); //ok tutaj definiujemy sobie rozdzielanie stringu za pomocą - lub _

    let camelCaseParts = parts.map(function(part, index){
    if(index === 0) {
        return part;
    } else {
        return part[0].toUpperCase() + part.slice(1);
    }}) //tutaj warunkujemy, ze jeśli indeks części stringu wynosi 0 (np. w java-script mamy dwie części, java i script, więc mowa tutaj o części 'java'), to zwrócone ma zostać oryginalne słowo, a w innych przypadkach (czyli np. 'script') mamy zmienić pierwszę literę stringu danej części na wielką i zwrócić resztę tej części bez pierwszej litery, która była mała (sama bym na to nie wpadła, ale zwrocenie part z podmieniona tylko wielką literą jest jeszcz gorsze)

    let camelCase = camelCaseParts.join(''); //definiujemy sobie finalną zmienną, no bo trzeba to wszystko ze sobą połączyć
    return camelCase;
};


console.log(toCamelCase(a));
console.log(toCamelCase(b));
console.log(toCamelCase(c));
console.log(toCamelCase(d));


// Zadanie 17.

let studentsGrades =([
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
]);

let topGrades = studentsGrades.map(function(student){ //ok zadeklarowałam sobie nową zmienną topGrades, która da mi nową tablicę po uzyciu funkcji map, która przechodzi przez wszystkie elementy tablicy i zwraca nową (nazwałam kazdy element tablicy 'student')
    return student.grades.reduce(function(currentMax, gradeIndex){ 
        return Math.max(currentMax, gradeIndex);}, -Infinity); //z tym mam problem (zadna nowość XD), bo nie mogę zapamiętać, ze ta pierwsza wartość, to aktualna wartość, jaką mamy na danym indeksie, która jest równiez początkową wartością (tutaj -infinity) i później zmienia się zgodnie z indeksem i jeśli jest większa (w tym przypadku, bo mamy math.max), to jest zastępowana lizbą z kolejnego indeksu, niby ma to sens jak się o tym czyta, ale sama bym pewnie na to nie wpadła
    });

    console.log(topGrades);
