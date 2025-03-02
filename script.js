let difficultyIntervals = new Map([
    ["Easy", 10],
    ["Medium", 25],
    ["Hard", 50]
]);

let difficultyTries = new Map([
    ["Easy", 3],
    ["Medium", 4],
    ["Hard", 5]
]);

let difficultyOption = null;
let randomNumber;
let numberOfTriesLeft;

const generateButton = document.querySelector('#generate-button');
const difficultyDropdown = document.getElementById("difficulty-drop-down");
const playButton = document.getElementById("play-button");


difficultyDropdown.addEventListener("change", (e) => {
    difficultyOption = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    numberOfTriesLeft = difficultyTries.get(difficultyOption);
    console.log(`Selected Difficulty: ${difficultyOption}, Tries: ${numberOfTriesLeft}`);
});


generateButton.addEventListener('click', () => {
    if (!difficultyOption) {
        alert("Please select a difficulty first!");
        return;
    }
    randomNumber = Math.floor(Math.random() * (difficultyIntervals.get(difficultyOption) + 1));
    console.log(`Generated Number (hidden): ${randomNumber}`);
});


playButton.addEventListener('click', play);

function play() {
    if (!randomNumber) {
        alert("You must generate a number first!");
        return;
    }

    let won = false;
    let answer = parseInt(prompt("Guess the number:"));

    while (!won && numberOfTriesLeft >= 1) {
        if (answer !== randomNumber) {
            numberOfTriesLeft--;
            if (numberOfTriesLeft > 0) {
                answer = parseInt(prompt(`Wrong! ${numberOfTriesLeft} tries left. Try again:`));
            }
        } else {
            won = true;
        }
    }

    if (won) {
        alert("You Won!");
    } else {
        alert(`You lost! The correct number was ${randomNumber}.`);
    }

    let playAgain = prompt("Do you want to play again? (Y/N)").toLowerCase();
    if (playAgain === 'y') {
        play();
    } else {
        alert("Thanks for playing!");
    }
}