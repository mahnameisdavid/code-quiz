const startButton = document.querySelector("#startQuiz")

startButton.addEventListener('click', startQuiz)

var timer;
var counter  = 10;
var currentIterator = 0;


// list of questions used for the quiz along with the choices and correct answers
var listOfQuestions = [
    { question: "Commonly used DATA types do NOT include:", choices: ["Strings", "booleans", "alerts", "numbers"],
correctAnswer: 2 },
    { question: "The condition in an if/else statement is enclosed with ______", choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
correctAnswer: 2 },
    { question: "Arrays in Javascript can be used to store ______", choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
correctAnswer: 3 },
    { question: "String values must be enclosed within ____ when being assigned to variables.", choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
correctAnswert: 2 },
    { question: "A very useful tool used during development and debuggin for printing content to the debugger is:", choices: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. conosle.log"],
    correctAnswer: 3 },
]

varisGameOver = false;

var listOfQuestions = document.getElementById("questions")

//start the game off and hide the screen
function startQuiz() {
    console.log('Quiz has begun');
    var startScreenElement = document.getElementById("main-page");
    startScreenElement.setAttribute("class", "hide");

    listOfQuestions.removeAttribute("class");
}

// as the start question begins this timer will go until quiz is finished
var startTimer = function () {
    timer = setInterval (() => {
        counter--;
        console.log("counter: ", counter)

        if (counter === 0) {
            isGameover = true;
            stopTimer();
            console.log("ALL DONE!")
        }
    }, 1000)
}


var stopTimer = function () {

    clearInterval(timer)
}

var nextQuestion = function () {
    const currentIterator = iterator;

    const currentQuestion = ListofQuestions[currentIterator];

    return currentQuestion;

}

var showQuestion = function () {
    const question = nextQuestion();

    const questionWrapperEl = doucment.createElement("div")

    for (var i = 0; question.choices.length; i++) {
        
        const questionButton = document.createElement("button");
        questionButton.textContent = question.choices[i];

        questionWrapperEl.appendChild(questionButton);

    }
    
}

startButton.onclick = function () {
    startTimer();
}

/*

TODO: When user clicks the start button
Then we start the timer
Then we need to show the list of quesitons

TODO: When user selects the question
Then verify to show the list of questions

TODO: If the answe is correct
We then verify if they have the correct answer or not\

TODO: If the answe is wrong
Then the next question will show and the timer will cut shorter

TODO: if the timer went out or there are no more question the game is over
we then give user the option to see their highscore and enter

TODO: we then biild a seperate html with the users high score


*/