"use strict";

let dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
if(dayOfWeek === "Friday") {
    console.log(dayOfWeek);
}

let animalInput = prompt("what is your favorite animal?")

let colorInput = prompt("What is your favorite color?")

console.log(`I've never seen a ${colorInput} ${animalInput}`)

// breakfast burrito, burrito, pizza

let timeOfDay = "tea";

let meal = "";

if(timeOfDay < 1200) {
    meal = "breakfast burrito";
}

else if(timeOfDay > 1200 && timeOfDay < 1700) {
    meal = "burrito";
}

else if(timeOfDay > 1700) {
    meal = "pizza";
}

console.log(meal);

let randomNumber = Math.floor(Math.random() * 11);

if(randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
    console.log("Beatles");
}
else if(randomNumber === 3 || randomNumber === 4 || randomNumber === 5) {
    console.log("Stones");
}
else if(randomNumber === 6 || randomNumber === 7 || randomNumber === 8) {
    console.log("Floyd");
}
else if(randomNumber === 9 || randomNumber === 10) {
    console.log("Hendrix");
}

for(let i = 0; i < 7; i++) {
    console.log("JavaScript is cool!");
}

for(let i = 0; i < 11; i++) {
    console.log(i);
}

for(let i = 0; i < 5; i++) {
    console.log("hello");
    console.log("goodbye");
}

let isInstructorAwesome = true

while(isInstructorAwesome == true) {

}

function printMovieName() {
    let bestMovie = "Spirited Away";
    console.log(bestMovie);
}

let myResult = printMovieName()

function favoriteBand() {
    let question = prompt("Enter your favorite band.");
    return question;
}

let question = favoriteBand()
console.log(question)

function concertDisplay(musicalAct) {
    let myStreet = prompt("Enter your street name");
    console.log(`It would be great if ${musicalAct} played a show at ${myStreet}!`);
}

let functionCall = concertDisplay(question)

let desktopItems = ["desk", "monitor", "keyboard"]
console.log(desktopItems[1])
desktopItems.push("Infinity Gauntlet")
let desktopLength = desktopItems.length

for(let i = 0; i < desktopLength; i++) {
    console.log(desktopItems[i]);
}

function magicNumberGame() {
    let magicNumber = Math.floor(Math.random() * 101);
    let guess = 0
    let isRightNumber = false
    
    while(isRightNumber == false) {
        guess = prompt("Guess the correct number");
        parseInt(guess)
        if(guess == magicNumber + 1 || guess == magicNumber + 2 || guess == magicNumber + 3 || guess == magicNumber + 4 || guess == magicNumber + 5 || guess == magicNumber + 6 || guess == magicNumber + 7 || guess == magicNumber + 8 || guess == magicNumber + 9 || guess == magicNumber + 10) {
            console.log("Getting warmer!")
        }
        else if(guess == magicNumber - 1 || guess == magicNumber - 2 || guess == magicNumber - 3 || guess == magicNumber - 4 || guess == magicNumber - 5 || guess == magicNumber - 6 || guess == magicNumber - 7 || guess == magicNumber - 8 || guess == magicNumber - 9 || guess == magicNumber - 10) {
            console.log("Getting warmer!")
        }
        else if(guess < magicNumber) {
            console.log("Too low!")
        }
        else if(guess > magicNumber) {
            console.log("Too high!")
        }
        else if(guess == magicNumber) {
            console.log(`${magicNumber} is correct, you win!`)
            isRightNumber = true
        }
    }
}
let startGame = magicNumberGame()