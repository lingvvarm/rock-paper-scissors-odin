"use strict"

function getComputerChoice() {
    let plays = ["rock", "paper", "scissors"];
    let chosen = plays[Math.floor(Math.random() * plays.length)];
    return chosen
}

function play_round(playerSelection, computerSelection) {

    let beats = {
        "scissors": "paper",
        "paper": "rock",
        "rock": "scissors",
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

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

rock.addEventListener('click', function() {
    game('rock');
});
paper.addEventListener('click', function() {
    game('paper')
});
scissors.addEventListener('click', function() {
    game('scissors');
});


function capitalize(str) {
    return str.at(0).toUpperCase() + str.slice(1).toLowerCase()
}


function game(play) {
    let computerSelection = getComputerChoice();
    let winner = play_round(play, computerSelection);
    let player_score = document.querySelector('.human-score');
    let cpu_score = document.querySelector('.cpu-score');
    let msg_text = document.querySelector('.msg-text');
    let msg_subtext = document.querySelector('.msg-subtext');
    
    if (winner == "player") {
        let new_score = Number(player_score.textContent) + 1;
        player_score.textContent = String(new_score);
        msg_text.textContent = `Your ${capitalize(play)} beats Computer's ${capitalize(computerSelection)}`;
        msg_subtext.textContent = "You win!";
    }
    else if (winner == "cpu") {
        let new_score = Number(cpu_score.textContent) + 1;
        cpu_score.textContent = String(new_score);
        msg_text.textContent = `Computer's ${capitalize(computerSelection)} beats Your ${capitalize(play)}`;
        msg_subtext.textContent = "You lose!";
    }
    else {
        msg_text.textContent = `It's a tie!`;
        msg_subtext.textContent = "";
    }

    setTimeout(() => {
        if (player_score.textContent == 5) {
            alert("You won. Congtatulations!");
            player_score.textContent = "0";
            cpu_score.textContent = "0";
            msg_subtext.textContent = "";
            msg_text.textContent = "";
        }
        else if (cpu_score.textContent == 5) {
            alert("You lost. Try again!");
            player_score.textContent = "0";
            cpu_score.textContent = "0";
            msg_subtext.textContent = "";
            msg_text.textContent = "";
        }
        
    }, 0);
    
}

