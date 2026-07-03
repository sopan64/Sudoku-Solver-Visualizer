const cells = document.querySelectorAll(".board input");

for(let i=0; i<cells.length; i++){
    cells[i].addEventListener("input", function(){

        let num = Number(cells[i].value);

        if(cells[i].value !== "" && (isNaN(num) || num < 1 || num > 9)){
            cells[i].value = "";
        }
    });
}

const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", function(){
    for(let i=0; i<cells.length; i++){
        cells[i].value = "";
    }
});

const board1 = [
    ['5','3','.','.','7','.','.','.','.'],
    ['6','.','.','1','9','5','.','.','.'],
    ['.','9','8','.','.','.','.','6','.'],
    ['8','.','.','.','6','.','.','.','3'],
    ['4','.','.','8','.','3','.','.','1'],
    ['7','.','.','.','2','.','.','.','6'],
    ['.','6','.','.','.','.','2','8','.'],
    ['.','.','.','4','1','9','.','.','5'],
    ['.','.','.','.','8','.','.','7','9']
];
const board2 = [
    ['.','2','.','6','.','8','.','.','.'],
    ['5','8','.','.','.','9','7','.','.'],
    ['.','.','.','.','4','.','.','.','.'],
    ['3','7','.','.','.','.','5','.','.'],
    ['6','.','.','.','.','.','.','.','4'],
    ['.','.','8','.','.','.','.','1','3'],
    ['.','.','.','.','2','.','.','.','.'],
    ['.','.','9','8','.','.','.','3','6'],
    ['.','.','.','3','.','6','.','9','.']
];
const board3 = [
    ['.','.','.','2','6','.','7','.','1'],
    ['6','8','.','.','7','.','.','9','.'],
    ['1','9','.','.','.','4','5','.','.'],
    ['8','2','.','1','.','.','.','4','.'],
    ['.','.','4','6','.','2','9','.','.'],
    ['.','5','.','.','.','3','.','2','8'],
    ['.','.','9','3','.','.','.','7','4'],
    ['.','4','.','.','5','.','.','3','6'],
    ['7','.','3','.','1','8','.','.','.']
];
const board4 = [
    ['.','.','5','3','.','.','.','.','.'],
    ['8','.','.','.','.','.','.','2','.'],
    ['.','7','.','.','1','.','5','.','.'],
    ['4','.','.','.','.','5','3','.','.'],
    ['.','1','.','.','7','.','.','.','6'],
    ['.','.','3','2','.','.','.','8','.'],
    ['.','6','.','5','.','.','.','.','9'],
    ['.','.','4','.','.','.','.','3','.'],
    ['.','.','.','.','.','9','7','.','.']
];

const examples = [board1, board2, board3, board4];

const exBtn = document.querySelector("#example");

exBtn.addEventListener("click", function(){
    let index = Math.floor(Math.random()*examples.length);
    let exboard = examples[index];

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let id = 9*i+j;
            if(exboard[i][j] == '.') cells[id].value = "";
            else cells[id].value = exboard[i][j];
        }
    }
});

function isValid(board, row, col, str){
    for(let i=0; i<9; i++){
        if(i != col && board[row][i] == str) return false;
    }
    for(let i=0; i<9; i++){
        if(i != row && board[i][col] == str) return false;
    }
    let r = row - row%3;
    let c = col - col%3;

    for(let i=r; i<r+3; i++){
        for(let j=c; j<c+3; j++){
            if((i != row || j != col) && board[i][j] == str) return false;
        }
    }
    return true;
}

function solve(board){
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] == '.'){
                for(let k = 1; k<=9; k++){
                    let num = k.toString();
                    board[i][j] = num;
                    if(isValid(board, i, j, num)){
                        if(solve(board)) return true;
                    }
                    board[i][j] = '.';
                }
                return false;
            }
        }
    }
    return true;
}

function validBoard(board){
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] != '.'){
                if(!isValid(board, i, j, board[i][j]))
                    return false;
            }
        }
    }
    return true;
}

const solveBtn = document.querySelector("#solve");

solveBtn.addEventListener("click", function(){
    const newBoard = [];
    for(let i=0; i<9; i++){
        newBoard.push([]);
    }
    let count = 0;

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let id = 9*i+j;
            if(cells[id].value == "") newBoard[i].push('.');
            else{
                newBoard[i].push(cells[id].value);
                count++;
            }
        }
    }
    if(count == 0){
        alert("Please enter a sudoku or click 'Example'.");
        return;
    }
    if(!validBoard(newBoard)){
        alert("Invalid Sudoku!");
        return;
    }
    if(!solve(newBoard)){
        alert("No solution exists!");
        return;
    }
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let id = 9*i+j;
            if(newBoard[i][j] == '.') cells[id].value = "";
            else cells[id].value = newBoard[i][j];
        }
    }
});