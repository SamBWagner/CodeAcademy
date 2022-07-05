// Functions
/* getUserChoice() validates userchoices
 * 
 * @param1 user input string
 * 
 * @return lowercase version of input (if valid)
*/
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error: Incorrect Input");
  }
};

/* getComputerChoice() randomly generate choice for rock paper, scissors game.
 * 
 * @return string rock, paper or scissors
*/
const getComputerChoice = () => {
  const num = Math.floor(Math.random() * 3);
  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

/* determineWinner() rock paper scissors game logic/winstate
 * 
 * @param1 userChoice, STRING: (rock, paper or scissors)
 * @param2 computerChoice, STRING: (rock, paper or scissors)
 * 
 * @return STRING: gamestate and game result 
*/
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return `Results: CPU=${computerChoice} Player=${userChoice}. \nThe game was a tie`;
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return `Results: CPU=${computerChoice} Player=${userChoice}. \nThe CPU won!`;
    } else {
      return `Results: CPU=${computerChoice} Player=${userChoice}. \nThe Player won!`
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return `Results: CPU=${computerChoice} Player=${userChoice}. \nThe CPU won!`
    } else {
      return `Results: CPU=${computerChoice} Player=${userChoice}. \nThe Player won!`
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return `Results: CPU=${computerChoice} Player=${userChoice}. \nThe CPU won!`
    } else {
      return `Results: CPU=${computerChoice} Player=${userChoice}. \nThe Player won!`
    }
  }

  if (userChoice === 'bomb') {
    return `Results: CPU=${computerChoice} Player=The Better Choice. \nThe Player won! They're better than you and you know it`
  }
}





//Main
// User should change "rock" to their choice of rock/paper/scissors
console.log(determineWinner(getUserChoice("rock"), getComputerChoice()));
