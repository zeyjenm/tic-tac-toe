const cell = document.querySelectorAll('.cell');

// Renders cell content to board
const board = (() => {
    const gameBoard = [
                        '', '', '', 
                        '', '', '', 
                        '', '', '',
                    ];
    function addMarker (cellTarget) {
        let i = cellTarget;
        board.gameBoard[i] = 'x';               // board.gameBoard[i] = player.marker - use x for now.
        for (let i = 0; i < 9; i++) {
        cell[i].textContent = gameBoard[i];
        }
    }
    return {
        gameBoard,
        addMarker,
    }
})();

// player indicator? - x or o? store within player object later, link to button event-listeners

function getMarker () {
    if (input === x) {
        return x;
    }
    else if (input === o) {
        return o;
    }
}

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
