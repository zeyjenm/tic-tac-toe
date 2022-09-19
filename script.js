const cell = document.querySelectorAll('.cell');
const buttons = document.querySelectorAll('button');
const winner = document.querySelector('.winner p');

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
    function addComputerMarker (cellTarget) {
        let currentWinner = getWinner();
        if (currentWinner == 'Congratulations! You win!') {
            announceWinner();
            return;
        }
        else {
        let i = cellTarget;
        board.gameBoard[i] = getComputerMarker();               
        for (let i = 0; i < 9; i++) {
        setInterval(myCallback, 1200);
        function myCallback () {
            cell[i].textContent = gameBoard[i];
        } }
        }
        announceWinner();
    }
    return {
        gameBoard,
        addMarker,
        addComputerMarker,
        getComputerMarker,
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
    })
})

// Rounds until win condition

const gameOver = () => {
    let computerChoice = board.getComputerMarker();
    if (board.gameBoard[0] == player.markerChoice && board.gameBoard[1] == player.markerChoice && board.gameBoard[2] == player.markerChoice 
        || board.gameBoard[3] == player.markerChoice && board.gameBoard[4] == player.markerChoice && board.gameBoard[5] == player.markerChoice
        || board.gameBoard[6] == player.markerChoice && board.gameBoard[7] == player.markerChoice && board.gameBoard[8] == player.markerChoice) {
            return 'playerWin';
        }
        else if 
            (board.gameBoard[0] == player.markerChoice && board.gameBoard[3] == player.markerChoice && board.gameBoard[6] == player.markerChoice
            || board.gameBoard[1] == player.markerChoice && board.gameBoard[4] == player.markerChoice && board.gameBoard[7] == player.markerChoice
            || board.gameBoard[3] == player.markerChoice && board.gameBoard[5] == player.markerChoice && board.gameBoard[8] == player.markerChoice) {
                return 'playerWin';
            }
        else if (board.gameBoard[0] == player.markerChoice && board.gameBoard[4] == player.markerChoice && board.gameBoard[8] == player.markerChoice 
            || board.gameBoard[2] == player.markerChoice && board.gameBoard[4] == player.markerChoice && board.gameBoard[6] == player.markerChoice) {
                return 'playerWin';
            }
        else if (board.gameBoard[0] == computerChoice && board.gameBoard[1] == computerChoice && board.gameBoard[2] == computerChoice 
            || board.gameBoard[3] == computerChoice && board.gameBoard[4] == computerChoice && board.gameBoard[5] == computerChoice
            || board.gameBoard[6] == computerChoice && board.gameBoard[7] == computerChoice && board.gameBoard[8] == computerChoice) {
                return 'computerWin';
            }
        else if (board.gameBoard[0] == computerChoice && board.gameBoard[3] == computerChoice && board.gameBoard[6] == computerChoice
            || board.gameBoard[1] == computerChoice && board.gameBoard[4] == computerChoice && board.gameBoard[7] == computerChoice
            || board.gameBoard[3] == computerChoice && board.gameBoard[5] == computerChoice && board.gameBoard[8] == computerChoice) {
                return 'computerWin';
            }
        else if (board.gameBoard[0] == computerChoice && board.gameBoard[4] == computerChoice&& board.gameBoard[8] == computerChoice 
            || board.gameBoard[2] == computerChoice && board.gameBoard[4] == computerChoice && board.gameBoard[6] == computerChoice) {
                return 'computerWin';
            } 
        else {
            return 'tie';
        }
}

const getWinner = () => {
   let result = gameOver();
    if (result === 'playerWin') {
        return 'Congratulations! You win!';
    }
    else if (result === 'computerWin') {
        return 'GG (stands for Get Good.) Unfortunately the computer was too good for you!';
    }
    else if (result === 'tie') {
        return "";
    }
    return result;
}

const announceWinner = () => {
    winner.textContent = getWinner();
}
