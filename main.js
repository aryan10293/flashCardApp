const flashCards = [
    ["How many players are on a basketball court in a standard game?", "10"],
    ["what is it called when a player takes to many steps without dirbbling the ball?", "travel"],
    ["how many points is it worth for a shot taken inside the three point line?", "2 points"],
    ['which nba player has the nickname "King James"?', "Lebron James"],
    ["what is the maximum numbers of fouls a player can have before fouling out of a high school basketball game?", "5"]
];

const subjects = {
    testing: flashCards,
};

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
const select = document.getElementById("subjectSelect");
const displaySubject = document.getElementById("displaySubject");
const enter = document.getElementById("displaySubject");
const deck = document.getElementById("deck");
let currentDeck = "testing";


let questionCount = 0;
let currentQuestion = subjects["testing"];
const loadFirstQuestion = () => {
    if (currentQuestion.length === 0) {
        question.textContent = "add a fucking question";
    } else {
        question.textContent = `Question: ${currentQuestion[questionCount][0]}`;
    }


}
const showAnswer = () => {
    answer.textContent = `Answer: ${currentQuestion[questionCount][1]}`;
    answer.classList.toggle("hide");
    if (answer.classList.contains("hide")) {
        show.textContent = "Show Answer!";
    } else {
        show.textContent = "Hide Answer!";
    }

}
const backQuestion = () => {
    if (questionCount === 0) {
        questionCount = currentQuestion.length - 1;
    } else {
        questionCount--;
    }
    loadFirstQuestion();
    if (!answer.classList.contains("hide")) {
        showAnswer();
    }

}
const nextQuestion = () => {
    if (questionCount === currentQuestion.length - 1) {
        questionCount = 0;
    } else {
        questionCount++;
    }
    loadFirstQuestion();
    if (!answer.classList.contains("hide")) {
        showAnswer();
    }

}
const submitFlashcard = () => {
    const questionValue = addQuestion.value;
    const answerValue = addAnswer.value;
    if (subjects[currentDeck]) {
        subjects[currentDeck].push([questionValue, answerValue]);
        console.log(subjects);
    }
    addAnswer.value = " ";
    addQuestion.value = " ";
    loadFirstQuestion();
}

const addAndDisplaySubject = () => {
    const option = document.createElement("option");
    subjects[addSubject.value.trim()] = [];
    option.innerHTML = addSubject.value;
    addSubject.value = " ";
    select.append(option);
    console.log(subjects)
}
// array 0 is the question 
// array 1 is the answer

next.addEventListener("click", nextQuestion);
back.addEventListener("click", backQuestion);
show.addEventListener("click", showAnswer);
submit.addEventListener("click", submitFlashcard);
addDeck.addEventListener("click", addAndDisplaySubject)
enter.addEventListener("click", (e) => {
    currentDeck = select.value;
    deck.innerHTML = "Add a flashcard " + " to " + select.value + " deck";
    currentQuestion = subjects[select.value];
    questionCount = 0
    loadFirstQuestion();
    console.log(select.value);
})
loadFirstQuestion();
