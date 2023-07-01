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
        return "It's a tie!";
    }
    else if (beats[playerSelection] == computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    
}


function game() {
    let player_wins = 0, computer_wins = 0;
    let result, playerChoice;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Enter your choice: ");
        result = play_round(playerChoice, getComputerChoice());
        
        if (result == "error") {
            return "Wrong input. Try again."
        }
        console.log(result);
        let verdict = result.split(" ")[1]
        if (verdict == "Win!") {
            player_wins += 1;
        }
        else if (verdict == "Lose!") {
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