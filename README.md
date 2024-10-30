# Sudoku Solver & Generator

A web-based Sudoku puzzle generator and solver built using HTML, CSS, and JavaScript. The application allows users to generate random Sudoku puzzles with adjustable difficulty and provides a visual backtracking algorithm to solve the puzzle step-by-step.


(Add a relevant screenshot here by placing the image in your project folder)
🛠️ Features

    Random Puzzle Generation: Generates Sudoku puzzles with customizable difficulty.
    Visual Backtracking Solver: Displays each step of the backtracking algorithm in real-time.
    Modern Design: A clean and responsive interface using CSS.
    Interactive UI: Users can generate new puzzles or solve them with a single click.
    Button Locking: Prevents multiple clicks during solving to ensure correct behavior.

🚀 Demo

You can try the live version of this project here: Live Demo
(Update with a link to the live demo if hosted on GitHub Pages or any platform.)
📂 Project Structure

bash

/project-folder
│
├── index.html         # Main HTML structure
├── styles.css         # CSS for styling the UI
├── script.js          # JavaScript logic for puzzle generation and solving
└── README.md          # Documentation (this file)

🖥️ Installation

    Clone the repository:

    bash

git clone https://github.com/your-username/sudoku-solver.git
cd sudoku-solver

Open the project in Visual Studio Code:

bash

    code .

    Open the application:
        Simply open the index.html file in your browser.

🔑 Usage

    Generate a New Puzzle:
        Click the "New Puzzle" button to generate a random Sudoku board.

    Solve the Puzzle:
        Click the "Solve" button to watch the backtracking algorithm solve the puzzle step-by-step.

    Customize Difficulty:
        Adjust the difficulty in the createPuzzle() function inside script.js by changing the number of cells displayed (default: 30).

⚙️ How It Works

    Puzzle Generation:
        The createPuzzle() function removes a random number of cells from a fully filled Sudoku board to create a playable puzzle.

    Backtracking Solver:
        The solvePuzzle() function applies backtracking with forward checking, trying different values until the board is solved.

    UI Handling:
        Buttons are locked during solving to prevent interference, and the board updates with each step of the solution.

🛠️ Technologies Used

    HTML5 – Structure of the web page
    CSS3 – Styling the UI with modern design
    JavaScript – Puzzle logic and visual solver

🤝 Contributing

Feel free to contribute to this project by forking the repository and submitting a pull request. Make sure to follow these steps:

    Fork the project.
    Create your feature branch:

    bash

git checkout -b feature/new-feature

Commit your changes:

bash

git commit -m 'Add some feature'

Push to the branch:

bash

    git push origin feature/new-feature

    Open a pull request.

📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.
💡 Acknowledgments

    Sudoku Algorithm Reference
    Backtracking and forward checking inspiration from various online sources.

📧 Contact

For any questions or feedback, feel free to reach out:

    GitHub: your-username
    Email: your-email@example.com
