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
let x = 2;
let y = -1;
let frameCounter = 0;
const T = 1;
let rnd;

window.addEventListener('keydown', ArrowPressed);
window.addEventListener('keyup', ArrowReleased);


// DESENHAR UM QUADRADO
function drawSquare(x, y, color) {
    ctx1.fillStyle = color;
    ctx1.fillRect(x * sq, y * sq, sq, sq);

    ctx1.strokeStyle = "white";
    ctx1.strokeRect(x * sq, y * sq, sq, sq);
}

// CRIAR O CAMPO

let board = [];
for (r = 0; r < row; r++) {
    board[r] = [];
    for (c = 0; c < col; c++) {
        board[r][c] = vacant;
    }
}

// DESENHAR O CAMPO

function drawBoard() {
    for (r = 0; r < row; r++) {
        for (c = 0; c < col; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}

drawBoard();

//ANIMATION

function render() {

    drawBoard();

    if(y == -1 || y == 19){
        
        rnd = randomPiece()
        

        //FOR THE T PIECE
        if (y == 19 && rnd == 1) {
            y = -1;
          
            x = Math.floor(Math.random() * 8) + 1;
            console.log(x);
        }
    }
    drawPiece(x, y, "blue" , rnd);
    


    if (frameCounter == 10) {

        dropPiece(y);
        frameCounter = 0;
    }

    frameCounter++
}
render();

function drawPiece(x, y, color, rnd) {

       

    if (rnd == T) {


        ctx.fillStyle = color
        ctx.strokeStyle = "white";
        ctx.strokeRect(x * sq, y * sq, sq, sq);
        ctx.fillRect(x * sq, y * sq, sq, sq);
        ctx.strokeRect((x - 1) * sq, (y - 1) * sq, sq, sq);
        ctx.fillRect((x - 1) * sq, (y - 1) * sq, sq, sq);
        ctx.strokeRect(x * sq, (y - 1) * sq, sq, sq);
        ctx.fillRect(x * sq, (y - 1) * sq, sq, sq);
        ctx.strokeRect((x + 1) * sq, (y - 1) * sq, sq, sq);
        ctx.fillRect((x + 1) * sq, (y - 1) * sq, sq, sq);
    }
}

//MOVE PIECE TO THE RIGHT AND LEFT


function ArrowPressed(e) {
    if (e.key == 'ArrowRight' && y < 19 && x < 8) {
        x++;
    }
    if (e.key == 'ArrowLeft' && y < 19 && x > 1) {
        x--;
    }
}

function ArrowReleased(e) {
    if (e.key == 'ArrowRight') {

    }
    if (e.key == 'ArrowLeft') {

    }
}


//FUNÇÃO PARA A PEÇA CAIR

function dropPiece() {
    if (y < 19) {
        y++
    }

}

window.onload = function () {
    timer = window.setInterval(render, 100)
}

//FUNÇÃO PARA A CAIR UMA PEÇA RANDOM

function randomPiece() {

    return Math.floor(Math.random() * 0) + 1;

}
