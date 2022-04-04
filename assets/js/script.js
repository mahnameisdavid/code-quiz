const buttonElement = document.querySelector("#startQuiz")

var timer;
var counter  = 60;
var currentIterator = 0;

var listOfQuestions = [
    { question: "Commonly used DATA types do NOT include:", choices: ["Strings", "booleans", "alerts", "numbers"],
correctAnswer: 2 },
    { question: ""}
]

var startTimer = function () {
    timer = setInterval(() => {
        counter--;
        console.log("counter: ", counter)
    })

}

buttonElement.onclick = function () {
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