const canvas1 = document.querySelector("#c1");
const ctx1 = canvas1.getContext("2d");
const scoreElement = document.getElementById("score");

const canvas2 = document.querySelector("#c2");
const ctx2 = canvas2.getContext("2d");

const W = canvas1.width;
const H = canvas1.height;


document.getElementById("start").addEventListener("click", function resetGame() {
    ctx1.clearRect(0, 0, W, H)
})

const row = 22;
const col = column = 12;
const sq = squareSize = 50;
const vacant = "black"; // color of an empty square
let x = 2;
let y = 1;

let x1, x2, x3, x4 = 0
let y1, y2, y3, y4 = 0

let frameCounter = 0;
const T = 1; // vai ser o tipo
let rotCounter = 1;
let rnd;
let stop = false
let type = 0 /* Math.floor(Math.random() * 6) */

window.addEventListener('keydown', ArrowPressed);
window.addEventListener('keyup', ArrowReleased);

class Piece {   	//construtor
    constructor() {
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.x4 = x4;
        this.y1 = y1;
        this.y2 = y2;
        this.y3 = y3;
        this.y4 = y4;
        this.type = type;
    }

    draw() {
        if (this.type == 0) { // T
            ctx1.fillStyle = "pink";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(x1, y1, sq, sq);
            ctx1.fillRect(x1, y1, sq, sq);
            ctx1.strokeRect(x2, y2, sq, sq);
            ctx1.fillRect(x2, y2, sq, sq);
            ctx1.strokeRect(x3, y3, sq, sq);
            ctx1.fillRect(x3, y3, sq, sq);
            ctx1.strokeRect(x4, y4, sq, sq);
            ctx1.fillRect(x4, y4, sq, sq);
        }
        else if (this.type == 1) { //I
            ctx1.fillStyle = "cyan";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(x1, y1, sq, sq);
            ctx1.fillRect(x1, y1, sq, sq);
            ctx1.strokeRect(x2, y2, sq, sq);
            ctx1.fillRect(x2, y2, sq, sq);
            ctx1.strokeRect(x3, y3, sq, sq);
            ctx1.fillRect(x3, y3, sq, sq);
            ctx1.strokeRect(x4, y4, sq, sq);
            ctx1.fillRect(x4, y4, sq, sq);
        }
        else if (this.type == 2) { // 0
            ctx1.fillStyle = "blue";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(x1, y1, sq, sq);
            ctx1.fillRect(x1, y1, sq, sq);
            ctx1.strokeRect(x2, y2, sq, sq);
            ctx1.fillRect(x2, y2, sq, sq);
            ctx1.strokeRect(x3, y3, sq, sq);
            ctx1.fillRect(x3, y3, sq, sq);
            ctx1.strokeRect(x4, y4, sq, sq);
            ctx1.fillRect(x4, y4, sq, sq);
        }
        else if (this.type == 3) { // L
            ctx1.fillStyle = "yellow";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(x1, y1, sq, sq);
            ctx1.fillRect(x1, y1, sq, sq);
            ctx1.strokeRect(x2, y2, sq, sq);
            ctx1.fillRect(x2 , y2, sq, sq);
            ctx1.strokeRect(x3, y3, sq, sq);
            ctx1.fillRect(x3, y3, sq, sq);
            ctx1.strokeRect(x4, y4 , sq, sq);
            ctx1.fillRect(x4, y4, sq, sq);
        }
        else if (this.type == 4) { // Z
            ctx1.fillStyle = "red";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(x1, y1, sq, sq);
            ctx1.fillRect(x1, y1, sq, sq);
            ctx1.strokeRect(x2, y2, sq, sq);
            ctx1.fillRect(x2, y2, sq, sq);
            ctx1.strokeRect(x3, y3, sq, sq);
            ctx1.fillRect(x3, y3, sq, sq);
            ctx1.strokeRect(x4, y4, sq, sq);
            ctx1.fillRect(x4, y4, sq, sq);
        }
        else if (this.type == 5) { // S
            ctx1.fillStyle = "green";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(x1, y1, sq, sq);
            ctx1.fillRect(x1, y1, sq, sq);
            ctx1.strokeRect(x2, y2, sq, sq);
            ctx1.fillRect(x2, y2, sq, sq);
            ctx1.strokeRect(x3 , y3, sq, sq);
            ctx1.fillRect(x3 , y3, sq, sq);
            ctx1.strokeRect(x4 , y4, sq, sq);
            ctx1.fillRect(x4, y4, sq, sq);
        }
        else if (this.type == 6) { // J
            ctx1.fillStyle = "orange";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(x1, y1, sq, sq);
            ctx1.fillRect(x1, y1, sq, sq);
            ctx1.strokeRect(x2, y2, sq, sq);
            ctx1.fillRect(x2, y2, sq, sq);
            ctx1.strokeRect(x3, y3, sq, sq);
            ctx1.fillRect(x3, y3, sq, sq);
            ctx1.strokeRect(x4, y4, sq, sq);
            ctx1.fillRect(x4, y4, sq, sq);
        }
    }

