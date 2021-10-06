const choices = document.querySelectorAll(".choice"),
  score = document.querySelector("#score"),
  modal = document.querySelector(".modal"),
  result = document.querySelector("#result"),
  restart = document.querySelector("#restart"),
  scoreBoard = {
    player: 0,
    computer: 0,
    draw: 0,
  };

// play game

function play(event) {
  restart.style.display = "inline-block";
  const playerChoice = event.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

// get computer choice

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// get winner

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

//show getWinner

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreBoard.player++;
    result.innerHTML = `
        <h1 class="text-win"> you won</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>computer chose <strong>${computerChoice
          .charAt(0)
          .toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
  } else if (winner === "computer") {
    scoreBoard.computer++;
    result.innerHTML = `
       <h1 class="text-lose">You lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>computer choose <strong> ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
       `;
  } else {
    result.innerHTML = `
        <h1>it is a draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>computer chose <strong> ${
          computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }</strong></p>
        `;
  }
  score.innerHTML = `
    <p>players: ${scoreBoard.player} </p>
    <p> computer: ${scoreBoard.computer}</p>
    `;

  modal.style.display = "block";
}

//restart game

function restartGame() {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  scoreBoard.innerHTML = `
    <p>players: ${scoreBoard.player} </p>
    <p> computer: ${scoreBoard.computer}</p>
    `;
}

// clear modal

function clearModal(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//event listener

choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
