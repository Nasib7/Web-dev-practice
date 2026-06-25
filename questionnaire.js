
function Question(id, label, card, validation) { // creates an object constructor function to create questions
    this.id = id;
    this.label = label;
    this.card = card;
    this.validation = validation;
}

//personal info questions
let Q1 = new Question("name", "What is your name?", "personal-info-card",);
let Q2 = new Question("age", "What is your age?", "personal-info-card");
let Q3 = new Question("goal", "What is your goal in life?", "personal-info-card");
let Q4 = new Question("game", "What is your favorite game?", "personal-info-card");
let Q5 = new Question("hobby", "What is your favorite hobby?", "personal-info-card");
let Q6 = new Question("dream", "What is your dream?", "personal-info-card");

//work info questions
let Q7 = new Question("company", "In which company are you curretly empoloyed?", "work-info-card");
let Q8 = new Question("position", "In which position are you curretly empoloyed?", "work-info-card");
let Q9 = new Question("date", "What is your joining date?", "work-info-card");
let Q10 = new Question("duration", "For how long will you be empoloyed?", "work-info-card");

//stores all the questions in an array for easy access
let questions = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10]; //stores all the questions in an array for easy access

/*The showQuestion(index) function is responsible for displaying one question on screen. It:

- Grabs the container div
- Clears it
- Creates a paragraph with the question text
- Creates an input box
- Puts both inside the container

The index tells it which question from the array to show.
*/

function showQuestion(index) {
    let container = document.getElementById("question-container");
    container.innerHTML = "";

    let question = document.createElement("p");
    question.innerHTML = questions[index].label; /* Goes into the questions array,
     picks the object at position index, and grabs its label property.
     That text gets placed inside the <p> element. 
     So if index is 0, this puts "What is your name?" into the paragraph. */
    container.appendChild(question);

    let input = document.createElement("input");
    input.type = "text";
    input.id = questions[index].id; //nextQuestion() uses this id to find and read the input later
    container.appendChild(input);

    if (questions[currentQuestionIndex].id === "date") {
        input.type = "date";
    }
    else {
        input.type = "text";
    }

    if (index === 0) {
        document.getElementById("prevBtn").style.display = "none";
    }   
    else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("nextBtn").style.display = "none";
    } 
    else {
        document.getElementById("nextBtn").style.display = "inline";
    }
    if (currentQuestionIndex === questions.length - 1) {
        document.getElementById("submitBtn").style.display = "inline";
    }
    else {
        document.getElementById("submitBtn").style.display = "none";
    }
}

let currentQuestionIndex = 0;
showQuestion(currentQuestionIndex);

let answers = {};


/* (nextQuestion()) This runs every time Next is clicked. It:

- Grabs the input box using the current question's id
- Saves whatever the user typed into answers
- Increases currentQuestionIndex by 1
- Shows the next question 
*/


function nextQuestion() { 
    // only move forward if there are still questions left
    // questions.length - 1 is the index of the last question
    // if currentQuestionIndex is less than that, we're not at the end yet
    if (currentQuestionIndex < questions.length - 1) {
        let input = document.getElementById(questions[currentQuestionIndex].id); 
        /* 
        The above line does two things in one:
        1. questions[currentQuestionIndex].id  
        goes to the current question in the array and gets its id ,
        so, if you're on question 0, this gives you "name"
        2. document.getElementById("name") 
        finds the input box on the page that has that id

        So this line is finding the input box the user just typed into.
        */
        // Check if the user left the answer empty before doing anything else
        /* if (input.value === "") {
            alert("Please enter an answer before moving to the next question.");
            return; // Exit the function early if the input is empty
        }
        */
        //Validation
        // Makes sure user answers within 5-50 characters
        if (questions[currentQuestionIndex].id === "name") {

            if (input.value.length < 5 || input.value.length > 50) {
                alert("Name has to be between 5 and 50 characters.")
                return;
            }
        }
        
        /*  Stops user from answering a text. 
            Makes sure age is between 0-120.
            Makes sure age is not a decimal.
         */
        if (questions[currentQuestionIndex].id === "age") {

            if (isNaN(input.value)) {
                alert("Please enter a valid number, not text.");
                return;
            }

            if (input.value <= 0 || input.value >= 120) {
                alert("Age has to be between 0-120.");
                return;
            }

            if (!Number.isInteger(Number(input.value))) {
                alert("Age cannot be a decimal");
                console.log(input.value.type);
                return;
            }
            
        }

        answers[questions[currentQuestionIndex].id] = input.value; 
        /*
        Again two things happening:

        1. input.value = reads whatever the user typed into the input box
        2. answers[questions[currentQuestionIndex].id] =
        saves it into the answers object using the question's id as the key

        So after Q1 this gives you answers["name"] = "Nasib". 
        After Q2 it gives you answers["age"] = "21". The answers object is slowly being filled up. 
        */
        currentQuestionIndex = currentQuestionIndex + 1;
        showQuestion(currentQuestionIndex); 
        /*
        Calls showQuestion() again with the updated index. 
        So after incrementing, this shows the next question. 
        This is the line that causes the error. 
        when all questions are done, this tries to show questions[3] which doesn't exist.
        */
        console.log(answers);
   } 
}


function prevQuestion() {  
    // only go back if we're not already on the first question
    // index 0 is the first question, so anything above 0 means we can go back 
    if (currentQuestionIndex > 0) {
        let input = document.getElementById(questions[currentQuestionIndex].id);
        answers[questions[currentQuestionIndex].id] = input.value; 
        currentQuestionIndex = currentQuestionIndex - 1;
        showQuestion(currentQuestionIndex);
        console.log(answers);
    }    
}



function submitAnswers() {
    if (currentQuestionIndex === questions.length - 1) {
        let input = document.getElementById(questions[currentQuestionIndex].id);

        /*if (input.value === "") {
            alert("Please enter an answer before moving to the next question.");
            return; // Exit the function early if the input is empty

        }
        */
        answers[questions[currentQuestionIndex].id] = input.value;
        console.log(answers);  
        document.getElementById("submitBtn").style.display = "none";
        document.getElementById("prevBtn").style.display = "none";      
        document.getElementById("question-container").innerHTML = "<h2>Thank you for completing the questionnaire!</h2>";
        localStorage.setItem('answers', JSON.stringify(answers));
        setTimeout(function() {
            window.location.href = "dashboard.html";     
        } , 2000);
    }
}

