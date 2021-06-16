let startButton = document.querySelector('#start-btn');
let nextButton = document.querySelector('#next-btn');
let questionContainerElement = document.querySelector('#question-container');
let questionElement = document.querySelector('#question');
let answerButtonsElement = document.querySelector('#answer-buttons');
let sortQuestions;
let currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})

function startGame() {
  startButton.classList.add('hide');
  sortQuestions = questions.sort(() => Math.random());
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(sortQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    let button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  let selectedButton = e.target;
  let correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (sortQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: "Сколько океанов на Земле?",
    answers: [
      { text: '4', correct: true },
      { text: '2', correct: false },
      { text: '1', correct: false },
      { text: '7', correct: false },
    ]
  },
  {
    question: "Где, если верить пословице, любопытной Варваре нос оторвали?",
    answers: [
      { text: "на базаре", correct: true },
      { text: "на вокзале", correct: false },
      { text: "на рынке", correct: false },
      { text: "дома", correct: false }
    ]
  },
  {
    question: "Если верить народной пословице, дорог не сам квас. А что же в квасу дорого?",
    answers: [
      { text: "вода", correct: false },
      { text: "изюминка", correct: true },
      { text: "курага", correct: false },
      { text: "ничего", correct: false }
    ]
  },
  {
    question: "Какой город находится в тех же широтах, что и черноморский курорт Сочи?",
    answers: [
      { text: "Алжир (Алжир)", correct: false },
      { text: "Пекин (Китай)", correct: false },
      { text: "Барселона (Испания)", correct: false },
      { text: "Торонто (Канада)", correct: true },
    ]
  },
  {
    question: "В какую одежду принято плакать, чтобы вызвать сочувствие?",
    answers: [
      { text: "в жилетку", correct: true },
      { text: "в кофту", correct: false },
      { text: "в платок", correct: false },
      { text: "не плакать", correct: false },
    ]
  },
  {
    question: "Какие семьи, по мнению Л. Н. Толстого, похожи друг на друга?",
    answers: [
      { text: "красивые", correct: false },
      { text: "богатые", correct: false },
      { text: "счастливые", correct: true },
      { text: "нет правильного ответа", correct: false },
    ]
  },
  {
    question: "Назовите имя верного друга Ореста из греческой мифологии. В переносном смысле оно употребляется для характеристики лучшего друга",
    answers: [
      { text: "Энцелад", correct: false },
      { text: "Патрокл", correct: false },
      { text: "Аристид", correct: false },
      { text: "Пилад", correct: true },
    ]
  },
  {
    question: "Каким предметом китайцы стараются не пользоваться в преддверии Нового года, чтобы не разрушить счастья?",
    answers: [
      { text: "нож", correct: true },
      { text: "вилка", correct: false },
      { text: "ложка", correct: false },
      { text: "стакан", correct: false },
    ]
  },
]



// function getFiftyPercent(answears){
//   let twoAnswears = [];
//   for (answear in answears){
//       if(answear.correct ==true){
//           twoAnswears.push(answear);
          
//           /* answears.splice(answears.indexOf(answear),1) */
//           /* console.log(index) */
//       }
      
//   }
//   let index = answears.findIndex(v => v.correct ==true);
  
//   alert(answears[0]);
//   /* twoAnswears.push(getRandomItem(answears)) */
//   return twoAnswears
// }

// function getScore(){
//   if (score <5 ){
//       return 0;
//   }
//   if (score <10 ){
//       return 1000;
//   }
//   if (score <15 ){
//       return 32000;
//   }
//   if (score == 15){
//       return result;
//   }
// }

// let score = 0;
// let gameIsOver = false;
// let result=0;
// function scriptMillioner(){
//     for (let counter = 1; counter <= questionsList.length; counter++) {
//         if (gameIsOver) {
//             alert("Вы проиграли, ваш выигрыш составляет "+ getScore()+" $");
//             break;
//         }
    
//         else {
//             score++
//             let getAnswer = prompt(`${getQuestionByNumber(counter)}`);
//             let answearsForQuestion = answearsForQuestionWithNumber(counter);
            
//             /* alert(getFiftyPercent(answearsForQuestion)); */
//             checkAnswearIsTrue(getAnswer, answearsForQuestion);
//             result = questionsList[counter].points;
//         }
//     }
// }