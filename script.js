const questionBox = document.querySelector(".questionBox")
const optionAbtn = document.querySelector(".btn1")
const optionBbtn = document.querySelector(".btn2")
const optionCbtn = document.querySelector(".btn3")
const optionDbtn = document.querySelector(".btn4")
const previousBtn = document.querySelector(".previous")
const nextBtn = document.querySelector(".next")
const finishBtn = document.querySelector(".finish")
const yourScore = document.querySelector(".yourScore")
const totalScore = document.querySelector(".totalScore")
const mainTag = document.querySelector("main");
const finishScreen = document.querySelector(".finishScreen")
const startScreen = document.querySelector(".startScreen")
const startBtn = document.querySelector(".startBtn")



let questions = ["1. What is the capital of Canada?", "2. Who discovered the law of gravity?", "3. Which is the longest river in the world?", "4. What is the chemical symbol for gold?", "5. Which planet is known as the \"Red Planet?\""]

let optionA = ["Toronto", "Albert Einstein", "Amazon River", "Ag", "Venus"];
let optionB = ["Vancouver", "Galileo Galilei", "Nile River", "Au", "Saturn"];
let optionC = ["Ottawa", "Isaac Newton", "Yangtze River", "Pb", "Mars"];
let optionD = ["Montreal", "Nikola Tesla", "Mississippi River", "Pt", "Jupiter"];

const answerCode = {
    1: 3,
    2: 3,
    3: 2,
    4: 2,
    5: 3
}

let index = 0;
console.log(index)

document.addEventListener("DOMContentLoaded", function () {

    displayPreviousBtn()
    displayNextBtn()
    displayQuesAndOptions()
    // defaultColor()
    displayfinishBtn()
    dictionaryManager()
});


nextBtn.addEventListener("click", () => {

    index += 1;
    displayPreviousBtn()
    displayNextBtn()
    displayQuesAndOptions()
    // defaultColor()
    dictionaryManager()

    displayfinishBtn()
    console.log(index)
})

previousBtn.addEventListener("click", () => {

    index -= 1;
    displayPreviousBtn()
    displayNextBtn()
    displayQuesAndOptions()
    // defaultColor()
    dictionaryManager()

    displayfinishBtn()
    console.log(index)
})

function displayPreviousBtn() {
    if (index == 0) {
        previousBtn.style.display = 'none'
    }
    else {
        previousBtn.style.display = 'block'
    }
}

function displayNextBtn() {
    if ((index + 1) == questions.length) {
        nextBtn.style.display = 'none'
    }
    else {
        nextBtn.style.display = 'block'
    }
}
function displayfinishBtn() {
    if ((index + 1) == questions.length) {
        finishBtn.style.display = 'block'
    }
    else {
        finishBtn.style.display = 'none'
    }
}

function displayQuesAndOptions() {
    questionBox.textContent = questions[index]
    optionAbtn.textContent = optionA[index]
    optionBbtn.textContent = optionB[index]
    optionCbtn.textContent = optionC[index]
    optionDbtn.textContent = optionD[index]
}

let correctAnswer = 0;
let maxMarks = questions.length

optionAbtn.addEventListener('click', () => {
    let code = 1;
    let answer = answerCode[index + 1]

    if (code == answer) {
        optionAbtn.style.backgroundColor = 'rgb(162, 235, 186)';
        optionAbtn.style.color = 'rgb(38, 84, 55)';

        correctAnswer += 1;
        console.log("correct answer: " + correctAnswer)

        optionBbtn.disabled = true
        optionCbtn.disabled = true
        optionDbtn.disabled = true
    }
    else {
        optionAbtn.style.backgroundColor = 'rgb(245, 144, 144)';
        optionAbtn.style.color = ' rgb(102, 42, 38)';

        optionBbtn.disabled = true
        optionCbtn.disabled = true
        optionDbtn.disabled = true
    }
    codeDictionary[index + 1] = 1;
    dictionaryValueUpdater()
})

