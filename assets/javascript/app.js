/***************
Global variables
***************/

var counter = 120;
var triviaQuestions = [
  {
    questions: "What are the Seven Words You Can Never Say On Television?",
    answers: [
      "Answer number one",
      "Answer number two",
      "Answer number three",
      "Answer number four",
      "Answer number five",
      "Shit piss fuck cunt cocksucker motherfucker tits"
    ],
    correctAnswer: "Shit piss fuck cunt cocksucker motherfucker tits"
  },
  {
    questions: "Question number one?",
    answers: [
      "Answer number one",
      "Answer number two",
      "Answer number three",
      "Answer number four",
      "Answer number five",
      "Shit piss fuck cunt cocksucker motherfucker tits"
    ],
    correctAnswer: "Answer number one"
  },
  {
    questions: "Question number two",
    answers: [
      "Answer number one",
      "Answer number two",
      "Answer number three",
      "Answer number four",
      "Answer number five",
      "Shit piss fuck cunt cocksucker motherfucker tits"
    ],
    correctAnswer: "Answer number two"
  },
  {
    questions: "Question number three??",
    answers: [
      "Answer number one",
      "Answer number two",
      "Answer number three",
      "Answer number four",
      "Answer number five",
      "Shit piss fuck cunt cocksucker motherfucker tits"
    ],
    correctAnswer: "Answer number three"
  },
  {
    questions: "Question number four?",
    answers: [
      "Answer number one",
      "Answer number two",
      "Answer number three",
      "Answer number four",
      "Answer number five",
      "Shit piss fuck cunt cocksucker motherfucker tits"
    ],
    correctAnswer: "Answer number four"
  },
  {
    questions: "Question number five",
    answers: [
      "Answer number one",
      "Answer number two",
      "Answer number three",
      "Answer number four",
      "Answer number five",
      "Shit piss fuck cunt cocksucker motherfucker tits"
    ],
    correctAnswer: "Answer number five"
  }
];

var triviaAnswers = [];
var comedians = [];

/********
Functions
********/

// Selects question at random from the 'questions' array
function triviaQuestionsArrayPosition() {
  return [Math.floor(Math.random() * triviaQuestions.length)];
  console.log("ARRAY POSITION " + triviaQuestionsArrayPosition);
}

// function startGame() {
//   triviaQuestion = triviaQuestions[triviaQuestionsArrayPosition()];
//   console.log("TRIVIA QUESTION " + triviaQuestion);
//   $("#triviaQuestion").text(triviaQuestion);
// }

function timer() {
  var counter = 7;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      $("#counter").text(counter);
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
      alert("Times up!");
      clearInterval(counter);
    }
  }, 1000);
}

/*********** 
Main process
***********/

// Start game by pressing button on initial screen
// Display multiple choice answers
$("#button").click(function() {
  $("#button").toggle();
  // event.preventDefault();
  // keeps page from refreshing everytime you press button
  for (var i = 0; i < triviaQuestions.length; i++) {
    console.log("TRIVIA QUESTIONS " + triviaQuestions[i].questions);
    $("#triviaQuestion").append(
      "<h2>" + triviaQuestions[i].questions + "</h2>"
    );
    for (var j = 0; j < triviaQuestions[i].answers.length; j++) {
      console.log("TRIVIA ANSWERS " + triviaQuestions[i].answers[j]);
      $("#triviaQuestion").append(
        "<input type='radio'>" +
          triviaQuestions[i].answers[j] +
          "</input> &nbsp &nbsp"
      );
    }
  }
  timer();
  console.log("timer " + timer);
  // startGame();
});
