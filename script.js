// list of questions and responses for my quiz app
// array of questions and responses , each element is an object with the following properties :
// question , choices , answer
const questions = [
  {
    question:
      "Quel est le langage de programmation le plus populaire en 2023 ?",
    choices: ["Java", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Quel est le framework JavaScript le plus populaire en 2023 ?",
    choices: ["Angular", "React", "Vue", "Svelte"],
    answer: "React",
  },
  {
    question: "Que signifie DOM element ?",
    choices: [
      "Document Object Model",
      "Document Object Method",
      "Document Object Manipulation",
    ],
    answer: "Document Object Model",
  },
];

let quizElement = document.querySelector(".quiz");
let labelOfQuestion = document.createElement("label");
quizElement.appendChild(labelOfQuestion);

let choicesElement = document.createElement("div");
choicesElement.classList.add("choices");
quizElement.appendChild(choicesElement);

labelOfQuestion.classList.add("question");
let startButton = document.querySelector("#start");
let choiceRadio = document.createElement("input");
let choiceLabel = document.createElement("label");

choiceRadio.type = "radio";
choiceRadio.name = "choice";
choiceLabel.name = "choice";

let Validate = document.createElement("button");
Validate.classList.add("btn");

let index = 0;

function displayQuestion() {
  labelOfQuestion.textContent = questions[index].question;
  choicesElement.innerHTML = "";
  for (let i = 0; i < questions[index].choices.length; i++) {
    let container = document.createElement("div");
    let choiceRadio = document.createElement("input");
    let choiceLabel = document.createElement("label");
    container.classList.add("container");
    choicesElement.appendChild(container);
    container.appendChild(choiceRadio);
    container.appendChild(choiceLabel);
    choiceRadio.type = "radio";
    choiceRadio.name = "choice";
    choiceRadio.value = questions[index].choices[i];
    choiceLabel.textContent = questions[index].choices[i];
  }
  console.log("choice element", choicesElement);
}

startButton.addEventListener("click", function () {
  startButton.style.display = "none";
  displayQuestion();
  quizElement.appendChild(Validate);
  Validate.textContent = "Validate";
  Validate.classList.add("validate");
  Validate.addEventListener("click", function () {
    let choice = document.querySelector("input[name='choice']:checked").value;
    if (choice === questions[index].answer) {
      alert("correct");
    } else {
      alert("wrong");
    }

    if (index === questions.length - 1) {
      alert("end of quiz");
    
      window.location.reload();
      
    }

    index++;
    displayQuestion();
  });
});