optionBbtn.addEventListener('click', () => {
    let code = 2;
    let answer = answerCode[index + 1]

    if (code == answer) {
        optionBbtn.style.backgroundColor = 'rgb(162, 235, 186)';
        optionBbtn.style.color = 'rgb(38, 84, 55)';

        correctAnswer += 1;
        console.log("correct answer: " + correctAnswer)

        optionAbtn.disabled = true
        optionCbtn.disabled = true
        optionDbtn.disabled = true
    }
    else {
        optionBbtn.style.backgroundColor = 'rgb(245, 144, 144)';
        optionBbtn.style.color = ' rgb(102, 42, 38)';

        optionAbtn.disabled = true
        optionCbtn.disabled = true
        optionDbtn.disabled = true
    }
    codeDictionary[index + 1] = 2
    dictionaryValueUpdater()
})

optionCbtn.addEventListener('click', () => {
    let code = 3;
    let answer = answerCode[index + 1]

    if (code == answer) {
        optionCbtn.style.backgroundColor = 'rgb(162, 235, 186)';
        optionCbtn.style.color = 'rgb(38, 84, 55)';

        correctAnswer += 1;
        console.log("correct answer: " + correctAnswer)

        optionAbtn.disabled = true
        optionBbtn.disabled = true
        optionDbtn.disabled = true
    }
    else {
        optionCbtn.style.backgroundColor = 'rgb(245, 144, 144)';
        optionCbtn.style.color = ' rgb(102, 42, 38)';

        optionAbtn.disabled = true
        optionBbtn.disabled = true
        optionDbtn.disabled = true
    }
    codeDictionary[index + 1] = 3
    dictionaryValueUpdater()
})

optionDbtn.addEventListener('click', () => {
    let code = 4;
    let answer = answerCode[index + 1]

    if (code == answer) {
        optionDbtn.style.backgroundColor = 'rgb(162, 235, 186)';
        optionDbtn.style.color = 'rgb(38, 84, 55)';

        correctAnswer += 1;
        console.log("correct answer: " + correctAnswer)

        optionAbtn.disabled = true
        optionCbtn.disabled = true
        optionBbtn.disabled = true
    }
    else {
        optionDbtn.style.backgroundColor = 'rgb(245, 144, 144)';
        optionDbtn.style.color = ' rgb(102, 42, 38)';

        optionAbtn.disabled = true
        optionCbtn.disabled = true
        optionBbtn.disabled = true
    }
    codeDictionary[index + 1] = 4
    dictionaryValueUpdater()
})

function defaultColor() {
    optionAbtn.style.backgroundColor = '#fff';
    optionAbtn.style.color = 'black';
    optionBbtn.style.backgroundColor = '#fff';
    optionBbtn.style.color = 'black';
    optionCbtn.style.backgroundColor = '#fff';
    optionCbtn.style.color = 'black';
    optionDbtn.style.backgroundColor = '#fff';
    optionDbtn.style.color = 'black';

    optionAbtn.disabled = false
    optionBbtn.disabled = false
    optionCbtn.disabled = false
    optionDbtn.disabled = false
}

function defaultColorSemi() {
    optionAbtn.style.backgroundColor = '#fff';
    optionAbtn.style.color = 'black';
    optionBbtn.style.backgroundColor = '#fff';
    optionBbtn.style.color = 'black';
    optionCbtn.style.backgroundColor = '#fff';
    optionCbtn.style.color = 'black';
    optionDbtn.style.backgroundColor = '#fff';
    optionDbtn.style.color = 'black';
}

finishBtn.addEventListener("click", () => {
    mainTag.style.display = 'none'
    finishScreen.style.display = 'block'
    yourScore.textContent = `${correctAnswer}`
    totalScore.textContent = `${maxMarks}`

})

startBtn.addEventListener('click', () => {
    startScreen.style.display = "none"
    mainTag.style.display = 'block'
    finishScreen.style.display = 'none'

})


