let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    },

];
// question number variabe
var countQuestion = 0;

// count the score 
var score = 0;
function newquestion(e) {
    start();
   document.getElementById('totquestion').innerHTML=questions.length;
    let questiontext = document.getElementById("question");
    questiontext.innerHTML = questions[e].question;
    let option = document.getElementsByClassName("option");
    for (i = 0; i < questions[e].options.length; i++) {
        option[i].innerHTML = questions[e].options[i];
    }
}
newquestion(countQuestion);
function nextquestion() {

    if (questions.length == countQuestion +1) {
         stop();
         localStorage.setItem("socre",score);
        alert("Quiz Completed !");    
        
        window.location.href=("result.html");
      
        
    }
    else {
       
        // increment question number
        scoreCalculate(countQuestion);
        countQuestion++;
        document.getElementById('questionNo').innerHTML= countQuestion+1;
      
        // on new question no active class 
        deActive();

        // call new question
        newquestion(countQuestion);
    }


}

// add active class in the paragraph
function activate(e) {
    deActive();
    e.classList.add("active");
}
// remove the paragraph from class list
function deActive() {
    let option = document.getElementsByClassName("option");
    for (let i = 0; i < option.length; i++) {
        option[i].classList.remove('active');
    }
}

function scoreCalculate(e) {
    let active = document.getElementsByClassName("active");
    if (active[0] != null) {
        if (active[0].innerHTML == questions[e].answer) {
            score += 10;
        }
    }
}
var totTime = 30
var interval;
function timer() {
    var sec = document.getElementById("sec");
    totTime =totTime- 1;
    sec.innerHTML = totTime;
    if (totTime <= 0) {
        totTime = 30;
        sec.innerHTML = totTime;
        nextquestion();
    }
}

function start() {
    stop();
    totTime=30;
    interval = setInterval(timer, 1000)
}
function stop() {
    clearInterval(interval);
}
 function onStart(){
    document.getElementById("result").innerHTML= localStorage.getItem("score");
    document.getElementById("totresult").innerHTML= questions.length*10;
 }