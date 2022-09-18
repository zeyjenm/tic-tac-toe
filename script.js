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
        board.gameBoard[i] = player.markerChoice;               // board.gameBoard[i] = player.marker - use x for now.
        for (let i = 0; i < 9; i++) {
        cell[i].textContent = gameBoard[i];
        }
    }
    return {
        gameBoard,
        addMarker,
    }
})();

// player object



// event listener for getChoice upon clicking a cell - call getChoice
cell.forEach(function (i) {
    i.addEventListener('click', (e) => {
        let cellTarget = e.target.getAttribute('data-value');
        board.addMarker(cellTarget);
    })
})


// Cannot add to a filled spot


// player object?



// AI object

const computerMove = () => {
    // let marker = getMarker();
        let choice = Math.floor(Math.random() * 8);
        board.addMarker(choice);
}


// playGame function





// Rounds until win condition
