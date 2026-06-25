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
document.getElementById("name").textContent = savedAnswers["name"];
document.getElementById("age").textContent = savedAnswers["age"];
document.getElementById("goal").textContent = savedAnswers["goal"];
document.getElementById("game").textContent = savedAnswers["game"];
document.getElementById("dream").textContent = savedAnswers["dream"];

//For work info questions
document.getElementById("company").textContent = savedAnswers["company"];
document.getElementById("position").textContent = savedAnswers["position"];
document.getElementById("date").textContent = savedAnswers["date"];
document.getElementById("duration").textContent = savedAnswers["duration"];

