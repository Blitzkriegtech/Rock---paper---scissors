
//declarations of some variable in global scope

let heroScore = 0;
let aiScore = 0;
let scoreThreshold = 5;

const rock_btn_section = document.querySelector('#rock');
const paper_btn_section = document.querySelector('#paper');
const scissor_btn_section = document.querySelector('#scissor');
const  hero_score_span = document.querySelector('#hero');
const ai_score_span = document.querySelector('#ai');
const result_text_p = document.querySelector('#resultText');
const final_text_p = document.querySelector('.ultResult');

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
   return randomNumber;
}

//Functions for conditions (win, draw, and lose)

function win(humanChoice, compChoice) {
   heroScore++;
   result_text_p.textContent = `You used ${humanChoice} and destroyed AI\`s ${compChoice}.`;
   hero_score_span.textContent = heroScore;
   ai_score_span.textContent = aiScore;
   checkForVictory();
}

function lose(humanChoice, compChoice) {
   aiScore++;
   result_text_p.textContent = `You used ${humanChoice} and was trashed by AI\`s ${compChoice} you LOSE.`;
   hero_score_span.textContent = heroScore;   
   ai_score_span.textContent = aiScore;
   checkForVictory();
}
function draw(humanChoice, compChoice) {
   
   result_text_p.textContent = `You used ${humanChoice} and AI used ${compChoice} nothing happened, its a DRAW!`;
   hero_score_span.textContent = heroScore;
   ai_score_span.textContent = aiScore;
}

// checkForVictory function

function checkForVictory(){
   if(heroScore >= scoreThreshold) {
      displayVictoryMessage('You WON, What a CHAD!🎊🎊🎊');
      final_text_p.style.color = 'gold';
   } else if (aiScore >= scoreThreshold) {
      displayVictoryMessage('LOSER🤪🤪🤪');
      final_text_p.style.color = 'crimson'

   }
}

// Function to display the victory message and reset the game

function displayVictoryMessage(message) {
   final_text_p.textContent = message;
   final_text_p.style.display = 'block';

// Disable the buttons to stop the game

   rock_btn_section.disabled = true;
   paper_btn_section.disabled = true;
   scissor_btn_section.disabled = true;

   setTimeout(resetGame, 5000); // Reset the game after 5 sec.
}

// Function to reset the game

function resetGame() {
   heroScore = 0;
   aiScore = 0;
   hero_score_span.textContent = heroScore;
   ai_score_span.textContent = aiScore;
   result_text_p.textContent = ''; // Clear the result msg
   final_text_p.style.display = 'none'; // Hide the final text

// Enable the buttons again to allow new game rounds.
   rock_btn_section.disabled = false;
   paper_btn_section.disabled = false;
   scissor_btn_section.disabled = false;
}

// Function for a single round
   function playRound (humanChoice){
      const compChoice = getComputerChoice();

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
      };      
   }

   //Function to start the game and get humanChoice. (New)
function playGame () {

   rock_btn_section.addEventListener('click', () => {
      playRound("Rock");
   });

   
   paper_btn_section.addEventListener('click', () => {
      playRound("Paper");
   });

   
   scissor_btn_section.addEventListener('click', () => {
      playRound("Scissor");
   });

}
playGame();




   // * Old code

   // function playGame() {
   // console.log('Game ON!');
   // const humanSelection = getHumanChoice();
   // const computerSelection = getComputerChoice();
   // playRound(humanSelection, computerSelection);

   // if (humanScore === 5) {
   //    console.log('Victory 😍');
   //    return;
     
      
   // } else if (computerScore === 5)
   // {
   //    console.log(`You failed this city 👻 GAME OVER ☠️`);
   //    return;

   // // }
   // playGame();
   
      
// }
// playGame();
