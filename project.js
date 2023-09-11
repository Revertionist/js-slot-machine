// 1. Deposite money
// 2. Determine number of lines to bet on
// 3. collect bet amount
// 4. Spim the slot machine
// 5. check if user won
// 6. give winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8,
}

const SYMBOLS_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
}



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
};

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
};

const spin = () => {
    const symbols = [];
    for ([symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);

        }
    }
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex]
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};


const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of row.entries()) {
            rowString += symbol;
            if (i != row.length -1 ){
                rowString += " | ";
            }
        }
        console.log(rowString);
    }
}


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
console.log(balance);
console.log(numberOfLines);
console.log(bet);
console.log(reels);
console.log(rows)
printRows(rows);