    update() {
        if (this.y1 == H - sq || this.y2 == H - sq || this.y3 == H - sq || this.y4 == H - sq) {
            console.log("PAREI");
            this.stop = true;
            createPiece()
        } else {
            console.log("COMECEI");
            y1 += sq;
            y2 += sq;
            y3 += sq;
            y4 += sq;
        }
    }

    createPiece() {
        if (this.type == 0) /* T */ {
            x1 = 4 * sq;
            x2 = 5 * sq;
            x3 = 6 * sq;
            x4 = 5 * sq;
            y1 = 0;
            y2 = 0;
            y3 = 0;
            y4 = sq;

            console.log(this.x1, "/", this.x2, "/", this.x3, "/" ,this.x4)
        }
        else if (this.type == 1) /* I */ {
            x1 = 3 * sq;
            x2 = 4 * sq;
            x3 = 5 * sq;
            x4 = 6 * sq;
            y1 = 0;
            y2 = 0;
            y3 = 0;
            y4 = 0;
        }
        else if (this.type == 2) /* O */ {
            x1 = 4 * sq;
            x2 = 5 * sq;
            x3 = 4 * sq;
            x4 = 5 * sq;
            y1 = 0;
            y2 = 0;
            y3 = sq;
            y4 = sq;
        }
        else if (this.type == 3) /* L */ {
            x1 = 4 * sq;
            x2 = 4 * sq;
            x3 = 4 * sq;
            x4 = 5 * sq;
            y1 = 0;
            y2 = sq;
            y3 = 2 * sq;
            y4 = 2 * sq;
        }
        else if (this.type == 4) /* Z */ {
            x1 = 4 * sq;
            x2 = 5 * sq;
            x3 = 5 * sq;
            x4 = 6 * sq;
            y1 = 0;
            y2 = 0;
            y3 = sq;
            y4 = sq;
        }
        else if (this.type == 5) /* S */ {
            x1 = 5 * sq;
            x2 = 4 * sq;
            x3 = 4 * sq;
            x4 = 3 * sq;
            y1 = 0;
            y2 = 0;
            y3 = sq;
            y4 = sq;
        }
        else if (this.type == 6) /* J */ {
            x1 = 4 * sq;
            x2 = 4 * sq;
            x3 = 4 * sq;
            x4 = 3 * sq;
            y1 = 0;
            y2 = sq;
            y3 = 2 * sq;
            y4 = 2 * sq;
        }
    }
}

let pieces = new Array();
pieces.push(new Piece());

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
    ctx1.clearRect(0, 0, W, H)
    drawBoard();

    pieces.forEach(function (piece) {
        piece.draw();
        piece.update();
    });

    if (!stop) {
        console.log("hello")
        console.log(type)
        pieces[pieces.length - 1].createPiece()
    } else {
        console.log(type)
    }

    /* if (y == 1 || y == 20) {
        rnd = randomPiece()
        //FOR THE T PIECE
        if (y == 20 && rnd == 1) {

        }
    } */
    /* drawPiece(x, y, "blue", rnd); */

        if (frameCounter == 10) {
            /* dropPiece(y); */
            frameCounter = 0;
        }
        frameCounter++
}

