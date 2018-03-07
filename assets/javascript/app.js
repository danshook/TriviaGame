/***************
Global variables
***************/

// Store all questions, choices and answers
var questions_answers = [
  {
    question:
      "Who said \"Let's go to brunch. What a great idea! Why would you want to sleep in on a Sunday when you can go pay $18 for eggs? Now, you're thinking.\"",

    choices: [
      "Dave Chappelle",

      "Louis C.K.",

      "Anthony Jeselnik",

      "Daniel Tosh",

      "Bill Burr"
    ],

    correctAnswer: "Bill Burr"
  },

  {
    question:
      "Who said \"You have to pretend like you want to use a condom. I like to say something fun when I bring it up, but honest. I'll be like, \"You're going to want to wear this. I've had a busy month.\"",

    choices: [
      "Sarah Silverman",

      "Amy Schumer",

      "Whitney Cummings",

      "Jessica Williams",

      "Kathy Griffin"
    ],

    correctAnswer: "Amy Schumer"
  },

  {
    question:
      "Who said, \"Anal sex is a lot like spinach: if you're forced to have it as a child, you won't enjoy it as an adult.\"",

    choices: [
      "Louis C.K.",

      "Doug Stanhope",

      "Dave Attell",

      "Daniel Tosh",

      "Norm MacDonald"
    ],

    correctAnswer: "Daniel Tosh"
  },

  {
    question:
      "Who said, \"Seriously, I don't need a gun. I'm easily annoyed. I would shoot people in my house that I invited over.\"",

    choices: [
      "Chris Rock",

      "Joan Rivers",

      "George Carlin",

      "Margaret Cho",

      "Wanda Sykes"
    ],

    correctAnswer: "Wanda Sykes"
  },

  {
    question:
      'Who said, "Half of all marriages end in divorce -- and then there are the really unhappy ones."',

    choices: [
      "Phyllis Diller",

      "Lily Tomlin",

      "Betty White",

      "Lucille Ball",

      "Joan Rivers"
    ],

    correctAnswer: "Joan Rivers"
  },

  {
    question:
      'Who said, "The meal is not over when I\'m full. The meal is over when I hate myself."',

    choices: [
      "Louie Anderson",

      "Ralphie May",

      "Jim Gaffigan",

      "Gabriel Iglesias",

      "Louis C.K."
    ],

    correctAnswer: "Louis C.K."
  },
  {
    question:
      'Who said "All these years, I thought I liked chicken cause it was delicious; but turns out, I\'m genetically predisposed to liking chicken!"',

    choices: [
      "Dave Chappelle",

      "Eddie Murphy",

      "Richard Pryor",

      "Kevin Hart",

      "Bernie Mac"
    ],

    correctAnswer: "Dave Chappelle"
  },

  {
    question:
      "Who said, \"I feel sorry for people who don't drink or do drugs. Because someday they're going to be in a hospital bed, dying, and they won't know why.\"",

    choices: [
      "Chris Rock",

      "Richard Pryor",

      "Redd Foxx",

      "Bernie Mac",

      "Cedric the Entertainer"
    ],

    correctAnswer: "Redd Foxx"
  },

  {
    question:
      'Who said, "As a housewife, I feel if the kids are still alive when my husband gets home from work, then hey, I\'ve done my job"',

    choices: [
      "Roseanne Barr",

      "Amy Poehler",

      "Tina Fey",

      "Ali Wong",

      "Joan Rivers"
    ],

    correctAnswer: "Roseanne Barr"
  },

  {
    question:
      'Who said, "After I quit drinking, I realized I am the same asshole I always was; I just have fewer dents in my car"',

    choices: [
      "Doug Stanhope",

      "George Carlin",

      "David letterman",

      "Robin Williams",

      "Russell Brand"
    ],

    correctAnswer: "Robin Williams"
  },

  {
    question:
      'Who said, "I\'ve been getting into astronomy so I installed a skylight. The people who live above me are furious."',

    choices: [
      "Nick Swardson",

      "Brian Regan",

      "T.J. Miller",

      "Ron White",

      "Steven Wright"
    ],

    correctAnswer: "Steven Wright"
  },

  {
    question:
      'Who said, "Black guys with dirty sneakers scare the shit out of me."',

    choices: [
      "Robin Williams",

      "Zach Galifianakis",

      "Bill Burr",

      "Mike Birbiglia",

      "Louis C.K."
    ],

    correctAnswer: "Bill Burr"
  }
];

// Store the total number of questions

var totalQuestions = questions_answers.length;

// Set the current question to display

var currentQuestion = 0;

// Track right and wrong answers

var right = 0;

var wrong = 0;

// Set the max Timer amount (in seconds) and the countdown amount

var maxTimer = 25;

var counter = maxTimer;

// Creates a timer that can be turned off and on and reset

var myVar = setInterval(function() {
  timer();
}, 1000);

var correctAnswerText = "";

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
  if (
    questions_answers[currentQuestion].choices[guessNum] ===
    questions_answers[currentQuestion].correctAnswer
  ) {
    // if (guessNum === questions_answers[currentQuestion].correctAnswer) {
    alert("Correct");

    right++;
  } else {
    //   console.log("Each input value: " + $(this).val());
    // });
    alert("Wrong. The correct answer is: " + correctAnswerText);

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
    correctAnswerText = questions_answers[currentQuestion].correctAnswer;
    for (var i = 0; i <= 4; i++) {
      $("#answers").append(
        "<input type=radio id='" +
          i +
          // "' value='" +
          // questions_answers[questionNum].choices[i] +
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
