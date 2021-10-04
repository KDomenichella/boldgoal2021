let points = 0;

function food(userAnswer) {
  // what is the craziest thing Kate has ever eaten?
  // 13 pts
  const isCorrect = userAnswer === 'eel';
  
  if (isCorrect) {
    points += 13; 
  }
  return isCorrect;
}

function getScore() {
  // returns the current user's quiz score score
  return points;
}

// DO NOT MODIFY CODE UNDER THIS COMMENT

// Do not worry about what is underneath here: it's the rest
// of what makes this page works. You'l learn about how these
// things work as you work through the workshop

(function() {
  const words = [
    "squeeze",
    "suspend",
    "cloudy",
    "parallel",
    "scrape",
    "puppy",
    "horses",
    "sedate",
    "guarded",
    "part",
    "name",
    "solid",
    "queue",
    "alike",
    "home",
    "overwrought",
    "talented",
    "concerned",
    "increase",
    "silky",
    "rude",
    "hypnotic",
    "moaning",
    "rabbit",
    "oily",
    "intelligent",
    "delicious",
    "snow",
    "sticky",
    "view"
  ];
  let currentQuestion = 0;
  const text = document.getElementById("text")
  
  function validate(userResponse) {
    const answer = process[currentQuestion].validator.apply(window, [userResponse, ...(process[currentQuestion].meta ? process[currentQuestion].meta : [])]);
    let response = "";

    if (answer === true) {
      response = "CORRECT!";
    } else if (answer === false) {
      response = "WRONG!";
    } else {
      response = "got a response other than true or false";
    }

    alert(response);
    currentQuestion++;
    
    if (currentQuestion >= process.length) {
      document.getElementById("container").innerHTML = `<h1>Congrats! You finished. You got ${getScore()} points!</h1>`;
      return;
    }
    
    text.innerText = process[currentQuestion].question;
  }

  const randomNumber = max => Math.floor(Math.random() * max);
  const randomWord = () => words[randomNumber(words.length)];
  const word1 = randomWord();
  const word2 = randomWord();
  const number1 = randomNumber(25);
  const number2 = randomNumber(25);
  const number3 = randomNumber(25);
  const number4 = randomNumber(25);
  const number5 = randomNumber(25);
  const birthYear = randomNumber(40) + 1970;
  const currentYear = new Date().getFullYear();

  const process = [
    {
      question: "What is the craziest thing Kate has ever eaten?",
      validator: eel,
      points: 13
    },
    {
      question: "What is Kate's favorite food?",
      validator: eggsbenedict,
      points: 13
    },
    {
        question: "What is Kate's nickname?",
        validator: eggsbennygirl,
        points: 13
      }
  ];

  const input = document.getElementById("input");
  document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    validate(input.value);
    input.value = "";
  });
})();
