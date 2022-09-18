const cell = document.querySelectorAll('.cell');


const board = (() => {
    const gameBoard = [
                        'x', 'o', 'x', 
                        'o', 'x', 'o', 
                        'x', 'o', 'x',
                    ];
    for (let i = 0; i < 9; i++) {
        cell[i].textContent = gameBoard[i];
    }
    return {
        gameBoard,
    }
})();


