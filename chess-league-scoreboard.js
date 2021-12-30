const theBoard = document.getElementById("the-board");

const createPlayer = (position, name, score) => {
  let playerRow = document.createElement("div");
  playerRow.classList.add("player-row");

  let playerPosition = document.createElement("div");
  playerPosition.classList.add("player-position");
  playerPosition.innerText = position;
  playerRow.appendChild(playerPosition);

  let playerName = document.createElement("div");
  playerName.classList.add("player-name");
  playerName.innerText = name;
  playerRow.appendChild(playerName);

  let theScoringSection = document.createElement("div");
  theScoringSection.classList.add("the-score-section");

  let minusButton = document.createElement("button");
  minusButton.classList.add("minus-button");
  minusButton.innerText = "-";
  theScoringSection.appendChild(minusButton);

  let theScore = document.createElement("div");
  theScore.classList.add("the-score");
  theScore.innerText = score;
  theScoringSection.appendChild(theScore);

  let plusButton = document.createElement("button");
  plusButton.classList.add("plus-button");
  plusButton.innerText = "+";
  theScoringSection.appendChild(plusButton);
  playerRow.appendChild(theScoringSection);

  return playerRow;
};

const playersArray = [
  { name: "Dan Burnside", score: "27" },
  { name: "Player 2", score: "13" },
  { name: "Player 3", score: "27" },
  { name: "Player 4", score: "32" },
  { name: "Dan Burnside", score: "132" },
  { name: "Dan Burnside", score: "27" },
];

playersArray.forEach((player, index) => {
  const playerRow = createPlayer(`${index + 1}`, player.name, player.score);
  theBoard.appendChild(playerRow);
});

// TODO: Add and subtract
// Store values in database
// Update view when the score changes
// Update positions of players