//desnhea a peca T: rnd -> rotação
/* function drawPiece(x, y, color, rnd) {
    if (rnd == T) {
        ctx1.fillStyle = color
        ctx1.strokeStyle = "white";
        ctx1.strokeRect(x * sq, y * sq, sq, sq);
        ctx1.fillRect(x * sq, y * sq, sq, sq);

        ctx1.strokeRect((x - 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x - 1) * sq, (y - 1) * sq, sq, sq);

        ctx1.strokeRect(x * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect(x * sq, (y - 1) * sq, sq, sq);

        ctx1.strokeRect((x + 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x + 1) * sq, (y - 1) * sq, sq, sq);
    }

    if (rnd == 2) {
        ctx1.fillStyle = color
        ctx1.strokeStyle = "white";
        ctx1.strokeRect(x * sq, y * sq, sq, sq);
        ctx1.fillRect(x * sq, y * sq, sq, sq);
        ctx1.strokeRect((x - 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x - 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.strokeRect(x * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect(x * sq, (y - 1) * sq, sq, sq);
        ctx1.strokeRect((x) * sq, (y - 2) * sq, sq, sq);
        ctx1.fillRect((x) * sq, (y - 2) * sq, sq, sq);
    }

    if (rnd == 3) {
        ctx1.fillStyle = color
        ctx1.strokeStyle = "white";
        ctx1.strokeRect(x * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x) * sq, (y - 1) * sq, sq, sq);
        ctx1.strokeRect((x - 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x - 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.strokeRect((x + 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x + 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.strokeRect((x) * sq, (y - 2) * sq, sq, sq);
        ctx1.fillRect((x) * sq, (y - 2) * sq, sq, sq);
    }

    if (rnd == 4) {
        ctx1.fillStyle = color
        ctx1.strokeStyle = "white";
        ctx1.strokeRect(x * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x) * sq, (y - 1) * sq, sq, sq);
        ctx1.strokeRect((x) * sq, (y) * sq, sq, sq);
        ctx1.fillRect((x) * sq, (y) * sq, sq, sq);
        ctx1.strokeRect((x + 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.fillRect((x + 1) * sq, (y - 1) * sq, sq, sq);
        ctx1.strokeRect((x) * sq, (y - 2) * sq, sq, sq);
        ctx1.fillRect((x) * sq, (y - 2) * sq, sq, sq);
    }
} */

//MOVE PIECE TO THE RIGHT AND LEFT
function ArrowPressed(e) {
    if (e.key == 'ArrowRight' && (this.x1 >= 0 || this.x2 >= 0 || this.x3 >= 0 || this.x4 >= 0)) {
        pieces[pieces.length - 1].x1 += sq;
        pieces[pieces.length - 1].x2 += sq;
        pieces[pieces.length - 1].x3 += sq;
        pieces[pieces.length - 1].x4 += sq;
        console.log("gfds")
    }

    if (e.key == 'ArrowLeft' && (this.x1 <= H - sq || this.x2 <= H - sq || this.x3 <= H - sq || this.x4 >= H - sq)) {
        pieces[pieces.length - 1].x1 -= sq;
        pieces[pieces.length - 1].x2 -= sq;
        pieces[pieces.length - 1].x3 -= sq;
        pieces[pieces.length - 1].x4 -= sq;
        console.log("mexi")
    }

    /*     if (e.key == 'ArrowUp') {
    
            if (rotCounter == 4) {
    
                rotCounter = 0;
            }
            rotCounter++;
            rnd = rotCounter;
            console.log("rnd" + " " + rnd)
            console.log("rotCounter" + " " + rotCounter)
        } */

    if (e.key == 'ArrowDown') {
        y1 += sq;
        y2 += sq;
        y3 += sq;
        y4 += sq;
        console.log("desci")
    }
}

function ArrowReleased(e) {
    if (e.key == 'ArrowRight') {

    }
    if (e.key == 'ArrowLeft') {

    }
    if (e.key == 'ArrowUp') {

    }
    if (e.key == 'ArrowDown') {

    }
}

//FUNÇÃO PARA A PEÇA CAIR
/* function dropPiece(e) {
    if (y < 20) {
        y++
    }
} */

window.onload = function () {
    timer = window.setInterval(render, 100)
}

//FUNÇÃO PARA A CAIR UMA PEÇA RANDOM
/* function randomPiece() {
    return Math.floor(Math.random() * 0) + 1;
} */