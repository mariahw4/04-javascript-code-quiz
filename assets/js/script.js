// variables (hr is a horizonal rule)
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var timerCount = 75;
var questions = document.querySelector("#questions");
var homePage = document.querySelector(".landing-page");
var wrongAnswer ;
var rightAnsewr ;


// //  create variables of home page elements
var homePageH1 = document.querySelector("h1");
var homePageText = document.getElementById("home-text");
var homePageStartButton = document.getElementById("start-button");

// fill home page elements
homePageH1.textContent = "Coding Challenge Quiz";
homePageText.textContent = "Try to answer the following questions before the time runs out! Beware, an incorrect answer will penalize you by 15 seconds!";
homePageStartButton.textContent = "Click to Start";


// Question 1:
function runQuestion1() {
    // //  create variables of Q1 (question 1) elements
    var q1H2 = document.querySelector("h2");
    var ulQ1 = document.querySelector("ul");
    var li1Q1 = document.createElement("button");
    var li2Q1 = document.createElement("button");
    var li3Q1 = document.createElement("button");
    var li4Q1 = document.createElement("button");
    var queryResult = document.querySelector(".resultant");
    var nextButton = document.createElement("button");
    
    // fill Q1 elements (b is correct)
    q1H2.textContent = "Which is not a primative type?";
    li1Q1.textContent = "String";
    li2Q1.textContent = "Object";
    li3Q1.textContent = "Null";
    li4Q1.textContent = "Number";
    queryResult.textContent = "answer is...";
    nextButton.textContent = " ";
    
    // append Q1 elements to DOM
    ulQ1.appendChild(li1Q1);
    ulQ1.appendChild(li2Q1);
    ulQ1.appendChild(li3Q1);
    ulQ1.appendChild(li4Q1);
   

    // what happens when options are clicked
    li1Q1.addEventListener("click", function (){
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q1.disabled = true;
        li2Q1.disabled = true;
        li3Q1.disabled = true;
        li4Q1.disabled = true;
    })
    li2Q1.addEventListener("click", function(){
        queryResult.textContent = "Correct!";
        queryResult.setAttribute("style", "right");
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q1.disabled = true;
        li2Q1.disabled = true;
        li3Q1.disabled = true;
        li4Q1.disabled = true;
    })
    li3Q1.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q1.disabled = true;
        li2Q1.disabled = true;
        li3Q1.disabled = true;
        li4Q1.disabled = true;
    })
    li4Q1.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q1.disabled = true;
        li2Q1.disabled = true;
        li3Q1.disabled = true;
        li4Q1.disabled = true;
    })
    nextButton.addEventListener("click", function() {
        li1Q1.setAttribute("style", "display:none");
        li2Q1.setAttribute("style", "display:none");
        li3Q1.setAttribute("style", "display:none");
        li4Q1.setAttribute("style", "display:none");
        runQuestion2()
    })

    }


// Question 2
function runQuestion2() {
    // //  create variables of Q2 elements
    var q2H2 = document.querySelector("h2");
    var ulQ2 = document.querySelector("ul");
    var li1Q2 = document.createElement("button");
    var li2Q2 = document.createElement("button");
    var li3Q2 = document.createElement("button");
    var li4Q2 = document.createElement("button");
    var queryResult = document.querySelector(".resultant");
    var nextButton = document.createElement("button");

    
    // fill Q2 elements (c is correct)
    q2H2.textContent = "Which operator means same type and value?";
    li1Q2.textContent = "=";
    li2Q2.textContent = "==";
    li3Q2.textContent = "===";
    li4Q2.textContent = "====";
    queryResult.textContent = "answer is...";

    
    // append Q2 elements to DOM
    ulQ2.appendChild(li1Q2);
    ulQ2.appendChild(li2Q2);
    ulQ2.appendChild(li3Q2);
    ulQ2.appendChild(li4Q2);

     // what happens when options are clicked
     li1Q2.addEventListener("click", function (){
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount-15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q2.disabled = true;
        li2Q2.disabled = true;
        li3Q2.disabled = true;
        li4Q2.disabled = true;
    })
    li2Q2.addEventListener("click", function(){
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        nextButton.textContent = "Next Question"
        timerCount - 15;
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q2.disabled = true;
        li2Q2.disabled = true;
        li3Q2.disabled = true;
        li4Q2.disabled = true;
    })
    li3Q2.addEventListener("click", function() {
        queryResult.textContent = "Correct";
        queryResult.setAttribute("style", "right");
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q2.disabled = true;
        li2Q2.disabled = true;
        li3Q2.disabled = true;
        li4Q2.disabled = true;
    })
    li4Q2.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q2.disabled = true;
        li2Q2.disabled = true;
        li3Q2.disabled = true;
        li4Q2.disabled = true;
    })
    nextButton.addEventListener("click", function() {
        li1Q2.setAttribute("style", "display:none");
        li2Q2.setAttribute("style", "display:none");
        li3Q2.setAttribute("style", "display:none");
        li4Q2.setAttribute("style", "display:none");
        runQuestion3()
    })

}

