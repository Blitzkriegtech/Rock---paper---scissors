
//declarations of some variable in global scope

let humanScore = 0;
let computerScore = 0;

//function to get AI input/choice

function getComputerChoice () {
   
   let randomNumber = Math.floor(Math.random()*3);
   switch(randomNumber) {
      case 0:
         randomNumber = "Rock";
         break;
      case 1:
         randomNumber = "Paper";
         break;
      case 2:
         randomNumber = "Scissor";
         break;
   }
   const compChoice = randomNumber;
   return compChoice;
}

//Function to get human input

function getHumanChoice() {
   const humanInput = prompt(`Please enter your choice`);
   const humanChoice = humanInput.charAt(0).toUpperCase() + humanInput.slice(1);
   return humanChoice;
}

//Functions for conditions (win, draw, and lose)

function win(humanChoice, compChoice) {
   humanScore++;
   console.log(`You use ${humanChoice} and WON against AI\`s ${compChoice}.`);
   console.log(`Your score: ${humanScore}`);
   console.log(`AI score: ${computerScore}`);
}

function lose(humanChoice, compChoice) {
   computerScore++;
   console.log(`You use ${humanChoice} and was beaten by AI\`s ${compChoice} you LOSE.`);
   console.log(`Your score: ${humanScore}`);
   console.log(`AI score: ${computerScore}`);
}

function draw(humanChoice, compChoice) {
   
   console.log(`You use ${humanChoice} and AI use ${compChoice} nothing happened its a DRAW!`);
   console.log(`Your score: ${humanScore}`);
   console.log(`AI score: ${computerScore}`);
}

// Function for a single round
   function playRound (humanChoice, compChoice){

      switch(humanChoice + compChoice){
         case "RockScissor":
         case "PaperRock":
         case "ScissorPaper":
            win(humanChoice, compChoice);
            break;
         
         case "ScissorRock":
         case "RockPaper":
         case "PaperScissor":
            lose(humanChoice, compChoice);
            break;
         
         case "RockRock":
         case "PaperPaper":
         case "ScissorScissor":
            draw(humanChoice, compChoice);
            break;
      }
   
      
   }

   //Function to start the game.

function playGame() {
   
   console.log('Game ON!');
   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   playRound(humanSelection, computerSelection);

   if (humanScore === 5) {
      console.log('Victory 😍');
      return;
      
   } else if (computerScore === 5)
   {
      console.log(`You failed this city 👻 GAME OVER ☠️`);
      return;
   }
   playGame();
      
}
// playGame();