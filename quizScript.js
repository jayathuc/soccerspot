// JavaScript file for quiz.html
// DOM elements for the quiz.
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const homeBtn = document.getElementById("homeBtn");
const restartBtn = document.getElementById("restartBtn");
const questionContainer = document.getElementById("questionContainer");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const timeTakenDisplay = document.getElementById("timeTaken");

// Array of quiz questions, correct answers and the index of the correct answer
const questions = [
    {
    question: "1. What year was the first FIFA World Cup held?",
    answers: ["1922", "1930", "1940", "1950"],
    correct: 1
    },
    {
    question: "2. Who is the all-time leading scorer in the history of the FIFA World Cup?",
    answers: ["Miroslav Klose","Pele","Cristiano Ronaldo", "Diego Maradona"],
    correct: 0
    },
    {
    question: "3. What is the term used for scoring three goals in a single match by one player?",
    answers: ["Hat-trick", "Brace", "Treble", "Triple-double"],
    correct: 0
    },
    {
    question: "4. What is the name of the famous trophy that is awarded to the winners of the FIFA World Cup?",
    answers: ["Golden Ball", "World Cup Trophy", "Jules Rimet Trophy", "Champions Trophy"],
    correct: 2
    },
    {
    question: "5. What country has won the most FIFA World Cup titles?",
    answers: ["Brazil", "Germany", "Argentina", "Italy"],
    correct: 0
    },
    {
    question: "6. What country hosted the first ever FIFA World Cup?",
    answers: ["Argentina","Uruguay","Brazil", "Italy"],
    correct: 1
    },
    {
    question: "7. What is the name of the international governing body of football?",
    answers: ["UEFA", "CONMEBOL", "CAF","FIFA"],
    correct: 3
    },
    {
    question: "8. What is the maximum number of players allowed on a football team?",
    answers: ["8", "9", "11", "13"],
    correct: 2
    },
    {
    question: "9. What is the name of the famous football stadium in Brazil?",
    answers: ["Wembley Stadium", "Old Trafford", "Maracana Stadium", "Camp Nou"],
    correct: 2
    },
    {
    question: "10. What is the name of the international football tournament contested by European nations?",
    answers: ["UEFA European Championship","FIFA World Cup", "Copa America","African Cup of Nations"],
    correct: 0
    }
];

// Define variables for the current question index, score, time left, and timer interval
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 120;
let timer;

// Add event listeners to the start button, next button, and restart button
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", showNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Function to start the quiz.
function startQuiz() {
  // Hide the intro section and show the quiz section
  document.getElementById("intro").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  // Setting timer interval
  timer = setInterval(updateTimer, 1000);
  // Displaing the first question
  showQuestion();
}


function showQuestion() {
  // Getting the question from the questions array based on the currentQuestionIndex.
  const question = questions[currentQuestionIndex];
  // Empty string variable to store the answer buttons.
  let answerButtons = "";
  // Iterate through the question's answers using a for loop.
  for (let i = 0; i < question.answers.length; i++) {
    // For each answer, create a button with the onClick attribute set to call the checkAnswer function
    // with the corresponding answer index, and append the button HTML to the answerButtons string.
    answerButtons += `<button onclick="checkAnswer(${i})">${question.answers[i]}</button>`;
  }
  // Set the innerHTML of the questionContainer to display the current question and the generated answer buttons.
  questionContainer.innerHTML = `
    <h3>${question.question}</h3>
    ${answerButtons}`;
}


// Function to check the user's answer.
function checkAnswer(selected) {
  // If the selected answer index = correct answer index for the current question add 10 to the score
  if (selected === questions[currentQuestionIndex].correct) {
    score += 10;
  }
  // Show the next button
  nextBtn.style.display = "block";
}

// Function to display the next quiz question.
function showNextQuestion() {
  // Increment the currentQuestionIndex
  currentQuestionIndex++;
  // If there are more questions left display the next question; else end the quiz
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
  // Hide the next button
  nextBtn.style.display = "none";
}

// Function to update the quiz timer.
function updateTimer() {
  // Decrement the timeLeft by 1 second
  timeLeft--;
  // Calculate the minutes and seconds remaining and display them in the timerDisplay element
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  // Clearing the timer interval and end the quiz if the time is over
  if (timeLeft == 0) {
    clearInterval(timer);
    endQuiz("Time's up!!");
  }
}

// Function to end the quiz and display the results.
function endQuiz(message) {
  // Clear the timer interval
  clearInterval(timer);
  // Hide the quiz section and show the results section
  document.getElementById("quiz").style.display = "none";
  document.getElementById("results").style.display = "block";
  // Display the total score and time took 
  scoreDisplay.textContent = score;
  timeTakenDisplay.textContent = message || `${2 * 60 - timeLeft} seconds`;
}

// Function to restart the quiz.
function restartQuiz() {
  // Hide the results section and show the intro section
  document.getElementById("results").style.display = "none";
  document.getElementById("intro").style.display = "block";
  // Reset the currentQuestionIndex, score, and timeLeft to their starting values
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = 120;
  // Reseting the timerDisplay to 2:00
  timerDisplay.textContent = "2:00";
}

