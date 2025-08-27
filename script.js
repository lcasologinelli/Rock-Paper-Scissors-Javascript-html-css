
const play = ["rock","paper","scissors"]
const   NROUND = 5;

let playeStarted = false;
let nGame = NROUND - 1;

let playerScore = document.getElementById("playerScore")
let pcScore = document.getElementById("pcScore")

let playerChoice =document.getElementById("playerChoice")
let pcChoice = document.getElementById("pcChoice")

let playerChoiceTemp = ""

let btnContainer = document.querySelector(".btnContainer");

let btns = document.querySelectorAll(".btnPlayer");

let btnPlay = document.querySelector("#btnPlay");


btnPlay.disabled = true

btnContainer.addEventListener("click", btnPressed)

btnPlay.addEventListener("click", playPressed)
btnPlay.disabled = true

function btnPressed(e){
    if(!playeStarted){
        playerChoiceTemp = e.target.textContent.toLowerCase().trim();
        btnPlay.disabled = false;
    }
    else if(playeStarted && nGame > 0){
        playerChoice.textContent = e.target.textContent.toLowerCase().trim();
        playRound(playerChoice.textContent, pcChoice.textContent = getComputerChoice())
        nGame--
        console.log(nGame);
    }
    else{
        playerChoice.textContent = e.target.textContent.toLowerCase().trim();
        playRound(playerChoice.textContent, pcChoice.textContent = getComputerChoice())
        nGame = NROUND;
        btnPlay.disabled = false;
        playeStarted = false;
        // eventuale displaye del vincitore
    }
}

function reset(){
    playerScore.textContent = "0";
    pcScore.textContent = "0"
    nGame = NROUND -1
}

function playPressed(element){ 
    reset();
    playerChoice.textContent =  playerChoiceTemp;
    playRound(playerChoice.textContent, pcChoice.textContent = getComputerChoice()) 
    nGame--
    console.log(nGame);
    btnPlay.disabled = true;
    playeStarted = true
}



function getComputerChoice() {
    const random = Math.floor(Math.random()*3);
    return play[random];
};


function playRound(human, computer){
    // the logic is based on the index of vector play
    numericHuman = play.findIndex(i => i.includes(human));
    numericComputer = play.findIndex(i => i.includes(computer));

    if(numericHuman === numericComputer)
        console.log('draw');
    else if((numericHuman == 0 && numericComputer == 2)||
         (numericHuman == 1 && numericComputer == 0) ||
         (numericHuman == 2 && numericComputer == 1))
        {playerScore.textContent = Number(playerScore.textContent) + 1;}
    else{pcScore.textContent = Number(pcScore.textContent) +1}
}


