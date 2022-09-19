const cell = document.querySelectorAll('.cell');
const buttons = document.querySelectorAll('button');

player = {
    markerChoice: [],
}

// Marker choice
buttons.forEach(function (i) {
    i.addEventListener('click', (e) => {
        let markerChoice = e.target.getAttribute('id');
        if (markerChoice === 'x') {
            player.markerChoice.unshift('x');
        }
        else if (markerChoice === 'o') {
            player.markerChoice.unshift('o');
        }
    })
})
console.log(player.markerChoice);

// Renders cell content to board
const board = (() => {
    const gameBoard = [
                        '', '', '', 
                        '', '', '', 
                        '', '', '',
                    ];
    function addMarker (cellTarget) {
        let i = cellTarget;
        board.gameBoard[i] = player.markerChoice[0];               
        for (let i = 0; i < 9; i++) {
        cell[i].textContent = gameBoard[i];
        }
    }
    function addComputerMarker (cellTarget) {
        let i = cellTarget;
        const getComputerMarker = () => {
        if (player.markerChoice == 'o') {
            let computerMarker = 'x';
            return computerMarker;
        }
        else {
            let computerMarker = 'o';
            return computerMarker;
        }
    }
        board.gameBoard[i] = getComputerMarker();               
        for (let i = 0; i < 9; i++) {
        cell[i].textContent = gameBoard[i];
        }
    }
    return {
        gameBoard,
        addMarker,
        addComputerMarker,
    }
})();

console.log(board.gameBoard);


const computerMove = () => {
    // let marker = getMarker();
        let choice = Math.floor(Math.random() * 8);
        if (board.gameBoard[choice] != '') {
            computerMove();
        }
        else {
        board.addComputerMarker(choice);
        }
}

// event listener for getChoice upon clicking a cell - call getChoice


// playGame function
cell.forEach(function (i) {
    i.addEventListener('click', (e) => {
        let cellTarget = e.target.getAttribute('data-value');
        board.addMarker(cellTarget);
        let playerCount = 0;
        let computerCount = 0;
        playerCount++;
        if (playerCount != computerCount) {
            computerMove();
        }
        getWinner();
    })
})

// Rounds until win condition

const gameOver = () => {
    if (board.gameBoard[0] === player.markerChoice && board.gameBoard[1] === player.markerChoice && board.gameBoard[2] === player.markerChoice 
        || board.gameBoard[3] === player.markerChoice && board.gameBoard[4] === player.markerChoice && board.gameBoard[5] === player.markerChoice
        || board.gameBoard[6] === player.markerChoice && board.gameBoard[7] === player.markerChoice && board.gameBoard[8] === player.markerChoice) {
            return 'playerWin';
        }
        else if 
            (board.gameBoard[0] === player.markerChoice && board.gameBoard[3] === player.markerChoice && board.gameBoard[6] === player.markerChoice
            || board.gameBoard[2] === player.markerChoice && board.gameBoard[4] === player.markerChoice && board.gameBoard[7] === player.markerChoice
            || board.gameBoard[3] === player.markerChoice && board.gameBoard[5] === player.markerChoice && board.gameBoard[8] === player.markerChoice) {
                return 'playerWin';
            }
        else if (board.gameBoard[0] === player.markerChoice && board.gameBoard[4] === player.markerChoice && board.gameBoard[8] === player.markerChoice 
            || board.gameBoard[2] === player.markerChoice && board.gameBoard[4] === player.markerChoice && board.gameBoard[6] === player.markerChoice)
                return 'playerWin';
      /*  else if (board.gameBoard[0] && board.gameBoard[1] && board.gameBoard[2] !== player.markerChoice 
            || board.gameBoard[3] !== player.markerChoice && board.gameBoard[4] !== player.markerChoice && board.gameBoard[5] !== player.markerChoice
            || board.gameBoard[6] !== player.markerChoice && board.gameBoard[7] !== player.markerChoice && board.gameBoard[8] !== player.markerChoice) {
                return 'computerWin';
            }
        else if (board.gameBoard[0] !== player.markerChoice && board.gameBoard[3] !== player.markerChoice && board.gameBoard[6] !== player.markerChoice 
            || board.gameBoard[2] !== player.markerChoice && board.gameBoard[4] !== player.markerChoice && board.gameBoard[7] !== player.markerChoice
            || board.gameBoard[3] !== player.markerChoice && board.gameBoard[5] !== player.markerChoice && board.gameBoard[8] !== player.markerChoice) {
                return 'computerWin';
            }
        else if (board.gameBoard[0] !== player.markerChoice && board.gameBoard[4] !== player.markerChoice && board.gameBoard[8] !== player.markerChoice 
            || board.gameBoard[2] !== player.markerChoice && board.gameBoard[4] !== player.markerChoice && board.gameBoard[6] !== player.markerChoice) {
                return 'computerWin';
            } */
        else {
            return 'tie';
        }
}

const getWinner = () => {
   let result = gameOver();
    if (result === 'playerWin') {
        console.log('Congratulations! You win!');
    }
    else if (result === 'computerWin') {
        console.log('GG. Unfortunately the computer was too good for you!');
    }
    else if (result === 'tie') {
        console.log("What an intense game! It's a draw.");
    }
}

