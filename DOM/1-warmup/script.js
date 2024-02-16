console.log("DOM API");

const header = document.getElementById("header");

console.log(header);
console.log("Zawartość elementu h1:", header.textContent);

header.classList.add("header");

console.log(header);

header.innerText = "I am a heading";

const listItem = ["a", "b", "c", "d"];

const newList = document.createElement("ol");

listItem.forEach((item, index) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  newList.appendChild(listItem);
});

document.body.appendChild(newList);

//5.
const allListItems = document.querySelectorAll("li");

allListItems.forEach((item) => {
  item.classList.add("listItem");
});

//6.

header.classList.remove("header");

//7.
header.remove();

// 8.

const button = document.createElement("button");
button.innerText = "Click me";
button.addEventListener("click", toggleBackgroundColor);

document.body.appendChild(button);

function toggleBackgroundColor() {
  const body = document.body;

  const hasBackgroundColor = body.style.backgroundColor !== "";

  if (!hasBackgroundColor) {
    body.style.backgroundColor = "#123123";
  } else {
    body.style.backgroundColor = "";
  }
}

button.addEventListener("click", toggleBackgroundColor);
