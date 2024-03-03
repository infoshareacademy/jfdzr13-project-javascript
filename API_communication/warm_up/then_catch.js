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

// rozwiązanie wykorzystujące .then(()).catch(())
function mapDataToComponent(infoGroup) {
	const newNode = document.createElement("div");
	const countryParagraph = document.createElement("p");

	newNode.classList.add("node");
	newNode.style.height = `${500 * infoGroup.probability}px`;
	newNode.style.backgroundColor = `${getRandomColor()}`; /// #123

	const code = infoGroup.country_id;

	if (code) {
		fetch(`https://restcountries.com/v3.1/alpha/${code}`)
			.then((res) => res.json())
			.then((data) => {
				countryParagraph.textContent = data[0].name.common;
			});
	} else {
		countryParagraph.textContent = "no name";
	}

	newNode.appendChild(countryParagraph);
	responseWrapper.appendChild(newNode);
}

function mapper(dane) {
	dane.country.forEach(mapDataToComponent); // elem to jest { country_id: "PL", probability: 0.841 }
}

function getData(name) {
	return fetch(`https://api.nationalize.io/?name=${name}`)
		.then((res) => {
            responseWrapper.textContent = "Loading..."

            return res.json()
        })
		.then((res) => {
            responseWrapper.textContent = "";

            return mapper(res)
        })
		.catch((e) => {
			console.log(e);
			console.error(e);
		});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputName = e.target.name.value;

	getData(inputName);
});