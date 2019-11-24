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

const row = 22;
const col = column = 12;
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



//setup as many pieces as wanted
let b = new Array();
function creatPiece() {
    //random position (inside Canvas)
    let x = r + Math.random() * (W - 2 * r);
    let y = -r;
    //random direction
    let vel = 1000;

    b.push(new Ball(x, y, vel))
}

creatPiece();

function render() {
    //fade Canvas
    ctx.fillStyle = "rgba(255,255,255,0.25)"
    ctx.fillRect(0, 0, W, H);

    //draw
    b.forEach(function (piece) {
        piece.draw();
    });

    b[b.length - 1].update();
    if (b[b.length - 1].stop) {
        creatPiece();
    }

    //new frame
    window.requestAnimationFrame(render);
}
render();  //start animate

