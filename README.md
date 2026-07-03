# 🧩 Interactive Sudoku Solver

A web-based Sudoku Solver built using HTML, CSS, and JavaScript.

The application enables users to solve custom Sudoku puzzles, load random sample boards, validate puzzle inputs, and compute solutions using a recursive backtracking algorithm.

## 🌐 Live Demo

🔗 https://sopan64.github.io/Sudoku-Solver-Visualizer/

## ✨ Features

- Solve any valid Sudoku puzzle
- Random example puzzles
- Detect invalid Sudoku boards
- Detect unsolvable puzzles
- Input validation (only digits 1–9)
- Mobile responsive interface
- Clean and simple UI

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## 🧠 Algorithm

This project uses the **Backtracking Algorithm** to solve Sudoku puzzles.

The algorithm works by:

1. Finding the next empty cell.
2. Trying digits from **1 to 9**.
3. Checking whether the digit is valid according to Sudoku rules.
4. Recursively solving the remaining board.
5. Backtracking whenever no valid digit can be placed.

This guarantees finding a solution if one exists.

## 📂 Project Structure

```text
Sudoku-Solver-Visualizer
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 📚 What I Learned

While building this project, I learned:

- Recursive Backtracking
- DOM Manipulation
- Event Handling in JavaScript
- Input Validation
- Responsive Web Design
- Git & GitHub Deployment