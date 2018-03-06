/***************
Global variables
***************/

var questions_answers = [
  {
    question: "What are the Seven Words You Can Never Say On Television?",

    choices: [
      "Answer number one",

      "Answer number two",

      "Answer number three",

      "Answer number four",

      "Correct"
    ],

    correctAnswer: 4
  },

  {
    question: "Question number one",

    choices: [
      "Answer number one",

      "Correct",

      "Answer number three",

      "Answer number four",

      "Answer number five"
    ],

    correctAnswer: 1
  },

  {
    question: "Question number two",

    choices: [
      "Answer number one",

      "Answer number two",

      "Answer number three",

      "Correct",

      "Answer number five"
    ],

    correctAnswer: 3
  },

  {
    question: "Question number three",

    choices: [
      "Answer number one",

      "Answer number two",

      "Answer number three",

      "Answer number four",

      "Correct"
    ],

    correctAnswer: 4
  },

  {
    question: "Question number four",

    choices: [
      "Answer number one",

      "Answer number two",

      "Answer number three",

      "Answer number four",

      "ABCDEFG"
    ],

    correctAnswer: 4
  },

  {
    question: "Question number five",

    choices: [
      "Answer number one",

      "Answer number two",

      "Answer number three",

      "Answer number four",

      "ABCDEFG"
    ],

    correctAnswer: 4
  }
];

//Store the total number of questions

var totalQuestions = questions_answers.length;

//Set the current question to display

var currentQuestion = 0;

// Track right and wrong answers

var right = 0;

var wrong = 0;

// Set the max Timer amount (in seconds) and the countdown amount

var maxTimer = 10;

var counter = maxTimer;

// Creates a timer that can be turned off and on and reset

var myVar = setInterval(function() {
  timer();
}, 1000);

/********
Functions
********/

// Stops the timer

function stopTimer() {
  clearInterval(myVar);
}

// Restarts the timer with the max amount and displays this first value

function startTimer() {
  counter = maxTimer;

  myVar = setInterval(function() {
    timer();
  }, 1000);

  $("#counter").text(maxTimer);
}

// This runs at each timer interval - every second - when the timer is running

// Counts down, displays the current timer and interrupts if the person is out of time

function timer() {
  counter--;

  if (counter >= 0) {
    $("#counter").text(counter);
  }

  if (counter === 0) {
    $("#counter").text(0);

    alert("Time's up!");

    stopTimer();

    wrong++;

    currentQuestion++;

    displayCurrent(currentQuestion);
  }
}

// Onclick event for the answers.  Checks to see if the selected answer is right or wrong

// and then updates everything accordingly before going on to the next question

function guessMade(guessNum) {
  stopTimer();

  // test for correct response and let them know how they did

  if (guessNum === questions_answers[currentQuestion].correctAnswer) {
    alert("Correct");

    right++;
  } else {
    alert("Wrong");

    wrong++;
  }

  currentQuestion++; // go to the next question

  displayCurrent(currentQuestion);
}

// Checks if we have gone through all of the questions

// If not, displays the current question and potential answers, then restarts the timer

// If yes, gives the game ending info

function displayCurrent(questionNum) {
  if (currentQuestion < totalQuestions) {
    $("#question").text(questions_answers[questionNum].question);

    $("#answers").text("");

    for (var i = 0; i <= 4; i++) {
      $("#answers").append(
        "<input type=radio id='" +
          i +
          "' onclick='guessMade(" +
          i +
          ")'>" +
          questions_answers[questionNum].choices[i] +
          "</input><br>"
      );
    }

    startTimer();
  } else {
    // we are done

    $("#question").text(
      "You finished with " + right + " correct and " + wrong + " incorrect."
    );

    $("#answers").text("");
  }
}

/***********
Main process
***********/

// The timer starts when it's created above, so stop it until the game starts

stopTimer();

$("#clockLabel").hide(); // don't want the counter on until we start

// Start game by pressing button on initial screen

$("#beginButton").click(function() {
  $("#beginButton").toggle();

  // Display the first question

  $("#clockLabel").show();

  displayCurrent(currentQuestion);
});
