//personal info dashboard

let personalInfoHeader = "Personal Information";
document.getElementById("personal-info-header").innerHTML = `<i class="fa-solid fa-person"></i> ${personalInfoHeader}`;

let title = "YOUR LIFE DASHBOARD";
document.getElementById("title").innerHTML = `${title}`;

function Person(first, last, age, goal, game, hobby, dream) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.goal = goal;
  this.game = game;
  this.hobby = hobby;
  this.dream = dream;
}

let person1 = new Person(
    "Nasib Rahman", 
    "Mazumder", 
    22, 
    "To see life clearly without judgement and filters.", 
    "Read Dead Redemption 2", 
    "Playing guitar", 
    "To study in T10 schools in the US");
document.getElementById("name").innerHTML = `Name: ${person1.firstName} ${person1.lastName}`; 
document.getElementById("age").innerText = `Age: ${person1.age}`;
document.getElementById("goal").innerHTML = `Goal: ${person1.goal}`;
document.getElementById("game").innerHTML = `Favorite Game: ${person1.game}`;
document.getElementById("hobby").innerHTML = `Hobby: ${person1.hobby}`;
document.getElementById("dream").innerHTML = `Dream: ${person1.dream}`;
//work info dashboard

let workInfoHeader = "Work Information";
document.getElementById("work-info-header").innerHTML = `<i class="fa-solid fa-briefcase"></i> ${workInfoHeader}`;

function Job(title, company, date, duration) {
  this.title = title;
  this.company = company;
  this.date = date;
  this.duration = duration;
}

let job1 = new Job("Intern", "ARCED FOUNDATION", "07/06/2026", "3 months");
document.getElementById("company").innerHTML = `Title: ${job1.title}`; 
document.getElementById("position").innerHTML = `Company: ${job1.company}`;
document.getElementById("date").innerHTML = `Date: ${job1.date}`;
document.getElementById("duration").innerHTML = `Duration: ${job1.duration}`;