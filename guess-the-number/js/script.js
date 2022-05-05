const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_TURNS = 10;


function submitNumber(evt) {
    evt.preventDefault();
    let number = evt.target.elements["guess-input"].value;

    if (number == randomNumber) {
        flashCorrectMessage(number);
        gameover(number, "win");
    } else {
        if (currentTurn == MAX_TURNS) {
            gameover(number, "lose");
        } else {
            flashWrongMessage(number);
            saveResult(number);
            currentTurn++;
        }
    }
}


function gameover(number, result) {
    // Disable submit form.
    // https://stackoverflow.com/a/3387116/14748231
    for (element of form.elements) {
        element.readOnly = true;
    }

    generalDiv.style.opacity = "20%";

    if (result == "win") {
        gameoverTitlePh.textContent = `Correct number: ${number}.\n You win!`;
        gameoverTitlePh.style.color = "green";
    } else if (result == "lose") {
        gameoverTitlePh.textContent = `Out of turns! Correct number was: ${number}.\n You lost!`
        gameoverTitlePh.style.color = "red";
    }

    gameoverDiv.style.display = "block";
}


function restart() {
    window.location.reload();
}


function flashCorrectMessage(number) {
    flashDiv.style.color = "green";
    flashDiv.textContent = `Correct value ${number}!`;
}


function flashWrongMessage(number) {
    let offset = calculateOffset(number);
    flashDiv.style.color = "red";
    flashDiv.innerHTML = `
        Wrong value: ${number}! Guess is too ${offset}.
        <br>Attempts left: ${MAX_TURNS - currentTurn}.
    `;
}


function calculateOffset(number) {
    if (number < randomNumber) {
        return "low"
    } else {
        return "high"
    }
}


function saveResult(number) {
    let entry = document.createElement("li");

    entry.textContent = number;
    if (!isGuessListActive()) {
        guessList.style.display = "block";
    }
    guessList.append(entry);
}


function isGuessListActive() {
    // If you want to read display state, you should fetch it's computated version.
    // If you want to write display state, it's no problem since you just overwriting.
    // https://stackoverflow.com/a/2298849/14748231
    let displayStyle = window.getComputedStyle(guessList).display;
    
    if (displayStyle == "none") {
        return false;
    } else {
        return true;
    }
}


function randomInt(min, max) {
    /* Generate random integer from min to max given limits.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
    NOTE: This source says that "The maximum is exclusive and the minimum is inclusive" but it's wrong,
    maximum and minimum given values are inclusive.
    */
    // Ceil and floor given values to ensure it's integers.
    min = Math.ceil(min);
    max = Math.floor(max);

    // Basically, Math.random() generates a random koefficient which multiplied by difference of limits (max - min)
    // and min value then added to not receive zero whole (which then will be floored to zero).
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


const generalDiv = document.querySelector(".general");
const form = document.querySelector(".guess");
const flashDiv = document.querySelector(".flash");
const gameoverDiv = document.querySelector(".gameover");
const gameoverTitlePh = document.querySelector(".gameover-title__text");
const guessList = document.querySelector(".guess-list");
const randomNumber = randomInt(MIN_NUMBER, MAX_NUMBER);
const restartBtn = document.querySelector(".gameover-restart__btn");
let currentTurn = 1;

form.addEventListener("submit", submitNumber);
restartBtn.addEventListener("click", restart);