const dictionary = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
}

const codeDictionary = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
}

function dictionaryValueUpdater() {
    dictionary[index + 1] = true;
    console.log(dictionary)

    console.log(codeDictionary)
}

function dictionaryManager() {
    

    if (dictionary[index + 1] == true) {

        
        if (answerCode[index + 1] == 1) {
            if (codeDictionary[index + 1] == 1) {
                optionAbtn.style.backgroundColor = 'rgb(162, 235, 186)';
                optionAbtn.style.color = 'rgb(38, 84, 55)';

                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 2) {

                optionBbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionBbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 3) {

                optionCbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionCbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 4) {

                optionDbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionDbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
            }
        }
        if (answerCode[index + 1] == 2) {
            if (codeDictionary[index + 1] == 2) {
                optionBbtn.style.backgroundColor = 'rgb(162, 235, 186)';
                optionBbtn.style.color = 'rgb(38, 84, 55)';

                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 1) {

                optionAbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionAbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 3) {

                optionCbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionCbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 4) {

                optionDbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionDbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
            }
        }
        if (answerCode[index + 1] == 3) {
            if (codeDictionary[index + 1] == 3) {
                optionCbtn.style.backgroundColor = 'rgb(162, 235, 186)';
                optionCbtn.style.color = 'rgb(38, 84, 55)';

                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 1) {

                optionAbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionAbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 2) {

                optionBbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionBbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 4) {

                optionDbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionDbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
            }
        }
        if (codeDictionary[index + 1] == 4) {
            if (answerCode[index + 1] == 4) {
                optionDbtn.style.backgroundColor = 'rgb(162, 235, 186)';
                optionDbtn.style.color = 'rgb(38, 84, 55)';

                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true
            }
            else if (codeDictionary[index + 1] == 1) {

                optionAbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionAbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 2) {

                optionBbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionBbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionCbtn.style.backgroundColor = '#fff';
                optionCbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
            else if (codeDictionary[index + 1] == 3) {

                optionCbtn.style.backgroundColor = 'rgb(245, 144, 144)';
                optionCbtn.style.color = 'rgb(102, 42, 38)';
                optionAbtn.disabled = true
                optionBbtn.disabled = true
                optionCbtn.disabled = true
                optionDbtn.disabled = true

                optionAbtn.style.backgroundColor = '#fff';
                optionAbtn.style.color = 'black';
                optionBbtn.style.backgroundColor = '#fff';
                optionBbtn.style.color = 'black';
                optionDbtn.style.backgroundColor = '#fff';
                optionDbtn.style.color = 'black';
            }
        }
    }
    else {
        optionAbtn.style.backgroundColor = '#fff';
        optionAbtn.style.color = 'black';
        optionBbtn.style.backgroundColor = '#fff';
        optionBbtn.style.color = 'black';
        optionCbtn.style.backgroundColor = '#fff';
        optionCbtn.style.color = 'black';
        optionDbtn.style.backgroundColor = '#fff';
        optionDbtn.style.color = 'black';

        optionAbtn.disabled = false
        optionBbtn.disabled = false
        optionCbtn.disabled = false
        optionDbtn.disabled = false
    }
    
}


function startTimer(duration) {
    let timer = duration, hours, minutes, seconds;
    const display = document.querySelector(".timer");

    const interval = setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        display.textContent = `${hours}h ${minutes}m ${seconds}s`;
        if(timer<600){
            display.style.color = 'red'
        }

        if (--timer < 0) {
            clearInterval(interval);
            // display.textContent = "Time's up!";
            mainTag.style.display = 'none'
            finishScreen.style.display = 'block'
            yourScore.textContent = `${correctAnswer}`
            totalScore.textContent = `${maxMarks}`
        }
    }, 1000);
}

startBtn.addEventListener("click", function () {
    const threeHours = 0.2 * 60 * 60; 
    startTimer(threeHours);
});
