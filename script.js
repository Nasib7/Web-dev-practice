//personal info dashboard

let personalInfoHeader = "Personal Information";
$("#personal-info-header").html(`<i class="fa-solid fa-person"></i> ${personalInfoHeader}`);

let title = "YOUR LIFE DASHBOARD";
$("#title").html(`${title}`);

//work info dashboard

let workInfoHeader = "Work Information";
$("#work-info-header").html(`<i class="fa-solid fa-briefcase"></i> ${workInfoHeader}`);

//The part below is after the user clicks on the submit button and is redirected to dashboard.html

let userAnswers = localStorage.getItem('answers');
//For deleting answers from localstorage since it only saves up to 10mb
localStorage.removeItem('answers');
let savedAnswers = JSON.parse(userAnswers);

//The part below finds the id of each field and sets the textContent to the matching value of the object

//For personal info questions
$("#name").text(savedAnswers["name"]);
$("#age").text(savedAnswers["age"]);
$("#goal").text(savedAnswers["goal"]);
$("#game").text(savedAnswers["game"]);
$("#hobby").text(savedAnswers["hobby"]);
$("#dream").text(savedAnswers["dream"]);

//For work info questions
$("#company").text(savedAnswers["company"]);
$("#position").text(savedAnswers["position"]);
$("#date").text(savedAnswers["date"]);
$("#duration").text(`${savedAnswers["duration"]} months`);

//For downloading pdf.
function downloadPdf() {
    window.print();
}