"use strict"

function getComputerChoice() {
    let plays = ["Rock", "Paper", "Scissors"];
    let chosen = plays[Math.floor(Math.random() * plays.length)];
    return chosen
}

function play_round(playerSelection, computerSelection) {

    let beats = {
        "scissors": "paper",
        "paper": "rock",
        "rock": "scissors",
    }

    if (playerSelection == null || playerSelection == "" || (!(playerSelection.toLowerCase() in beats))) {
        return "error";
    }

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if (beats[playerSelection] == computerSelection) {
        return "player";
    }
    else {
        return "cpu";
    }
    
}


function game() {
    let player_wins = 0, computer_wins = 0;
    let winner, playerChoice;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Enter your choice: ");
        winner = play_round(playerChoice, getComputerChoice());
        
        if (winner == "error") {
            return "Wrong input. Try again."
        }
        if (winner == "player") {
            player_wins += 1;
        }
        else if (winner == "cpu") {
            computer_wins += 1;
        }
        else {
            i--;
            continue;
        }
    }

    if (player_wins > computer_wins) {
        return "You win!";
    }
    else if (computer_wins > player_wins) {
        return "You lose!";
    }
}

console.log(game());