import data from "./data.js";

displayCards(data);
jobCounter(data.length);

let dataArr = data;
// text input
// Function to handle displaying input
function displayInput() {
  // Get the value of the input element
  var userInput = document.getElementById("search").value;

  // Display the input value
  console.log("You entered: " + userInput);
  filterData(userInput);
}

//function that creates array of jobs that matches the input
function filterData(input) {
  const arrDisplay = [];
  for (let i = 0; i < dataArr.length; i++) {
    if (dataArr[i].jobTitle.toLowerCase().includes(input.toLowerCase())) {
      // Display the element
      arrDisplay.push(dataArr[i]);
    }
  }
  jobCounter(arrDisplay.length);
  displayCards(arrDisplay);
}

// Add event listener for keyboard input
document.getElementById("search").addEventListener("input", displayInput);

//function that checks how many jobs is there to show and display it
function jobCounter(length) {
  let jobCounterText = document.querySelector(".jobs-listed");
  let jobCounter = length;
  if (length < 1) {
    jobCounterText.innerHTML = "0 Jobs Listed";
  } else if (jobCounter == 1) {
    jobCounterText.innerHTML = "1 Job Listed";
  } else {
    jobCounterText.innerHTML = jobCounter + " Jobs Listed";
  }
}

//function that creates html elements based on filtered array
function displayCards(dataDisplay) {
  const jobsGrid = document.querySelector(".jobs__grid");
  jobsGrid.innerHTML = "";

  const jobCard = document.querySelector(".job__card");

  dataDisplay.forEach((element) => {
    console.log("Display card: ", element.jobTitle);
    //create article
    let article = document.createElement("article");
    article.classList.add("job__card");

    //create div for logo
    let logo = document.createElement("div");
    logo.classList.add("company__logo", "company__logo--small");
    logo.style.backgroundImage = "url(" + element.image + ")";
    //if there is no logo image add first letter of company name and a random color as a background
    if (element.image == "") {
      let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
      logo.style.backgroundColor = "#" + randomColor;
      logo.innerHTML = element.company[0];
    }
    article.appendChild(logo);

    //create div for time and job type
    let infos = document.createElement("div");
    infos.classList.add("job__infos");
    article.appendChild(infos);

    //create paragraph for time
    let time = document.createElement("p");
    time.classList.add("job__card__time");
    //calculate how many days ago
    let oldtime = new Date(element.time);
    let today = new Date();
    let timeAgo =
      Math.floor((today - oldtime) / 1000 / 60 / 60 / 24) + " days ago";
    time.innerHTML = timeAgo;
    infos.appendChild(time);

    //add divider
    let divider = document.createElement("span");
    divider.classList.add("job__infos__divider");
    infos.appendChild(divider);

    //create paragraph with job type
    let jobType = document.createElement("p");
    jobType.classList.add("job__card__type");
    jobType.innerHTML = element.jobType;
    infos.appendChild(jobType);

    //create link with job title
    let link = document.createElement("a");
    article.appendChild(link);

    // create job title h2
    let jobTitle = document.createElement("h2");
    jobTitle.classList.add("job__card__position");
    jobTitle.innerHTML = element.jobTitle;
    link.appendChild(jobTitle);

    //create paragraph with company name
    let company = document.createElement("p");
    company.classList.add("job__card__company");
    company.innerHTML = element.company;
    article.appendChild(company);

    //create paragraph with location
    let location = document.createElement("p");
    location.classList.add("job__card__location");
    location.innerHTML = element.location;
    article.appendChild(location);

    jobsGrid.appendChild(article);
  });
}

//function that clears the search
let allJobsBtn = document.querySelector("#allJobs");
allJobsBtn.onclick = function () {
  document.querySelector("#search").value = "";
  filterData("");
};

//function to turn on and off dark mode
let toggleBtn = document.querySelector(".toggle__button");
let toggle = document.querySelector(".toggle");
toggleBtn.onclick = function () {
  toggle.classList.toggle("dark-theme");

  document.body.classList.toggle("dark-theme");
};
