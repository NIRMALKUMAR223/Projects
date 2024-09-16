const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "Who is the current US president (2024)?",
        a: "Joe Biden",
        b: "Donald Trump",
        c: "Barack Obama",
        d: "Kamala Harris",
        correct: "a"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const scoreEl = document.getElementById('score');

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    document.querySelectorAll('.answer').forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    document.querySelectorAll('.answer').forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById('quiz').style.display = 'none';
            scoreEl.innerText = `You scored ${score}/${quizData.length}!`;
        }
    }
});

loadQuiz();