// question 3
function runQuestion3() {
    // //  create variables of Q3 elements
    var q3H2 = document.querySelector("h2");
    var ulQ3 = document.querySelector("ul");
    var li1Q3 = document.createElement("button");
    var li2Q3 = document.createElement("button");
    var li3Q3 = document.createElement("button");
    var li4Q3 = document.createElement("button");
    var queryResult = document.querySelector(".resultant");
    var nextButton = document.createElement("button");

    
    // fill Q3 elements (dynamically b is correct)
    q3H2.textContent = "Is JavaScript a statically or dynamically typed language?";
    li1Q3.textContent = "Statically";
    li2Q3.textContent = "Dynamically";
    li3Q3.textContent = "Neither";
    li4Q3.textContent = "Both";
    queryResult.textContent = "answer is...";

    
    // append Q3 elements to DOM
    ulQ3.appendChild(li1Q3);
    ulQ3.appendChild(li2Q3);
    ulQ3.appendChild(li3Q3);
    ulQ3.appendChild(li4Q3);

     // what happens when options are clicked
     li1Q3.addEventListener("click", function (){
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount-15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q3.disabled = true;
        li2Q3.disabled = true;
        li3Q3.disabled = true;
        li4Q3.disabled = true;
    })
    li2Q3.addEventListener("click", function(){
        queryResult.textContent = "Correct!";
        queryResult.setAttribute("style", "right");
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q3.disabled = true;
        li2Q3.disabled = true;
        li3Q3.disabled = true;
        li4Q3.disabled = true;
    })
    li3Q3.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q3.disabled = true;
        li2Q3.disabled = true;
        li3Q3.disabled = true;
        li4Q3.disabled = true;
    })
    li4Q3.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q3.disabled = true;
        li2Q3.disabled = true;
        li3Q3.disabled = true;
        li4Q3.disabled = true;
    })
    nextButton.addEventListener("click", function() {
        li1Q3.setAttribute("style", "display:none");
        li2Q3.setAttribute("style", "display:none");
        li3Q3.setAttribute("style", "display:none");
        li4Q3.setAttribute("style", "display:none");
        runQuestion4()
    })

}

// Question 4
function runQuestion4() {
    // //  create variables of Q4  elements
    var q4H2 = document.querySelector("h2");
    var ulQ4 = document.querySelector("ul");
    var li1Q4 = document.createElement("button");
    var li2Q4 = document.createElement("button");
    var li3Q4 = document.createElement("button");
    var li4Q4 = document.createElement("button");
    var queryResult = document.querySelector(".resultant");
    var nextButton = document.createElement("button");

    
    // fill Q4 elements (a global)
    q4H2.textContent = "Which type of variable can be used everywhere in the JavaScript Code?";
    li1Q4.textContent = "Global";
    li2Q4.textContent = "Universal";
    li3Q4.textContent = "Root";
    li4Q4.textContent = "Local";
    queryResult.textContent = "answer is...";

    
    // append Q4 elements to DOM
    ulQ4.appendChild(li1Q4);
    ulQ4.appendChild(li2Q4);
    ulQ4.appendChild(li3Q4);
    ulQ4.appendChild(li4Q4);

     // what happens when options are clicked
     li1Q4.addEventListener("click", function (){
        queryResult.textContent = "Correct!";
        queryResult.setAttribute("style", "right");
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q4.disabled = true;
        li2Q4.disabled = true;
        li3Q4.disabled = true;
        li4Q4.disabled = true;
        })
    li2Q4.addEventListener("click", function(){
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        timerCount-15;
        li1Q4.disabled = true;
        li2Q4.disabled = true;
        li3Q4.disabled = true;
        li4Q4.disabled = true;
    })
    li3Q4.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q4.disabled = true;
        li2Q4.disabled = true;
        li3Q4.disabled = true;
        li4Q4.disabled = true;
    })
    li4Q4.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q4.disabled = true;
        li2Q4.disabled = true;
        li3Q4.disabled = true;
        li4Q4.disabled = true;
    })
    nextButton.addEventListener("click", function() {
        li1Q4.setAttribute("style", "display:none");
        li2Q4.setAttribute("style", "display:none");
        li3Q4.setAttribute("style", "display:none");
        li4Q4.setAttribute("style", "display:none");
        runQuestion5()
    })

}

