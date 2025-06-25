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

// interactive varibles
let questionCount = 1;
const question = document.getElementById("question");
const skip = document.getElementById("skip");
const show = document.getElementById("show");
const answer = document.getElementById("answer");
let currentQuestion = flashCards[questionCount];
let lmao = document.getElementById("lmao");

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

next.addEventListener("click", () => {
    if (questionCount === 5) {
        questionCount = 1;
        currentQuestion = flashCards[questionCount];
    } else {
        questionCount++;
        currentQuestion = flashCards[questionCount];
    }
    loadFirstQuestion();
    console.log("hey does this work");
    console.log(currentQuestion);

})
show.addEventListener("click", showAnswer)
loadFirstQuestion();
