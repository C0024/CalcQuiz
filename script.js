const question = [
  {
    topic: "Power Rule",
    derivative: "d/dx x^n = n*x^(n-1)",
    deriquestword: "d by dx x power's n equals to",
    deriansword: "n multiply x power n minus 1",
    integral: "∫ x^n dx = (x^(n+1))/(n+1) + C, n ≠ -1",
    intansword: "",
    displayformula: {
      derivative: "$$\\frac{d}{dx} x^n = n x^{n-1}$$",
      integral:
        "$$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1$$",
    },
  },

  {
    topic: "Quotient Rule",
    derivative: "d/dx [f(x)/g(x)] = (g(x)f'(x) - f(x)g'(x)) / g(x)^2",
    deriansword:
      "g of x into f dash of x minus f of x into g dash of x divide by g of x square",
    deriquestword: "d by dx f of x divide by g of x equals to",
    integral: "∫ x^n dx = (x^(n+1))/(n+1) + C, n ≠ -1",
    intansword: "x power n plus one divide by n plus 1",
    displayformula: {
      derivative:
        "$$\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}$$",
      integral: "",
    },
  },

  {
    topic: "Chain Rule",
    derivative: "",
    deriansword: "f dash of g of x into g dash of x equals to",
    deriquestword: "d by dx f into g of x equal's to",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "product rule",
    derivative: "",
    deriansword:
      "f of x into g dash of x plus f dash of x into g of x equals to",
    deriquestword: "d by dx f of x into g of x equal's to",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "reciprocal rule",
    derivative: "",
    deriansword: "minus g dash of x divide by g of x square equals to",
    deriquestword: "d by dx one divide by g of x equal's to",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "integration by parts",
    derivative: "",
    deriansword: "u into v minus integration v into dU equals to",
    deriquestword: "intergration u into dv",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "d by dx of sign x equals to",
    deriansword: "cos x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "d by dx of cause x equals to",
    deriansword: "minus sin x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "d by dx of tan x equals to",
    deriansword: "sec square x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "d by dx of cot x equals to",
    deriansword: "minus cosec square x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "d by dx of sec x equals to",
    deriansword: "sec x into tan x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "d by dx of cosec x equals to",
    deriansword: "minus cosec x into cot x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of sign x into dx equals to",
    deriansword: "minus cos x plus C",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of cause x into dx equals to",
    deriansword: "sin x + C",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of tan x into dx equals to",
    deriansword: "log n modulus sec x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of sec square dx equals to",
    deriansword: "tan x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of cot x into dx equals to",
    deriansword: "log n modulus sin x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "cosec square x into dx equals to",
    deriansword: "minus cot x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "intergration of sec x into dx equals to",
    deriansword: "log n modulus sec x + tan x + c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of sec x into tan x dx equals to",
    deriansword: "sec x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of cosec x dx equals to",
    deriansword: "log n modulus cosec x minus cot x +c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "trigonometric function",
    derivative: "",

    deriquestword: "integration of cosec x into cot x dx equals to",
    deriansword: "minus cosec x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword: "d by dx of sign inverse x equals to ",
    deriansword: "one divide by root one minus x square ",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword: "d by dx of cause x equals to",
    deriansword: "minus one divide by one minus x square",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword: "d by dx of tan inverse x equals to",
    deriansword: "one divide by one plus x square",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword: "d by dx of cot inverse x equals to",
    deriansword: "minus one divide by one plus x square",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword: "d by dx of sec inverse x equals to",
    deriansword: "one divide by modulus x root x square minus one",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword: "d by dx of cosec inverse x equals to",
    deriansword: "minus one divide by modulus root x square minus one",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword:
      "integration one divide by root a square minus u square dx equals to",
    deriansword: "sin inverse U divide by A plus x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword: "integration one divide by a square plus u square equals to",
    deriansword: "one divide by tan inverse u divide by a plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "inverse trigonometric function",
    derivative: "",

    deriquestword:
      "integration one divide by u root u square minus a square dx equals to",
    deriansword: "one divide by a sec inverse u divide by a plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "sign square x plus cause square x equals to",
    deriansword: "one",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "one plus cot square x equals to",
    deriansword: "cosec square x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "tan square x plus one equals to",
    deriansword: "sec square x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "sign two x equals to",
    deriansword: "two into sin x into cos x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "cause two x equals to",
    deriansword: "cos square x minus sin square x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "cause x plus y equals to",
    deriansword: "cos x into cos y minus sin x into sin y",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "cause square x equals to",
    deriansword: "one plus cos two x divide by two",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "sign square x equals to",
    deriansword: "one minus cos two x divide by two",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "identities",
    derivative: "",

    deriquestword: "sign x plus y equals to",
    deriansword: "sin x into cos y plus cos x into sin y",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "exponential function",
    derivative: "",

    deriquestword: "d by dx of e power's x equals to",
    deriansword: "e power x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "exponential function",
    derivative: "",

    deriquestword: "d by dx of b power's x equals to",
    deriansword: "log n b b power x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "exponential function",
    derivative: "",

    deriquestword: "integration e power x dx equals to",
    deriansword: "e power x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "exponential function",
    derivative: "",

    deriquestword: "integration b power x dx equals to",
    deriansword: "b power x divide by log n b plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "logarithmic functions",
    derivative: "",

    deriquestword: "d by dx of log n modulus x equals to",
    deriansword: "one divide by x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "logarithmic functions",
    derivative: "",

    deriquestword: "d by dx of log base b modulus x equals to",
    deriansword: "one divide by log n b into x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "integral",
    derivative: "",

    deriquestword: "integration one divide by x equals to",
    deriansword: "log n modulus x plus c",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Definition if log base b",
    derivative: "",

    deriquestword: "log base b N means ?",
    deriansword: "b power x equals to N",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Change of Base Formula",
    derivative: "",

    deriquestword: "log base b x equals to",
    deriansword: "log n x divide by log n b",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Change of Base Formula",
    derivative: "",

    deriquestword: "log base b x equals to",
    deriansword: "log x divide by log b",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log n e power equals to",
    deriansword: "x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log base b b power x equals to",
    deriansword: "x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "e power log n x equals to",
    deriansword: "x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "b power log base b x equals to",
    deriansword: "x",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log n e equals to",
    deriansword: "1",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log 10 equals to",
    deriansword: "1",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log base b b equals to",
    deriansword: "one",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log n one equals to",
    deriansword: "zero",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log 1 equals to",
    deriansword: "zero",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },

  {
    topic: "Identities2",
    derivative: "",

    deriquestword: "log base b one equals to",
    deriansword: "zero",
    integral: "",
    intansword: "",
    displayformula: {
      derivative: "",
      integral: "",
    },
  },
];
const synonymMap = {
  times: "multiply",
  into: "multiply",
  multiplied: "multiply",
  multiply: "multiply",

  over: "divide",
  divided: "divide",
  divide: "divide",

  minus: "minus",
  subtract: "minus",

  plus: "plus",
  add: "plus",

  squared: "power",
  square: "power",
  cubed: "power",

  equals: "equals",
  equal: "equals",
};