// Question 5
function runQuestion5() {
    // //  create variables of Q5 elements
    var q5H2 = document.querySelector("h2");
    var ulQ5 = document.querySelector("ul");
    var li1Q5 = document.createElement("button");
    var li2Q5 = document.createElement("button");
    var li3Q5 = document.createElement("button");
    var li4Q5 = document.createElement("button");
    var queryResult = document.querySelector(".resultant");
    var nextButton = document.createElement("button");

    
    // fill Q5 elements (d all of the above)
    q5H2.textContent = "What can arrays in JavaScript store?";
    li1Q5.textContent = "Numbers and Strings";
    li2Q5.textContent = "Booleans";
    li3Q5.textContent = "Other Arrays";
    li4Q5.textContent = "All of the above";
    queryResult.textContent = "answer is...";

    
    // append Q5 elements to DOM
    ulQ5.appendChild(li1Q5);
    ulQ5.appendChild(li2Q5);
    ulQ5.appendChild(li3Q5);
    ulQ5.appendChild(li4Q5);

     // what happens when options are clicked
     li1Q5.addEventListener("click", function (){
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount-15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q5.disabled = true;
        li2Q5.disabled = true;
        li3Q5.disabled = true;
        li4Q5.disabled = true;
    })
    li2Q5.addEventListener("click", function(){
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q5.disabled = true;
        li2Q5.disabled = true;
        li3Q5.disabled = true;
        li4Q5.disabled = true;
    })
    li3Q5.addEventListener("click", function() {
        queryResult.textContent = "Sorry! Incorrect";
        queryResult.setAttribute("style", "color:red");
        timerCount - 15;
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q5.disabled = true;
        li2Q5.disabled = true;
        li3Q5.disabled = true;
        li4Q5.disabled = true;
    })
    li4Q5.addEventListener("click", function() {
        queryResult.textContent = "Correct!";
        queryResult.setAttribute("style", "right");
        nextButton.textContent = "Next Question"
        nextButton.setAttribute("style", "margin-left: 3em");
        queryResult.append(nextButton);
        li1Q5.disabled = true;
        li2Q5.disabled = true;
        li3Q5.disabled = true;
        li4Q5.disabled = true;
    })
    nextButton.addEventListener("click", function() {
        li1Q5.setAttribute("style", "display:none");
        li2Q5.setAttribute("style", "display:none");
        li3Q5.setAttribute("style", "display:none");
        li4Q5.setAttribute("style", "display:none");
        nextButton.setAttribute("style", "display:none");
        q5H2.setAttribute("style", "display:none");
        queryResult.setAttribute("style", "display:none");
    
        quizComplete()
    })

}
function quizComplete() {
    // create components for page
    var quizCompleteEl = document.getElementById("quiz-complete");
    var quizCompleteH2 = document.createElement("h2");
    var quizCompleteText = document.createElement("p");
    var nameEntryForm = document.createElement("input");


    // fill elements with text
    quizCompleteH2.textContent = "Quiz Complete!";
    quizCompleteText.textContent = "Congratulations";

    // style elements
    quizCompleteText.setAttribute("style", "text-align: center");
    nameEntryForm.setAttribute("form", "text");

    // append elements to page
    quizCompleteEl.appendChild(quizCompleteH2);
    quizCompleteEl.appendChild(quizCompleteText);
    quizCompleteEl.appendChild(nameEntryForm);
}

function highScores() {
    var highScoresEl = document.getElementById("highScores");
    var highScoresH2 = document.createElement("h2");
    var highScoresText = document.createElement("p");


    // fill elements with text
    highScoresH2.textContent = "High Scores";
    highScoresText.textContent = " ";


    // style elements
    highScoresText.setAttribute("style", "text-align: center");
    
    // append elements to page
    highScoresEl.appendChild(highScoresH2);
    highScoresEl.appendChild(highScoresText);

}

// sets the timer and interval
function setTime() {
    var timerInterval = setInterval(function() {
      timerCount--;
      timer.textContent = timerCount + " seconds left.";
    
      
    //  need to set so if wrong question is picked time is deducted by 15sec
    // need to set so if time reaches zero we go straight to high score page

      if(timerCount === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
    //     // startQuiz();
      }
  
    }, 1000);
  }

// starts the quiz
function startQuiz() {
    timer.textContent = timerCount;
    setTime();

    // clears the homepage to get ready for quiz
    homePage.setAttribute("style", "display:none");

    // load and run question 1
    runQuestion1();

  }
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);


