//----getting username in local storage--//

var ux = localStorage.getItem("userName");
var un = document.getElementById("player").innerHTML = ux;

// ----Questions Array of object-----
let questionsArrayObject = [
    {
        question: "What does CSS stands for ?",
        answer: "Cascading style sheet",
        options: [
            "Cascading styler session",
            "Cascading style sheet",
            "Case sensitive sheet",
            "none of the above",
        ]
    },
    {
        question: "What kind of language is CSS?",
        answer: "A stylesheet language",
        options: [
            "A markup language",
            "A stylesheet language",
            "A scripting langauge",
            "none of the above",
        ]
    },
    {
        question: "What kind of language is JS?",
        answer: "A scripting langauge",
        options: [
            "A markup language",
            "A stylesheet language",
            "A scripting langauge",
            "none of the above",
        ]
    },
    {
        question: "Js is a ______side scripting language",
        answer: "Client",
        options: [
            "Server",
            "Computer",
            "Client",
            "none of the above",
        ]
    },
    {
        question: "Html Stands for ?",
        answer: "Hyper text markup language",
        options: [
            "High text markup language",
            "Hyper text markup language",
            "High tech markup language",
            "High tech masking language",
        ]
    },
];

function showQuestions(e) {

    //question preview
    var questionEl = document.getElementById("questionPrev");
    questionEl.innerHTML = questionsArrayObject[e].question;

    //option preview
    var optionEl = document.getElementsByClassName("optionX");
    // optionEl.innerHTML="hello";

    for (var i = 0; i < optionEl.length; i++) {
        optionEl[i].innerHTML = questionsArrayObject[e].options[i];
    }

}

var questionCount = 0;

var score = 0;

function showNextQ(e) {
    if (questionCount == 4) {
        location.href = "score.html";
    };
    answerCheck();
    questionCount++
    showQuestions(questionCount);
    removeActive();
}

var activeCount = 0;

function activeClass(e) {
    removeActive()
    e.classList.add("active");
}

function removeActive() {
    var active = document.getElementsByClassName('active');
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active");
    }
}

function answerCheck() {
    var activeClass = document.getElementsByClassName("active");
    for (var i = 0; i < activeClass.length; i++) {
        if (activeClass[i].innerHTML == questionsArrayObject[questionCount].answer) {
            score++;

        }
    }
localStorage.setItem("userScore", score);
}

//Quiz box animation
function quizAnime() {
    document.getElementById("quizBox").style.top = "0px";
}