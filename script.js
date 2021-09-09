let questions = [
    {
        "question": "In welcher Position schlafen Pferde tief und fest?",
        "answer_1": "im Stehen",
        "answer_2": "im Liegen",
        "answer_3": "an der Stallwand lehnend",
        "answer_4": "im Sitzen",
        "right_answer": 2
    },
    {
        "question": "Welches dieser Tiere läuft am schnellsten?",
        "answer_1": "Gepard",
        "answer_2": "Jaguar",
        "answer_3": "Vogel Strauss",
        "answer_4": "Esel",
        "right_answer": 1
    },
    {
        "question": "Welches Obst wird weltweit am meisten gegessen?",
        "answer_1": "Banane",
        "answer_2": "Apfelsine",
        "answer_3": "Apfel",
        "answer_4": "Kirsche",
        "right_answer": 1
    },
    {
        "question": "Welches Tier frisst die giftigen Fliegenpilze, ohne krank zu werden?",
        "answer_1": "Rothirsch",
        "answer_2": "Hase",
        "answer_3": "Dachs",
        "answer_4": "Eidechse",
        "right_answer": 2
    },
    {
        "question": "Wie heißt der weibliche Geschlechtsteil der Blume?",
        "answer_1": "Blütenblatt",
        "answer_2": "Staubbeutel",
        "answer_3": "Stempel",
        "answer_4": "Stange",
        "right_answer": 3
    },
    {
        "question": "Welche Farbe können Bienen nicht sehen?",
        "answer_1": "Grün",
        "answer_2": "Rot",
        "answer_3": "Violet",
        "answer_4": "Gelb",
        "right_answer": 2
    },
    {
        "question": "Welches Tier kann ein Jahr lang ohne Nahrung leben?",
        "answer_1": "Krokodil",
        "answer_2": "Chamäleon",
        "answer_3": "Elefant",
        "answer_4": "Boa (eine Schlangenart)",
        "right_answer": 4
    },
    {
        "question": "Wie tief kann ein Pottwal tauchen?",
        "answer_1": "500 Meter",
        "answer_2": "750 Meter",
        "answer_3": "1000 Meter",
        "answer_4": "1500 Meter",
        "right_answer": 3
    },
    {
        "question": "Welcher Baum befruchtet sich selbst?",
        "answer_1": "Tanne",
        "answer_2": "Walnussbaum",
        "answer_3": "Kiefer",
        "answer_4": "Olivenbaum",
        "right_answer": 1
    },
    {
        "question": "Wie atmen Insekten?",
        "answer_1": "Sie nehmen Sauerstoff über die Haut auf",
        "answer_2": "Sie haben Kiemen wie die Fische",
        "answer_3": "Sie haben Atemlöcher",
        "answer_4": "Sie haben eine Lunge zum Atmen",
        "right_answer": 3
    },
    {
        "question": "Woraus bestehen Flechten?",
        "answer_1": "aus Algen und Pilzen",
        "answer_2": "aus Moos",
        "answer_3": "aus Rinde",
        "answer_4": "aus Wurzeln",
        "right_answer": 1
    },
    {
        "question": "Welches Tier ähnelt dem Menschen genetisch zu 99 Prozent?",
        "answer_1": "Hausschwein",
        "answer_2": "Gorilla",
        "answer_3": "Schimpanse",
        "answer_4": "Pinguin",
        "right_answer": 3
    },
    {
        "question": "Welche Blume liefert das kostbare gelbe Gewürz Safran?",
        "answer_1": "Krokus",
        "answer_2": "Hibiskus",
        "answer_3": "Tulpe",
        "answer_4": "Rose",
        "right_answer": 1
    },
    {
        "question": "Wie heißt das ausgedehnte Wurzelgeflecht der Pilze?",
        "answer_1": "Chlorophyll",
        "answer_2": "Myzel",
        "answer_3": "Pfifferling",
        "answer_4": "rootswill",
        "right_answer": 2
    },
    {
        "question": "Welches dieser Tiere legt Eier?",
        "answer_1": "Blauwal",
        "answer_2": "Kragenbär",
        "answer_3": "Schnabeltier",
        "answer_4": "Pferd",
        "right_answer": 3
    },
]

let currentQuestion = 0;
let intervalID;
let count = 10;
let selectionValue;

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-header').innerHTML = question['question'];
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

        } else {
            document.getElementById('success-bar').classList.remove('d-none');
            document.getElementById('success-bar').classList.add('bg-danger');
            document.getElementById('success-intern-bar').innerHTML = `
                <a class="navbar-brand color" href="#">Du hast leider die falsche Antwort!!!!</a>
                `;
        }

    }, timeValue)
}


function getResult() {
    let question = questions[currentQuestion];
    let idOfRightAnswer = `answer_${question['right_answer']}`;
    if(selectionValue){
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

    if(selectionValue){
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
        if (currentQuestion <= questions.length) {
            currentQuestion++
            showQuestion();
        }
    }, 1000)
}