let index = 0;
let totalScore = 0;
let totalQn = question.length;
let remainQn = question.length;

const endBtn = document.getElementById("endBtn");
const home = document.getElementById("home");
const container = document.getElementById("container");
const questionBtn = document.querySelector("#questionBtn");
const answerBtn = document.querySelector("#answerBtn");
const mic = document.querySelector("#mic");
const nextquestionBtn = document.getElementById("nextQuestionBtn");
const toggleBtn = document.querySelector("#toggleFormula");
const startBtn = document.querySelector("#startBtn");

const formulaContainer = document.getElementById("formulaContainer");
const resultEl = document.getElementById("result");
const status = document.getElementById("status");
const score = document.getElementById("yourscore");
const totalQuestion = document.getElementById("totalQuestion");
const remainQuestion = document.getElementById("remainingQuestion");

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.interimResults = false;

recognition.onstart = () => (status.textContent = "Listening...");
recognition.onresult = (event) => {
  const text = event.results[0][0].transcript;
  resultEl.textContent = text;
};
// recognition.onend = () => {
//   status.textContent = "Stopped.";
// };

function getBestVoice() {
  const voices = speechSynthesis.getVoices();

  return voices.find(v =>
    v.lang === "en-US" &&
    (v.name.toLowerCase().includes("google") ||
     v.name.toLowerCase().includes("microsoft") ||
     v.name.toLowerCase().includes("female"))
  ) || voices[0];
}


function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function swap(elementIndex, randIndex, array) {
  temp = array[randIndex]; //rescued
  array[randIndex] = array[elementIndex];
  array[elementIndex] = array[randIndex];
}

