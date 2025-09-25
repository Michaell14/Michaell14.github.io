const questions = [
      {
        question: "How do you handle stress?",
        answers: [
          { text: "I lean on others for support.", type: "Jug" },
          { text: "I push through with sheer focus.", type: "Crimp" },
          { text: "I try to relax and let it pass.", type: "Sloper" },
          { text: "I adapt and find creative solutions.", type: "Pinch" }
        ]
      },
      {
        question: "What's your ideal weekend activity?",
        answers: [
          { text: "Hanging out with friends.", type: "Jug" },
          { text: "Training for a competition.", type: "Crimp" },
          { text: "Chilling outdoors or napping.", type: "Sloper" },
          { text: "Trying something new and challenging.", type: "Pinch" }
        ]
      },
      {
        question: "How do friends describe you?",
        answers: [
          { text: "Outgoing and fun.", type: "Jug" },
          { text: "Intense and driven.", type: "Crimp" },
          { text: "Calm and steady.", type: "Sloper" },
          { text: "Clever and resourceful.", type: "Pinch" }
        ]
      },
      {
        question: "What's your favorite type of climb?",
        answers: [
          { text: "Big, overhung routes.", type: "Jug" },
          { text: "Technical vertical walls.", type: "Crimp" },
          { text: "Slabby, balancey climbs.", type: "Sloper" },
          { text: "Powerful, compression moves.", type: "Pinch" }
        ]
      },
      {
        question: "How do you tackle a new problem?",
        answers: [
          { text: "I team up with someone.", type: "Jug" },
          { text: "I break it down piece by piece.", type: "Crimp" },
          { text: "I feel it out.", type: "Sloper" },
          { text: "I experiment until something works.", type: "Pinch" }
        ]
      }
    ];

    let currentQuestion = 0;
    const scores = {
      Jug: 0,
      Crimp: 0,
      Sloper: 0,
      Pinch: 0
    };

    const quizContainer = document.getElementById("quiz-container");
    const resultContainer = document.getElementById("result");
    const restartBtn = document.getElementById("restart");

    function showQuestion() {
      const q = questions[currentQuestion];
      quizContainer.innerHTML = `
        <div class="question">
          <h2>${q.question}</h2>
          <div class="answers">
            ${q.answers.map((a, i) => `
              <button onclick="selectAnswer('${a.type}')">${a.text}</button>
            `).join('')}
          </div>
        </div>
      `;
    }

    function selectAnswer(type) {
      scores[type]++;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }

    function showResult() {
      quizContainer.innerHTML = "";
      const resultType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
      const descriptions = {
        Jug: "You're a JUG! Friendly, reliable, and always there when someone needs a lift.",
        Crimp: "You're a CRIMP! Precise, intense, and laser-focused on your goals.",
        Sloper: "You're a SLOPER! Laid-back, intuitive, and unbothered by life's friction.",
        Pinch: "You're a PINCH! Strong, adaptive, and you thrive under pressure."
      };
      resultContainer.textContent = descriptions[resultType];
      restartBtn.style.display = "block";
    }

    function restartQuiz() {
      currentQuestion = 0;
      for (let type in scores) scores[type] = 0;
      resultContainer.textContent = "";
      restartBtn.style.display = "none";
      showQuestion();
    }

    // Start quiz
    showQuestion();