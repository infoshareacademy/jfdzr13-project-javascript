
const header = document.getElementById("header");
// by skorzystać z tej metody: const header = document.getElementsByClassName("myHeader")[0]; zakomentuj zmienną z linijki 2. 

header.classList.add("header");
header.textContent = "I am a heading";

const listItems = ["a", "b", "c", "d"];

const newList = document.createElement("ol");

listItems.forEach((elem) => {
    const listElem = document.createElement("li");
    listElem.textContent = elem;

    newList.append(listElem);
})

document.body.append(newList);

document.querySelectorAll("li").forEach((el) => {
    el.classList.add("listItem");
})

header.classList.remove("header");

// header.remove();

const button = document.createElement("button");
button.innerText = "Click me!";

document.body.append(button);

function toggleBgColor() {
    const body = document.body;

    if (body.style.backgroundColor) {
        body.style.backgroundColor = ""
    } else {
        body.style.backgroundColor = "#123"; // #112233
    }
}

button.onclick = toggleBgColor;