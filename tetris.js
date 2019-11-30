const canvas1 = document.querySelector("#c1");
const ctx1 = canvas1.getContext("2d");
const scoreElement = document.getElementById("score");

const canvas2 = document.querySelector("#c2");
const ctx2 = canvas2.getContext("2d");

var W = canvas1.width;
var H = canvas1.height;


document.getElementById("start").addEventListener("click", function resetGame() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
})

const row = 20;
const col = column = 10;
const sq = squareSize = 50;
const vacant = "black"; // color of an empty square

// draw a square
function drawSquare(x, y, color) {
    ctx1.fillStyle = color;
    ctx1.fillRect(x * sq, y * sq, sq, sq);

    ctx1.strokeStyle = "white";
    ctx1.strokeRect(x * sq, y * sq, sq, sq);
}

// create the board

let board = [];
for (r = 0; r < row; r++) {
    board[r] = [];
    for (c = 0; c < col; c++) {
        board[r][c] = vacant;
    }
}

// draw the board
function drawBoard() {
    for (r = 0; r < row; r++) {
        for (c = 0; c < col; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}

drawBoard();
