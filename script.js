let difficultyIntervals = new Map([
    ["Easy", 10],
    ["Medium", 25],         
    ["Hard", 50]  
]);

let difficulyTries = new Map([
    ["Easy", 3],
    ["Medium", 4],
    ["Hard", 5]
])

let difficultyOption;
let randomNumber;
let numberOfTriesLeft;
const button = document.querySelector('#generate-button');
button.addEventListener('click', e => {
    console.log();
    randomNumber = Math.floor((Math.random() * difficultyIntervals.get(difficultyOption)));
    console.log(randomNumber);
})

const easyOption = document.getElementById("easy-option")
const mediumOption = document.getElementById("medium-option")
const hardOption = document.getElementById("hard-option")

easyOption.addEventListener('click', e => {
    console.log("Easy");
    difficultyOption = "Easy"
    numberOfTriesLeft = difficulyTries.get(difficultyOption)
})
mediumOption.addEventListener('click', e => {
    difficultyOption = "Medium"
    numberOfTriesLeft = difficulyTries.get(difficultyOption)
})
hardOption.addEventListener('click', e => {
    difficultyOption = "Hard"
    numberOfTriesLeft = difficulyTries.get(difficultyOption)
})

const playButton = document.getElementById("play-button")
playButton.addEventListener('click', play)

function play(e){
    let won = false
    let answer;
    answer = prompt("Give a number")
    while(!won && numberOfTriesLeft > 1){
        if(answer != randomNumber){
            numberOfTriesLeft--
            answer = prompt(`Wrong answer, ${numberOfTriesLeft} tries left. Try again:`)
        }
        else if (answer == randomNumber){
            won = true
        }
    }
    if(numberOfTriesLeft == 1){
        alert("You lost !")
    }
    if(won){
        alert("You Won !")
    }
    let playAgain = prompt('Do you want to play again ? (Y/N)')
    if(playAgain == 'Y'){
        play(e)
    }
    else {
        return
    }
}
