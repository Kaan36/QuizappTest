let questions = [
    {
        "question": "In welcher Position schlafen Pferde tief und fest?",
        "answer_1": "im Stehen",
        "answer_2": "im Liegen",
        "answer_3": "an der Stallwand lehnend",
        "answer_4": "im Sitzen",
        "right_answer": 2,
        "image": "/images/horses.jpg"
    },
    {
        "question": "Welches dieser Tiere läuft am schnellsten?",
        "answer_1": "Gepard",
        "answer_2": "Jaguar",
        "answer_3": "Vogel Strauss",
        "answer_4": "Esel",
        "right_answer": 1,
        "image": "/images/huskies.jpg"

    },
    {
        "question": "Welches Obst wird weltweit am meisten gegessen?",
        "answer_1": "Banane",
        "answer_2": "Apfelsine",
        "answer_3": "Apfel",
        "answer_4": "Kirsche",
        "right_answer": 1,
        "image": "/images/fruit.jpg"
    },
    {
        "question": "Welches Tier frisst die giftigen Fliegenpilze, ohne krank zu werden?",
        "answer_1": "Rothirsch",
        "answer_2": "Hase",
        "answer_3": "Dachs",
        "answer_4": "Eidechse",
        "right_answer": 2,
        "image": "/images/fly-agaric.jpg"
    },
    {
        "question": "Wie heißt der weibliche Geschlechtsteil der Blume?",
        "answer_1": "Blütenblatt",
        "answer_2": "Staubbeutel",
        "answer_3": "Stempel",
        "answer_4": "Stange",
        "right_answer": 3,
        "image": "/images/nature.jpg"
    },
    {
        "question": "Welche Farbe können Bienen nicht sehen?",
        "answer_1": "Grün",
        "answer_2": "Rot",
        "answer_3": "Violet",
        "answer_4": "Gelb",
        "right_answer": 2,
        "image": "/images/bee.jpg"
    },
    {
        "question": "Welches Tier kann ein Jahr lang ohne Nahrung leben?",
        "answer_1": "Krokodil",
        "answer_2": "Chamäleon",
        "answer_3": "Elefant",
        "answer_4": "Boa (eine Schlangenart)",
        "right_answer": 4,
        "image": "/images/nile-crocodile.jpg"
    },
    {
        "question": "Wie tief kann ein Pottwal tauchen?",
        "answer_1": "500 Meter",
        "answer_2": "750 Meter",
        "answer_3": "1000 Meter",
        "answer_4": "1500 Meter",
        "right_answer": 3,
        "image": "/images/whale.jpg"
    },
    {
        "question": "Welcher Baum befruchtet sich selbst?",
        "answer_1": "Tanne",
        "answer_2": "Walnussbaum",
        "answer_3": "Kiefer",
        "answer_4": "Olivenbaum",
        "right_answer": 1,
        "image": "/images/trees.jpg"
    },
    {
        "question": "Wie atmen Insekten?",
        "answer_1": "Sie nehmen Sauerstoff über die Haut auf",
        "answer_2": "Sie haben Kiemen wie die Fische",
        "answer_3": "Sie haben Atemlöcher",
        "answer_4": "Sie haben eine Lunge zum Atmen",
        "right_answer": 3,
        "image": "/images/queen-ant.jpg"
    },
    {
        "question": "Woraus bestehen Flechten?",
        "answer_1": "aus Algen und Pilzen",
        "answer_2": "aus Moos",
        "answer_3": "aus Rinde",
        "answer_4": "aus Wurzeln",
        "right_answer": 1,
        "image": "/images/lichen.jpg"
    },
    {
        "question": "Welches Tier ähnelt dem Menschen genetisch zu 99 Prozent?",
        "answer_1": "Hausschwein",
        "answer_2": "Gorilla",
        "answer_3": "Schimpanse",
        "answer_4": "Pinguin",
        "right_answer": 3,
        "image": "/images/dna.jpg"
    },
    {
        "question": "Welche Blume liefert das kostbare gelbe Gewürz Safran?",
        "answer_1": "Krokus",
        "answer_2": "Hibiskus",
        "answer_3": "Tulpe",
        "answer_4": "Rose",
        "right_answer": 1,
        "image": "/images/saffron.jpg"
    },
    {
        "question": "Wie heißt das ausgedehnte Wurzelgeflecht der Pilze?",
        "answer_1": "Chlorophyll",
        "answer_2": "Myzel",
        "answer_3": "Pfifferling",
        "answer_4": "rootswill",
        "right_answer": 2,
        "image": "/images/mushrooms.jpg"
    },
    {
        "question": "Welches dieser Tiere legt Eier?",
        "answer_1": "Blauwal",
        "answer_2": "Kragenbär",
        "answer_3": "Schnabeltier",
        "answer_4": "Pferd",
        "right_answer": 3,
        "image": "/images/duck.jpg"
    },
]

let currentQuestion = 0;
let intervalID;
let count = 10;
let selectionValue;
let score = 0;

