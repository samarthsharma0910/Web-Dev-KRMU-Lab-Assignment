const Ques = [
  {
    question: "Who has scored the most ODI centuries?\nA) Virat Kohli\nB) Sachin Tendulkar\nC) Rohit Sharma\n\nYou have 15 seconds. Type A, B or C.",
    answer: "a"
  },
  {
    question: "Who has hit the most sixes in international cricket?\nA) Chris Gayle\nB) Rohit Sharma\nC) AB de Villiers\n\nYou have 15 seconds. Type A, B or C.",
    answer: "b"
  },
  {
    question: "Which team has won the most ODI Cricket World Cups?\nA) India\nB) Australia\nC) England\n\nYou have 15 seconds. Type A, B or C.",
    answer: "b"
  },
  {
    question: "Who is known as the 'God of Cricket'?\nA) MS Dhoni\nB) Sachin Tendulkar\nC) Virat Kohli\n\nYou have 15 seconds. Type A, B or C.",
    answer: "b"
  },
  {
    question: "How many runs make a half-century in cricket?\nA) 25\nB) 50\nC) 75\n\nYou have 15 seconds. Type A, B or C.",
    answer: "b"
  }
];
function runQuiz() {
  let score = 0;
  for (let i = 0; i < Ques.length; i++) {
    const startTime = Date.now();
    let user_answer = prompt(Ques[i].question);
    if (user_answer === null) {
      alert("Quiz cancelled.");
      return;
    }
    const endTime = Date.now();
    const timeTakenSeconds = (endTime - startTime) / 1000;
    user_answer = user_answer.toLowerCase().trim();
    if (user_answer.length > 0) {
      user_answer = user_answer[0];
    }
    if (timeTakenSeconds > 15) {
      alert("Time over! You took " + timeTakenSeconds.toFixed(1) + " seconds.\nNo points for this question.");
      continue;
    }
    if (user_answer === Ques[i].answer) {
      score++;
      alert("Correct! You answered in " + timeTakenSeconds.toFixed(1) + " seconds.");
    } else {
      alert("Incorrect. The correct option was: " + Ques[i].answer.toUpperCase() +
            "\nYou answered in " + timeTakenSeconds.toFixed(1) + " seconds.");
    }
  }
  alert("Quiz over! Your final score is " + score + " out of " + Ques.length + ".");
}
runQuiz();
