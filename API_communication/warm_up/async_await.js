function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

const form = document.querySelector("#form");
const responseWrapper = document.querySelector("#response");



async function getCountryName(code) {
	if (code) {
		try {
			const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}
            `);
			const data = await res.json();

			return data[0].name.common;
		} catch (e) {
			console.error(e);
		}
	}
	return "no name";
}

async function mapDataToComponent(infoGroup) {
	const newNode = document.createElement("div");
	newNode.classList.add("node");
	newNode.style.height = `${500 * infoGroup.probability}px`;
	newNode.style.backgroundColor = `${getRandomColor()}`; /// #123

	try {
		const countryName = await getCountryName(infoGroup.country_id); // "PL" -> "Poland";

		const countryParagraph = document.createElement("p");

		countryParagraph.textContent = countryName;

		newNode.appendChild(countryParagraph);
		responseWrapper.appendChild(newNode);
	} catch (e) {}
}

function mapper(dane) {
	responseWrapper.textContent = ""
	dane.country.forEach((elem) => mapDataToComponent(elem)); // elem to jest { country_id: "PL", probability: 0.841 }
}

async function getData(name) {
	try {
		responseWrapper.textContent = "Loading..."

		const response = await fetch(`https://api.nationalize.io/?name=${name}`);
		const data = await response.json(); // {country: [{ country_id: "PL", probability: 0.841 }], name: "Bartek"}

		mapper(data);
	} catch (e) {
		responseWrapper.textContent = "Sorry, we've got error";
	}
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputName = e.target.name.value;

	getData(inputName);
});
