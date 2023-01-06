// variables (hr is a horizonal rule)
var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var timerCount = 75;
var questions = document.querySelector(".questions");
var homePage = document.querySelector(".landing-page");

// //  create variables of home page elements
var homePageH1 = document.querySelector("h1");
var homePageText = document.getElementById("home-text");
var homePageStartButton = document.getElementById("start-button");

// fill home page elements
homePageH1.textContent = "Coding Challenge Quiz";
homePageText.textContent = "Try to answer the following questions before the time runs out! Beware, an incorrect answer will penalize you by 15 seconds!";
homePageStartButton.textContent = "Click to Start";


// Question 1:
function Question1() {
    // //  create variables of Q1 (question 1) elements
    var q1H2 = document.querySelector("h2");
    var ulQ1 = document.querySelector("ul");
    var li1Q1 = document.createElement("button");
    var li2Q1 = document.createElement("button");
    var li3Q1 = document.createElement("button");
    var li4Q1 = document.createElement("button");
    
    
    // fill Q1 elements (b is correct)
    q1H2.textContent = "Which is not a primative type?";
    li1Q1.textContent = "String";
    li2Q1.textContent = "Object";
    li3Q1.textContent = "Null";
    li4Q1.textContent = "Number";
    
    // append Q1 elements to DOM
    ulQ1.appendChild(li1Q1);
    ulQ1.appendChild(li2Q1);
    ulQ1.appendChild(li3Q1);
    ulQ1.appendChild(li4Q1);
}

// Question 2
function Question2() {
    // //  create variables of Q2 elements
    var q2H2 = document.querySelector("h2");
    var ulQ2 = document.querySelector("ul");
    var li1Q2 = document.createElement("button");
    var li2Q2 = document.createElement("button");
    var li3Q2 = document.createElement("button");
    var li4Q2 = document.createElement("button");
    
    
    // fill Q2 elements (c is correct)
    q2H2.textContent = "Which operator means same type and value?";
    li1Q2.textContent = "=";
    li2Q2.textContent = "==";
    li3Q2.textContent = "===";
    li4Q2.textContent = "====";
    
    // append Q2 elements to DOM
    ulQ2.appendChild(li1Q2);
    ulQ2.appendChild(li2Q2);
    ulQ2.appendChild(li3Q2);
    ulQ2.appendChild(li4Q2);
}

// question 3
function Question3() {
    // //  create variables of Q3 elements
    var q3H2 = document.querySelector("h2");
    var ulQ3 = document.querySelector("ul");
    var li1Q3 = document.createElement("button");
    var li2Q3 = document.createElement("button");
    var li3Q3 = document.createElement("button");
    var li4Q3 = document.createElement("button");
    
    
    // fill Q3 elements (dynamically b is correct)
    q3H2.textContent = "Is JavaScript a statically or dynamically typed language?";
    li1Q3.textContent = "Statically";
    li2Q3.textContent = "Dynamically";
    li3Q3.textContent = "Neither";
    li4Q3.textContent = "Both";
    
    // append Q3 elements to DOM
    ulQ3.appendChild(li1Q3);
    ulQ3.appendChild(li2Q3);
    ulQ3.appendChild(li3Q3);
    ulQ3.appendChild(li4Q3);
}

// Question 4
function Question4() {
    // //  create variables of Q4  elements
    var q4H2 = document.querySelector("h2");
    var ulQ4 = document.querySelector("ul");
    var li1Q4 = document.createElement("button");
    var li2Q4 = document.createElement("button");
    var li3Q4 = document.createElement("button");
    var li4Q4 = document.createElement("button");
    
    
    // fill Q4 elements (a global)
    q4H2.textContent = "Which type of variable can be used everywhere in the JavaScript Code?";
    li1Q4.textContent = "Global";
    li2Q4.textContent = "Universal";
    li3Q4.textContent = "Root";
    li4Q4.textContent = "Local";
    
    // append Q4 elements to DOM
    ulQ4.appendChild(li1Q4);
    ulQ4.appendChild(li2Q4);
    ulQ4.appendChild(li3Q4);
    ulQ4.appendChild(li4Q4);
}

// Question 5
function Question5() {
    // //  create variables of Q5 elements
    var q5H2 = document.querySelector("h2");
    var ulQ5 = document.querySelector("ul");
    var li1Q5 = document.createElement("button");
    var li2Q5 = document.createElement("button");
    var li3Q5 = document.createElement("button");
    var li4Q5 = document.createElement("button");
    
    
    // fill Q5 elements (d all of the above)
    q5H2.textContent = "What can arrays in JavaScript store?";
    li1Q5.textContent = "Numbers and Strings";
    li2Q5.textContent = "Booleans";
    li3Q5.textContent = "Other Arrays";
    li4Q5.textContent = "All of the above";
    
    // append Q5 elements to DOM
    ulQ5.appendChild(li1Q5);
    ulQ5.appendChild(li2Q5);
    ulQ5.appendChild(li3Q5);
    ulQ5.appendChild(li4Q5);
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
    Question1();


  }
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);


