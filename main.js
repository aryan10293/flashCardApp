// i needed an Api and i dont have interent rn
const flashCards = {
    1: {
        "questions": "How many players are on a basketball court in a standard game?",
        "answer": "10",
    },
    2: {
        "questions": "what is it called when a player takes to many steps without dirbbling the ball?",
        "answer": "travel",
    },
    3: {
        "questions": "how many points is it worth for a shot taken inside the three point line?",
        "answer": "2 points",
    },
    4: {
        "questions": 'which nba player has the nickname "King James"?',
        "answer": "Lebron James",
    },
    5: {
        "questions": "what is the maximum numbers of fouls a player can have before fouling out of a high school basketball game?",
        "answer": "5",
    },
};

const subjects = {};

// interactive varibles
const question = document.getElementById("question");
const skip = document.getElementById("skip");
const show = document.getElementById("show");
const answer = document.getElementById("answer");
const back = document.getElementById("back");
const next = document.getElementById("next");
const submit = document.getElementById("submit")
const addQuestion = document.getElementById("addQuestion");
const addAnswer = document.getElementById("addAnswer");
const addDeck = document.getElementById("addDeck");
const addSubject = document.getElementById("addSubject");


let questionCount = 1;
let currentQuestion = flashCards[questionCount];

const loadFirstQuestion = () => {
    question.textContent = `Question: ${currentQuestion.questions}`;
}
const showAnswer = () => {
    answer.textContent = `Answer: ${currentQuestion.answer}`;
    answer.classList.toggle("hide");
    if (answer.classList.contains("hide")) {
        show.textContent = "Show Answer!";
    } else {
        show.textContent = "Hide Answer!";
    }

}
const backQuestion = () => {
    if (questionCount === 1) {
        questionCount = Object.keys(flashCards).length;
        currentQuestion = flashCards[questionCount];
    } else {
        questionCount--;
        currentQuestion = flashCards[questionCount];
    }
    loadFirstQuestion();

}
const nextQuestion = () => {
    console.log("hey does this work")
    if (questionCount === Object.keys(flashCards).length) {
        questionCount = 1;
        currentQuestion = flashCards[questionCount];
    } else {
        questionCount++;
        currentQuestion = flashCards[questionCount];
    }
    loadFirstQuestion();


}
const submitFlashcard = () => {
    const questionValue = addQuestion.value;
    const answerValue = addAnswer.value
    const lengthOfFlashCardSet = Object.keys(flashCards).length + 1
    flashCards[lengthOfFlashCardSet] = {
        "questions": questionValue,
        "answer": answerValue
    }
    addAnswer.value = " ";
    addQuestion.value = " ";
}

next.addEventListener("click", nextQuestion);
back.addEventListener("click", backQuestion);
show.addEventListener("click", showAnswer);
submit.addEventListener("click", submitFlashcard);
addDeck.addEventListener("click", () => {

    console.log(addSubject.value);
    subjects[addSubject.value] = {};
    addSubject.value = " ";
})
loadFirstQuestion();
