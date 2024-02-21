const header = document.getElementById("header");
console.log(header);

header.classList.add("header");

header.textContent = "I am heading";

const listitems = ["a", "b", "c", "d"];

const list = document.createElement("ol");
document.body.appendChild(list);

listitems.forEach((element) => {
  const item = document.createElement("li");
  item.innerText = element;
  list.append(item);
});

const li = document.querySelectorAll("li");
li.forEach((li) => li.classList.add("listItem"));

header.classList.remove("header");

header.remove();

const body = document.body;
//body.style.backgroundColor = "#123123";

const toggleBackgroundColor = function (element) {
  let backgroundColor = body.style.backgroundColor;
  if (backgroundColor) {
    console.log("background color: ", backgroundColor);
    body.style.backgroundColor = "";
  } else {
    console.log("no background color");
    body.style.backgroundColor = "#123123";
  }
};

const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// button.addEventListener("click", function () {
//   toggleBackgroundColor(document.body);
// });

button.onclick = toggleBackgroundColor;
