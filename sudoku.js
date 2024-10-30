const gridElement = document.getElementById('sudokuGrid');
let currentPuzzle = [];

// Initialize the Sudoku grid
function createGrid() {
    gridElement.innerHTML = ''; // Clear previous grid
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div'); // create new div for each cell of the puzzel
            cell.classList.add('cell');
            if (i % 3 === 0) cell.classList.add('subgrid-border-top');
            if (j % 3 === 0) cell.classList.add('subgrid-border-left');
            gridElement.appendChild(cell);
        }
    }
}

// Set the puzzle on the board
function setPuzzle(puzzle) {
    const cells = document.querySelectorAll('.cell'); // select the cell
    puzzle.flat().forEach((value, index) => { // meke the game 1D to make it easier to iterate
        cells[index].textContent = value === 0 ? '' : value; // put the text content in the cells
        cells[index].classList.toggle('disabled', value !== 0);
    });
}

// Generate a complete Sudoku board (recursive backtracking)
function generateCompleteBoard() {
    const board = Array.from({ length: 9 }, () => Array(9).fill(0));

    function isValid(board, row, col, num) { // check if the placing of the numbers is valid
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) return false; // check if there is a dublicated in the board
        }
        const [startRow, startCol] = [Math.floor(row / 3) * 3, Math.floor(col / 3) * 3]; // calc where is the start of the 3x3 board
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] === num) return false; // ensure if the number is not dublicated in the board
            }
        }
        return true;
    }

    function solve(board) { // recursive func to fill the board
        for (let row = 0; row < 9; row++) { // check the board and see if there is empty cell donated by 0 like what be implement up there and fill it
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === 0) {
                    // create an array of nums from 1 to 9 and fill it randomly
                    const numbers = Array.from({ length: 9 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
                    for (const num of numbers) { // try every number 
                        if (isValid(board, row, col, num)) { // check if the number can be placed in the cell
                            board[row][col] = num;
                            if (solve(board)) return true;
                            board[row][col] = 0; // backtracking to reset the cell if the placement of the number is not correct
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    solve(board);
    return board;
}

// Create a playable puzzle by removing numbers from the complete board
function createPuzzle(board, difficulty = 60) { // create 40 cells with numbers that complete the sudoku board
    const puzzle = board.map(row => [...row]); // create a copy of the board and each row is cloned using seperator (.)
    let cellsToRemove = difficulty; // difficulty here means the number of cells
    while (cellsToRemove > 0) { // ramdomly select a row and colomn to add a random number to it
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        if (puzzle[row][col] !== 0) { // check if the selected cell is empty or not
            puzzle[row][col] = 0;
            cellsToRemove--;
        }
    }
    return puzzle;
}

// Visualize the solving process with a delay using forward checking
async function solvePuzzle(puzzle) {
    function isValid(puzzle, row, col, num) { // check if the number that will be replaced will not be dublicated or not in the same row and column
        return !puzzle[row].includes(num) &&
            !puzzle.some(r => r[col] === num) &&
            !puzzle.slice(Math.floor(row / 3) * 3, Math.floor(row / 3) * 3 + 3) // check if the number is not duplicated in the same 3x3 grid
                .flatMap(r => r.slice(Math.floor(col / 3) * 3, Math.floor(col / 3) * 3 + 3))
                .includes(num);
    }

    async function getPossibleNumbers(puzzle, row, col) {
        const used = new Set(); // add all the numbers that used before
        for (let i = 0; i < 9; i++) {
            used.add(puzzle[row][i]); // Check row
            used.add(puzzle[i][col]); // Check column
        } // add new numbers to the 3x3 grid with the used numbers
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                used.add(puzzle[i][j]); // Check subgrid
            }
        }
        return Array.from({ length: 9 }, (_, i) => i + 1).filter(num => !used.has(num)); // reeturn the not used numbers
    }

    async function solve(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) { // search for an empty cell
                if (board[row][col] === 0) {
                    const possibleNumbers = await getPossibleNumbers(board, row, col);
                    for (const num of possibleNumbers) {
                        board[row][col] = num; // Place the number, and try every possible number to solve the puzzel
                        setPuzzle(board); // Update the board
                        await new Promise(resolve => setTimeout(resolve, 40)); // Delay
                        if (await solve(board)) return true; // Recur
                        board[row][col] = 0; // Backtrack if the placing the number cause dead end, it returns to last cell and reset it
                        setPuzzle(board); // Update the board visually
                        await new Promise(resolve => setTimeout(resolve, 40)); // Delay for visualization
                    }
                    return false; // No valid number found
                }
            }
        }
        return true; // Puzzle solved
    }

    await solve(puzzle);
}

// Disable buttons during the solving process
function disableButtons() {
    document.querySelectorAll('button').forEach(button => { // disable the buttons when user click on solve
        button.disabled = true;
    });
}

// Enable buttons after the solving process
function enableButtons() {
    document.querySelectorAll('button').forEach(button => { // enable the buttons again when the game solved
        button.disabled = false;
    });
}

// Button event handlers
document.getElementById('newPuzzleBtn').addEventListener('click', () => {
    disableButtons(); // Disable buttons when starting a new puzzle
    const completeBoard = generateCompleteBoard();
    currentPuzzle = createPuzzle(completeBoard);
    setPuzzle(currentPuzzle);
    enableButtons(); // Re-enable buttons after setting the puzzle
});

document.getElementById('solveBtn').addEventListener('click', async () => {
    disableButtons(); // Disable buttons while solving
    await solvePuzzle(currentPuzzle);
    enableButtons(); // Re-enable buttons after solving
});

// Initialize the grid on page load
createGrid();
currentPuzzle = createPuzzle(generateCompleteBoard());
setPuzzle(currentPuzzle);