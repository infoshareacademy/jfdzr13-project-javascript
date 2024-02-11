// console.log('DOM API');

const header = document.getElementById('header');

console.log(header);
console.log('Zawartość elementu h1:', header.textContent);

header.classList.add('header');

console.log(header);

header.innerText = 'I am a heading';