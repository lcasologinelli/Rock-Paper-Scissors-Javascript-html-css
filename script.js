// Selezione bottoni
const play = document.querySelector("#play");

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorbtn = document.querySelector("#scissor");

const pcrockbtn = document.querySelector("#pcrock");
const pcpaperbtn = document.querySelector("#pcpaper");
const pcscissorbtn = document.querySelector("#pcscissor");

// Genera scelta random del computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3); // 0, 1 o 2
}

// Mostra solo il bottone scelto e nasconde gli altri
function selectPlayerChoice(choice, rock, paper, scissor) {
    rock.style.visibility = "hidden";
    paper.style.visibility = "hidden";
    scissor.style.visibility = "hidden";

    switch (choice) {
        case 0: rock.style.visibility = "visible"; break;
        case 1: paper.style.visibility = "visible"; break;
        case 2: scissor.style.visibility = "visible"; break;
    }
}

// Colora i bottoni: grigio per pareggio, verde per vincitore
function colorButtons(humanChoice = null, pcChoice = null) {
    if (humanChoice !== null && pcChoice !== null) {
        // Pareggio
        switch (humanChoice) {
            case 0: rockbtn.style.backgroundColor = pcrockbtn.style.backgroundColor = "grey"; break;
            case 1: paperbtn.style.backgroundColor = pcpaperbtn.style.backgroundColor = "grey"; break;
            case 2: scissorbtn.style.backgroundColor = pcscissorbtn.style.backgroundColor = "grey"; break;
        }
    } else if (humanChoice !== null) {
        // Vittoria umana
        switch (humanChoice) {
            case 0: rockbtn.style.backgroundColor = "green"; break;
            case 1: paperbtn.style.backgroundColor = "green"; break;
            case 2: scissorbtn.style.backgroundColor = "green"; break;
        }
    } else if (pcChoice !== null) {
        // Vittoria PC
        switch (pcChoice) {
            case 0: pcrockbtn.style.backgroundColor = "green"; break;
            case 1: pcpaperbtn.style.backgroundColor = "green"; break;
            case 2: pcscissorbtn.style.backgroundColor = "green"; break;
        }
    }
}

// Determina il vincitore
function selectWinner(human, pc) {
    if (human === pc) {
        colorButtons(human, pc);
    } else if (
        (human === 0 && pc === 2) ||
        (human === 1 && pc === 0) ||
        (human === 2 && pc === 1)
    ) {
        colorButtons(human, null);
    } else {
        colorButtons(null, pc);
    }
}

// Reset visibilità e colori dei bottoni
function resetProperty() {
    document.querySelectorAll(".humanbtn, .pcbtn").forEach(el => {
        el.style.backgroundColor = "";
        el.style.visibility = "visible";
    });
}

// Evento click "Play"
play.addEventListener("click", () => {
    resetProperty();

    const hchoice = parseInt(prompt("Scegli: 0 (Rock), 1 (Paper), 2 (Scissor)"));
    if (![0,1,2].includes(hchoice)) return alert("Scelta non valida!");

    const pcchoice = getComputerChoice();

    selectPlayerChoice(hchoice, rockbtn, paperbtn, scissorbtn);
    selectPlayerChoice(pcchoice, pcrockbtn, pcpaperbtn, pcscissorbtn);

    selectWinner(hchoice, pcchoice);
});
