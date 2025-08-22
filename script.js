let humanScore = 0
let computerScore = 0
const play = ["rock","paper","scissors"]

function getComputerChoice() {
    const random = Math.floor(Math.random()*3);
    return play[random];
};

function getHumanChoice() {
    const choice = prompt('Pick between Rock, Paper, Scissors')
    return choice

}


function playRound(human, computer){
    // Declare Variables 
    numericHuman = play.findIndex(i => i.includes(human));
    numericComputer = play.findIndex(i => i.includes(computer));

    // Define Logic
    if(numericHuman == numericComputer)
        console.log('draw');
    else if((numericHuman == 0 && numericComputer == 2)||
         (numericHuman == 1 && numericComputer == 0) ||
         (numericHuman == 2 && numericComputer == 1))
        {humanScore++;}
    else{computerScore++}
}

const nRound = 5;

let userChoice = undefined;
let computerChoice = undefined;

function playGame() {
    for(let i=0; i<nRound; i++){
        playRound(userChoice = getHumanChoice(),computerChoice = getComputerChoice())
        console.log(`You played ${userChoice} and I played ${computerChoice}`);
        console.log(`At the moment your score is ${humanScore} point and mine is ${computerScore} point `);

    }
}



// playRound(userChoice, computerChoice);
playGame();

