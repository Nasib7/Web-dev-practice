//personal info dashboard

let personalInfoHeader = "Personal Information";
document.getElementById("personal-info-header").innerHTML = `<i class="fa-solid fa-person"></i> ${personalInfoHeader}`;

let title = "YOUR LIFE DASHBOARD";
document.getElementById("title").innerHTML = `${title}`;

//work info dashboard

let workInfoHeader = "Work Information";
document.getElementById("work-info-header").innerHTML = `<i class="fa-solid fa-briefcase"></i> ${workInfoHeader}`;

//The part below is after the user clicks on the submit button and is redirected to dashboard.html

let userAnswers = localStorage.getItem('answers');
//For deleting answers from localstorage since it only saves up to 10mb
localStorage.removeItem('answers');
let savedAnswers = JSON.parse(userAnswers);

//The part below finds the id of each field and sets the textContent to the matching value of the object

//For personal info questions
document.getElementById("name").textContent = `Name: ${savedAnswers["name"]}`;
document.getElementById("age").textContent = `Age: ${savedAnswers["age"]}`;
document.getElementById("goal").textContent = `Goal: ${savedAnswers["goal"]}`;
document.getElementById("game").textContent = `Favorite game: ${savedAnswers["game"]}`;
document.getElementById("dream").textContent = `Dream: ${savedAnswers["dream"]}`;

//For work info questions
document.getElementById("company").textContent = `Company: ${savedAnswers["company"]}`;
document.getElementById("position").textContent = `Position: ${savedAnswers["position"]}`;
document.getElementById("date").textContent = `Date: ${savedAnswers["date"]}`;
document.getElementById("duration").textContent = `Duration: ${savedAnswers["duration"]}`;

