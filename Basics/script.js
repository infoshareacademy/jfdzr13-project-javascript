

// Zadanie 1.


// Zadanie 2.

// const sum = (a, b) => a + b;

// const ten = sum(5, 5);

// const four = sum(2, 2);

// const myAddedNumbers = sum(ten, four); 

// console.log(myAddedNumbers);

// Zadanie 3.

// let userName = "Michał";
// let userNameLength = userName.length;

//  console.log(`Username: ${userName} have length: ${userNameLength}.`)

// Zadanie 4.

// const firstUser = "Michał";
// const secondUser = "Michał";

// if (firstUser === secondUser){
// console.log("Oh! The names are the same!"); 
// } else{
// console.log("Unfortunately the names are different :/");
// }

// Zadanie 5.

// const age = 17;

// if (age >= 18) {
// console.log("User is adult");
// } else {
// console.log("User is underaged");
// }

// Zadanie 6.

// const getBiggerNumber = (a, b) => {
//     if (a > b) {
//         return a;
//     } else if (b > a) {
//         return b;
//     } 
//     return "liczby takie same"; 
// }

// console.log(getBiggerNumber(4, 2));


// Zadanie 7.

// const itemsInCart = (amount) => {
// if (amount > 1) {
// return `You have ${amount} items in your cart.`;
// } 
// return `You have 1 item`;
// }

// console.log(itemsInCart(5))

// Zadanie 8. / NIE WIEM


// Zadanie 9.

// function shouldTakeAnUmbrella(isRaining, hasJacket, longTrip, isSummer) {
//     if (!isRaining && !longTrip && !isSummer && hasJacket) {
//         return false;
//     } else {
//         return true;
//     }
// }

// const result = shouldTakeAnUmbrella(false, true, false, false);
// console.log(result);

// Zadanie 10.

// const isEqual = (a, b) => a === b;

// console.log(isEqual(2000, 1000)); 

// Zadanie 11.

// function canRideRollerCoaster(age, height) {
//     if (age > 18 && height > 175) {
//         console.log("Can ride!");
//         return true;
//     } 
//     console.log("Sorry kido, no can do");
//     return false
// }

// console.log(canRideRollerCoaster(20, 180));

function canRideRollerCoaster(age, height) {
    switch (age > 18 && height > 175) {
        case true: 
            console.log("Can ride!");
            return true;
        case false:
            console.log("Sorry kiddo, no can do.");
            return false;
    }   
}
// console.log(canRideRollerCoaster(12, 185));

// Zadanie 12.



// Zadanie 13.

// Zadanie 14.

// Zadanie 15.

// function slugify(changed) {
//     return changed.toLowerCase().split(" ").join("-");
// }

// console.log(slugify("Top 10 my favourite songs")); 
// console.log(slugify("Name of my blog article")); 

// // Zadanie 16.

// const drawTree = (branch) => {
//     let star = "";
//     let tree = "";

//     for(let i = 0; i < branch; i++){
//         star = star + "*";
//         tree = tree + star + "\n";
//     }

//     tree = tree + "**" + "\n";

//     return tree;
// }

// console.log(drawTree(6))

// function number(a) {
//     if (a % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// console.log(number(11));

// function someString (text) {
//     return text.includes(" ")
// }

// console.log(someString("Michał"));

function someString (text) {
    const length = text.length;
    return length;
}

console.log(someString("biuro"));
