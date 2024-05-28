const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const PiedraPiedra = 0;
const PiedraPapel = 1;
const PiedraTijeras = 2;

const PapelPiedra = 3;
const PapelPapel = 4;
const PapelTijeras = 5;

const TijerasPiedra = 6;
const TijerasPapel = 7;
const TijerasTijeras = 8;

let isPlaying = false;
let userWins = 0;
let machineWins = 0;

const rockBtn = document.getElementById("piedra");
const paperBtn = document.getElementById("papel");
const scissorsBtn = document.getElementById("tijeras");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");
const userWinsText = document.getElementById("user-wins");
const machineWinsText = document.getElementById("machine-wins");

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOption) {
    if (isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".png";

    resultText.innerHTML = "Eligiendo armas...";

    const interval = setInterval(function () {
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".png";
    }, 100);

    setTimeout(function () {
        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".png";

        switch (result) {
            case PiedraPiedra:
                resultText.innerHTML = "Ups, parece que todos tenemos piedras. <br> Hay empate.";
                break;
            case PiedraPapel:
                resultText.innerHTML = "El papel envuelve a la piedra. <br> Gana la Máquina.";
                machineWins++;
                break;
            case PiedraTijeras:
                resultText.innerHTML = "La piedra rompe las tijeras. <br> Gana el Jugador.";
                userWins++;
                break;
            case PapelPiedra:
                resultText.innerHTML = "El papel envuelve a la piedra. <br> Gana el Jugador.";
                userWins++;
                break;
            case PapelPapel:
                resultText.innerHTML = "Ups, parece que todos tenemos papel. <br> Hay empate.";
                break;
            case PapelTijeras:
                resultText.innerHTML = "Las tijeras cortan el papel. <br> Gana la Máquina";
                machineWins++;
                break;
            case TijerasPiedra:
                resultText.innerHTML = "La piedra rompe las tijeras. <br> Gana la Máquina.";
                machineWins++;
                break;
            case TijerasPapel:
                resultText.innerHTML = "Las tijeras cortan el papel. <br> Gana el Jugador.";
                userWins++;
                break;
            case TijerasTijeras:
                resultText.innerHTML = "Ups, parece que todos tenemos tijeras. <br> Hay empate.";
                break;
        }

        // Update score
        userWinsText.textContent = userWins;
        machineWinsText.textContent = machineWins;

        // Check if someone has won 3 times
        if (userWins === 3 || machineWins === 3) {
            if (userWins === 3) {
                resultText.textContent = "GANA EL JUGADOR";
            } else {
                resultText.textContent = "GANA LA MÁQUINA";
            }
            isPlaying = false;
            disableButtons();
        } else {
            isPlaying = false;
        }
    }, 2000);
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === ROCK) {
        if (machineOption === ROCK) return PiedraPiedra;
        if (machineOption === PAPER) return PiedraPapel;
        if (machineOption === SCISSORS) return PiedraTijeras;
    } else if (userOption === PAPER) {
        if (machineOption === ROCK) return PapelPiedra;
        if (machineOption === PAPER) return PapelPapel;
        if (machineOption === SCISSORS) return PapelTijeras;
    } else if (userOption === SCISSORS) {
        if (machineOption === ROCK) return TijerasPiedra;
        if (machineOption === PAPER) return TijerasPapel;
        if (machineOption === SCISSORS) return TijerasTijeras;
    }
}
