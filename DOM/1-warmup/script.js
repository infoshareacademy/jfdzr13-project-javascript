const header = document.getElementById('header')
header.classList.add('header')
header.innerText= "I am a heading"
const listItems = ["a", "b", "c", "d"]
let list = document.createElement("Ol")
listItems.forEach( element => {
let li = list.appendChild( document.createElement("li"))
li = li.innerText = element
});
document.body.appendChild(list)