function shuffle(arr) {
  for (let elementIndex = arr.length - 1; elementIndex > 0; elementIndex--) {
    const randIndex = randomInt(arr.length);
    swap(elementIndex, randIndex, arr);
  }
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // remove symbols
    .split(" ")
    .map((word) => synonymMap[word] || word)
    .filter((word) => word.length > 0);
}

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);

  // utterance.voice = questionVoice;
  utterance.voice = getBestVoice();

 utterance.rate = 0.85;
utterance.pitch = 0.9;
utterance.volume = 0.8;



  window.speechSynthesis.speak(utterance);
}

function nextQuestion(arr) {
  if (index >= arr.length) {
    return null; //no more Question
  } else {
    const current = arr[index];
    index++;
    return current;
  }
}

function reset() {
  window.speechSynthesis.cancel();
  index = 0;
  totalScore = 0;
  totalQn = question.length;
  remainQn = question.length;
}

function playVoice(path = "") {
  const audio = new Audio(path);
  audio.volume = 1;
  audio.play();
}

function restrictClick(btn, delay = 1000) {
  btn.disabled = true;
  setTimeout(() => (btn.disabled = false), delay);
}

function checkAnswer(userInput, currentQuestion) {
  const expected = normalizeText(currentQuestion.deriansword);
  const spoken = normalizeText(userInput);

  let matched = new Set();

  expected.forEach((word) => {
    if (spoken.includes(word)) {
      matched.add(word);
    }
  });

  const percent = (matched.size / expected.length) * 100;

  return {
    percent,
    matched: [...matched],
    missing: expected.filter((w) => !matched.has(w)),
  };
}

toggleBtn.addEventListener("click", () => {
  if (formulaContainer.classList.contains("hidden")) {
    formulaContainer.innerHTML =
      currentQuestion.displayformula.derivative || "";
    formulaContainer.classList.remove("hidden");
    MathJax.typesetPromise();
  } else {
    formulaContainer.classList.add("hidden");
  }
});

let currentQuestion = nextQuestion(question);

function updateStatus(totalScore, remainQn) {
  score.textContent = String(`Score: ${totalScore}`);
  totalQuestion.textContent = String(`Total Question: ${totalQn}`);
  remainQuestion.textContent = String(`Remain Question: ${remainQn}`);
}
updateStatus(totalScore, remainQn);

function start() {
  shuffle(question);
  index = 0;
  totalScore = 0;
  container.classList.toggle("hidden");
  speakText("Let's start.");

  askQuestion();

  home.classList.toggle("hidden");
}

function answer(){
  speakText(currentQuestion.deriansword);
  console.log(currentQuestion);
}

function askQuestion() {
  if (index >= question.length) {
    speakText("Quiz completed");
    return;
  }

  currentQuestion = question[index];
  speakText(`Question ${index + 1}`);
  speakText(currentQuestion.deriquestword);
}

mic.addEventListener("click", () => {
  restrictClick(mic, 6000);
  recognition.start();
  setTimeout(() => {
    recognition.stop();
  }, 10000);
});

recognition.onend = () => {
  const result = checkAnswer(resultEl.textContent, currentQuestion);
  console.log(currentQuestion);
  console.log(result.matchedpercent);
  status.textContent = "Stopped.";
  if (result.percent >= 80) {
    speakText("Good answer");
    speakText(`Right Answer is ${currentQuestion.deriansword}`);
    index++;
    totalScore++;
    remainQn--;

    setTimeout(askQuestion, 1500);

    updateStatus(totalScore, remainQn);
  } else if (result.percent >= 60) {
    speakText("Almost correct");
  } else {
    speakText("Try again");
    totalScore--;
    remainQn--;
    index++;
    updateStatus(totalScore, remainQn);
    setTimeout(askQuestion, 1500);
  }

  console.log("Matched:", result.matched);
  console.log("Missing:", result.missing);
};

questionBtn.addEventListener("click", () => {
  restrictClick(questionBtn, 6000);
  if (currentQuestion) {
    speakText(currentQuestion.deriquestword);
  }
});

startBtn.addEventListener("click", start);

nextquestionBtn.addEventListener("click", (e) => {
  restrictClick(nextquestionBtn, 6000);

  index++;
  remainQn--;
  updateStatus(totalScore, remainQn);
  askQuestion();
});

answerBtn.addEventListener("click",answer);

endBtn.addEventListener("click", (e) => {
  reset();
  home.classList.toggle("hidden");
  container.classList.toggle("hidden");
  speakText("Quiz End");
});
