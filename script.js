"use strict"

function getComputerChoice() {
    let plays = ["Rock", "Paper", "Scissors"];
    let chosen = plays[Math.floor(Math.random() * plays.length)];
    return chosen
}

function count_plays() {
    let counter = {
        "Rock": 0,
        "Paper": 0,
        "Scissors":0,
    }
    for (let i=0; i <= 100; i++) {
        let play = getComputerChoice();
        counter[play] += 1;
    }

    for (let [key, value] of Object.entries(counter)) {
        console.log(`${key}: ${value}`)
    }
}

