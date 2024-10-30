# Sudoku Using CSP Algorithms
A web-based Sudoku puzzle generator and solver built using HTML, CSS, and JavaScript. The application uses Constraint Satisfaction Problem (CSP) algorithms, including Backtracking and forward checking, to generate and solve Sudoku puzzles.


## 🛠️ Features
- **Random Puzzle Generation**: Generates Sudoku puzzles with customizable difficulty.
- **Visual Backtracking Solver**: Displays each step of the backtracking algorithm in real-time.
- **Modern Design**: A clean and responsive interface using CSS.
- **Interactive UI**: Users can generate new puzzles or solve them with a single click.
- **Button Locking**: Prevents multiple clicks during solving to ensure correct behavior.

## 📂 Project Structure

    /project-folder
    │
    ├── index.html         # Main HTML structure
    ├── styles.css         # CSS for styling the UI
    ├── script.js          # JavaScript logic for puzzle generation and solving
    └── README.md          # Documentation (this file)


🖥️ Installation

Clone the repository:

    git clone https://github.com/abdullahM245/Sudoku-Game-Using-CSP-Algorithm.git
    cd Sudoku-Game-Using-CSP-Algorithm

Open the project in Visual Studio Code:

    code .

Open the application:

   Simply open the index.html file in your browser.

    
🔑 Usage

- Generate a New Puzzle:
    Click the "New Puzzle" button to generate a random Sudoku board.

- Solve the Puzzle:
    Click the "Solve" button to watch the backtracking algorithm solve the puzzle step-by-step.

- Customize Difficulty:
    Adjust the difficulty in the createPuzzle() function inside script.js by changing the number of cells displayed (default: 60).


⚙️ How It Works

- Puzzle Generation:
    The createPuzzle() function removes a random number of cells from a fully filled Sudoku board to create a playable puzzle.

- Backtracking Solver:
    The solvePuzzle() function applies backtracking with forward checking, trying different values until the board is solved.

- UI Handling:
    Buttons are locked during solving to prevent interference, and the board updates with each step of the solution.



💡 Acknowledgments

Sudoku Algorithm Reference
Backtracking and forward checking inspiration from various online sources.


📧 Contact

For any questions or feedback, feel free to reach out:

- GitHub: https://github.com/abdullahM245/Tic-Tac_Toe-Using-Search-Algorithms

- Email: abdullahmousa.work@gmail.com
