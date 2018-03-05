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
      "Answer number five",
      "Shit piss fuck cunt cocksucker motherfucker tits"
    ],
    correctAnswer: "Shit piss fuck cunt cocksucker motherfucker tits"
  },
  {
    question: "Question number one?",
    choices: [
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
    question: "Question number two",
    choices: [
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
    question: "Question number three??",
    choices: [
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
    question: "Question number four?",
    choices: [
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
    question: "Question number five",
    choices: [
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

//Store the total number of questions
var totalQuestions = questions_answers.length;

//Set the current question to display to 1
// var currentQuestion = 0;
var questions_answers = 0;

//Store the selector in a variable.
$questions = questions_answers;

//Hide all the questions
$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();

/********
Functions
********/

// function timer() {
//   var counter = 7;
//   setInterval(function() {
//     counter--;
//     if (counter >= 0) {
//       $("#counter").text(counter);
//     }
//     // Display 'counter' wherever you want to display it.
//     if (counter === 0) {
//       alert("Times up!");
//       clearInterval(counter);
//     }
//   }, 1000);
// }

//function checkAnswer() {
//   if
// }

/*********** 
Main process
***********/

// Start game by pressing button on initial screen
// Display multiple choice answers
$("#beginButton").click(function() {
  $("#beginButton").toggle();
  // Do I need this? event.preventDefault();
  // Do I need this? keeps page from refreshing everytime you press button

  // new code starts here

  $($questions.get(currentQuestion)).fadeOut(function() {
    //increment the current question by one
    currentQuestion = currentQuestion + 1;

    //if there are no more questions do stuff
    if (currentQuestion == totalQuestions) {
      var result = sum_values();

      //do stuff with the result
      alert(result);
    } else {
      //otherwise show the next question
      $($questions.get(currentQuestion)).fadeIn();
    }
  });
});

// new code stops here

for (var i = 0; i < questions_answers.length; i++) {
  console.log("QUESTION " + questions_answers[i].question);
  $("#questions_answers").append(
    "<h4>" + questions_answers[i].question + "</h4>"
  );
  for (var j = 0; j < questions_answers[i].choices.length; j++) {
    console.log("CHOICES " + questions_answers[i].choices[j]);
    $("#questions_answers").append(
      "<input type='radio' name='sameName'><br>" +
        questions_answers[i].choices[j] +
        "</input><br>"
    );
  }
}
// timer();
// console.log("timer " + timer);
// startGame();
// });