function renderQuestions() {
    let body = document.getElementById('body');
    body.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-md">
            <a class="navbar-brand" href="#" id="question-header">Willkommen im Quiz-Duell</a>
        </div>
    </nav>
    <nav class="navbar bg-success navbar-light d-none" id="success-bar">
        <div class="container-md text-center" id="success-intern-bar">

        </div>
    </nav>
    <div class="card" style="width: 99%;">
        <div class="card-image">

            <div id="box-left" class="box-left">
                <div id="timer" class="timer fw-bold text-center fs-1 d-none">
                    <span id="time">10</span>
                </div>
            </div>
            <div id="question-image" class="box-center">

            </div>

            <div class="box-right">

            </div>
        </div>

        <div id="answer-main-box" class="answer-main-box">
            <div class="answer-box-left">
                <div class="card-body" id="card-body1">
                    <div class="card red fw-bold" onclick="setAnswer('answer_1')">
                        <div class="card-body" id="answer_1">
                            This is some text within a card body.
                        </div>
                    </div>

                    <div class="card yellow fw-bold" onclick="setAnswer('answer_2')">
                        <div class="card-body" id="answer_2">
                            This is some text within a card body.
                        </div>
                    </div>
                </div>
            </div>
            <div class="answer-box-right">
                <div class="card-body" id="card-body2">
                    <div class="card bg-primary fw-bold" onclick="setAnswer('answer_3')">
                        <div class="card-body" id="answer_3">
                            This is some text within a card body.
                        </div>
                    </div>

                    <div class="card bg-success fw-bold" onclick="setAnswer('answer_4')">
                        <div class="card-body" id="answer_4">
                            This is some text within a card body.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];


    document.getElementById('question-header').innerHTML = question['question'];
    document.getElementById('question-image').innerHTML = `<img src="${question['image']}" class="card-img-top mainImage">`;
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    count = 10;
    startTimer();
}

function startTimer() {
    console.log('timerStart');
    document.getElementById('timer').classList.remove('d-none');
    intervalID = setInterval(function () {
        count -= 1;
        if (count <= 0) {
            count = 0;
            getResult();
            console.log('Result active')
            clearInterval(intervalID);
        }
        document.getElementById('time').innerText = count;
    }, 1000);

}

function setAnswer(selection) {
    selectionValue = selection;
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    document.getElementById(selection).parentNode.style = 'background-color: darkgreen !important';

    let timer = +document.getElementById('time').innerText;
    let timeValue = (timer * 1000);

    setTimeout(function () {
        if (selectedQuestionNumber == question['right_answer']) {
            document.getElementById('success-bar').classList.remove('d-none');
            document.getElementById('success-intern-bar').innerHTML = `
                <a class="navbar-brand color" href="#">Du hast die Richtige Antwort!!!!</a>
                `;
            score++;
        } else {
            document.getElementById('success-bar').classList.remove('d-none');
            document.getElementById('success-bar').classList.add('bg-danger');
            document.getElementById('success-intern-bar').innerHTML = `
                <a class="navbar-brand color" href="#">Du hast leider die falsche Antwort!!!!</a>
                `;
        }
        document.getElementById('card-body1').disabled = true;
        document.getElementById('card-body2').disabled = true;
    }, timeValue)
}


function getResult() {
    let question = questions[currentQuestion];
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if (selectionValue) {
        document.getElementById(selectionValue).parentNode.style = 'background-color: darkgreen';
    }
    document.getElementById('answer_1').parentNode.classList.add('bg-danger');
    document.getElementById('answer_2').parentNode.classList.add('bg-danger');
    document.getElementById('answer_3').parentNode.classList.add('bg-danger');
    document.getElementById('answer_4').parentNode.classList.add('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.style = 'background-color: green !important;';
    setTimeout(function () {
        console.log('gotNextQUrestion');
        goToNextQuestion();
    }, 3000)

}

function goToNextQuestion() {
    let question = questions[currentQuestion];
    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectionValue) {
        document.getElementById(selectionValue).parentNode.style = '';

    }
    document.getElementById('success-bar').classList.add('d-none');
    document.getElementById('success-bar').classList.remove('bg-danger');
    console.log('test succes-bar')
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById(idOfRightAnswer).parentNode.style = '';

    setTimeout(function () {
        if ((currentQuestion + 1) >= questions.length) {
            console.log('score write')
            document.getElementById('answer-main-box').innerHTML = '';
            document.getElementById('box-left').innerHTML = '';
            document.getElementById('question-image').innerHTML = `
            <div class="score-text"><img  class="startImage" src="images/trophy.png">Deine richtigen Antworten: ${score} von ${questions.length}!!!</div>
            `;
        } else {
            currentQuestion++
            showQuestion();
        }
    }, 1000)
}


function renderStart() {
    let body = document.getElementById('body');
    body.innerHTML = `
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-md">
            <a class="navbar-brand" href="#" id="question-header">Willkommen im Quiz-Duell</a>
        </div>
    </nav>
    <div class="card" style="width: 99%;">
        <div class="card-image">

            <div class="box-left">
                <div fw-bold text-center fs-1 ">
                   
                </div>
            </div>
            <div id="question-image" class="box-centerStart">
            <img class="startImage" src="images/question-mark.png">
            </div>

            <div class="box-right">

            </div>
        </div>
        
        <button id="startButton" type="button" class="btn btn-secondary btn-lg button-size" onclick="renderQuestions()">Start Game</button>
        </div>
    `;
}