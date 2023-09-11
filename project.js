// 1. Deposite money
// 2. Determine number of lines to bet on
// 3. collect bet amount
// 4. Spim the slot machine
// 5. check if user won
// 6. give winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a depsit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const numberOfLines = prompt("Enter the number of lines to bet on (1-3): ");
        const lines = parseInt(numberOfLines);
        if (isNaN(lines) || lines <= 0 || lines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return lines;
        }
    }
}

const getBet = (balance, numberOfLines) => {
    while (true) {
        const bet = prompt("Enter the betting amount per line: ");
        const betVal = parseInt(bet);
        if (isNaN(betVal) || betVal <= 0 || betVal >= (balance / numberOfLines)) {
            console.log("Invalid betting amount, try again.");
        } else {
            return betVal;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
console.log(balance);
console.log(numberOfLines);
console.log(bet);