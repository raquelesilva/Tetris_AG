const canvas1 = document.querySelector("#c1");
const ctx1 = canvas1.getContext("2d");
const scoreElement = document.getElementById("score");

const canvas2 = document.querySelector("#c2");
const ctx2 = canvas2.getContext("2d");

const W = canvas1.width;
const H = canvas1.height;

const row = 22;
const col = column = 20;
const sq = squareSize = 50;
const vacant = "black"; // color of an empty square

let x1
let y1
let x2
let y2
let x3
let y3
let x4
let y4

let frameCounter = 0;
const T = 1; // vai ser o tipo
let rnd;
let type;
let pieceCounter = 0;

let stop = false;
let gameOver = false;
let text = "GAME OVER!!";

let borderX = [];
let borderY = [];

let finalPosition = [];

class Piece {   	//construtor
    constructor(type) {
        this.type = type;
        this.rotation = 0;
        this.stop = false
        this.leftMargin = false
        this.rightMargin = false
    }

    draw() {
        if (this.type === 0) { // T
            ctx1.fillStyle = "pink";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(this.x1, this.y1, sq, sq);
            ctx1.fillRect(this.x1, this.y1, sq, sq);
            ctx1.strokeRect(this.x2, this.y2, sq, sq);
            ctx1.fillRect(this.x2, this.y2, sq, sq);
            ctx1.strokeRect(this.x3, this.y3, sq, sq);
            ctx1.fillRect(this.x3, this.y3, sq, sq);
            ctx1.strokeRect(this.x4, this.y4, sq, sq);
            ctx1.fillRect(this.x4, this.y4, sq, sq);
        }
        else if (this.type === 1) { //I
            ctx1.fillStyle = "cyan";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(this.x1, this.y1, sq, sq);
            ctx1.fillRect(this.x1, this.y1, sq, sq);
            ctx1.strokeRect(this.x2, this.y2, sq, sq);
            ctx1.fillRect(this.x2, this.y2, sq, sq);
            ctx1.strokeRect(this.x3, this.y3, sq, sq);
            ctx1.fillRect(this.x3, this.y3, sq, sq);
            ctx1.strokeRect(this.x4, this.y4, sq, sq);
            ctx1.fillRect(this.x4, this.y4, sq, sq);
        }
        else if (this.type === 2) { // 0
            ctx1.fillStyle = "blue";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(this.x1, this.y1, sq, sq);
            ctx1.fillRect(this.x1, this.y1, sq, sq);
            ctx1.strokeRect(this.x2, this.y2, sq, sq);
            ctx1.fillRect(this.x2, this.y2, sq, sq);
            ctx1.strokeRect(this.x3, this.y3, sq, sq);
            ctx1.fillRect(this.x3, this.y3, sq, sq);
            ctx1.strokeRect(this.x4, this.y4, sq, sq);
            ctx1.fillRect(this.x4, this.y4, sq, sq);
        }
        else if (this.type === 3) { // L
            ctx1.fillStyle = "yellow";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(this.x1, this.y1, sq, sq);
            ctx1.fillRect(this.x1, this.y1, sq, sq);
            ctx1.strokeRect(this.x2, this.y2, sq, sq);
            ctx1.fillRect(this.x2, this.y2, sq, sq);
            ctx1.strokeRect(this.x3, this.y3, sq, sq);
            ctx1.fillRect(this.x3, this.y3, sq, sq);
            ctx1.strokeRect(this.x4, this.y4, sq, sq);
            ctx1.fillRect(this.x4, this.y4, sq, sq);
        }
        else if (this.type === 4) { // Z
            ctx1.fillStyle = "red";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(this.x1, this.y1, sq, sq);
            ctx1.fillRect(this.x1, this.y1, sq, sq);
            ctx1.strokeRect(this.x2, this.y2, sq, sq);
            ctx1.fillRect(this.x2, this.y2, sq, sq);
            ctx1.strokeRect(this.x3, this.y3, sq, sq);
            ctx1.fillRect(this.x3, this.y3, sq, sq);
            ctx1.strokeRect(this.x4, this.y4, sq, sq);
            ctx1.fillRect(this.x4, this.y4, sq, sq);
        }
        else if (this.type === 5) { // S
            ctx1.fillStyle = "green";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(this.x1, this.y1, sq, sq);
            ctx1.fillRect(this.x1, this.y1, sq, sq);
            ctx1.strokeRect(this.x2, this.y2, sq, sq);
            ctx1.fillRect(this.x2, this.y2, sq, sq);
            ctx1.strokeRect(this.x3, this.y3, sq, sq);
            ctx1.fillRect(this.x3, this.y3, sq, sq);
            ctx1.strokeRect(this.x4, this.y4, sq, sq);
            ctx1.fillRect(this.x4, this.y4, sq, sq);
        }
        else if (this.type === 6) { // J
            ctx1.fillStyle = "orange";
            ctx1.strokeStyle = "black";
            ctx1.strokeRect(this.x1, this.y1, sq, sq);
            ctx1.fillRect(this.x1, this.y1, sq, sq);
            ctx1.strokeRect(this.x2, this.y2, sq, sq);
            ctx1.fillRect(this.x2, this.y2, sq, sq);
            ctx1.strokeRect(this.x3, this.y3, sq, sq);
            ctx1.fillRect(this.x3, this.y3, sq, sq);
            ctx1.strokeRect(this.x4, this.y4, sq, sq);
            ctx1.fillRect(this.x4, this.y4, sq, sq);
        }
    }

    update() {
        borderX.push(this.x1)
        borderY.push(this.y1)
        borderX.push(this.x2)
        borderY.push(this.y2)
        borderX.push(this.x3)
        borderY.push(this.y3)
        borderX.push(this.x4)
        borderY.push(this.y4)

        if (pieces.length >= 1) {
            for (let j = 0; j < 4; j++) {
                for (let i = 0; i < pieces.length - 1; i++) {
                    if ((((borderY[j] + sq) == pieces[i].y1 && borderX[j] == pieces[i].x1) || ((borderY[j] + sq) == pieces[i].y2 && borderX[j] == pieces[i].x2) ||
                        ((borderY[j] + sq) == pieces[i].y3 && borderX[j] == pieces[i].x3) || ((borderY[j] + sq) == pieces[i].y4 && borderX[j] == pieces[i].x4)) &&
                        this.stop != true) {
                        this.stop = true
                        // Reinicar o jogo quando chega ao limite de cima
                        if (this.y1 === 0 || this.y2 === 0 || this.y3 === 0 || this.y4 === 0)  {
                            this.stop == true;
                            ctx1.clearRect(0, 0, W, H);
                            ctx1.font = "80px Tetris2";

                            if (gameOver = true) {
                                ctx1.fillText(text, 10, H / 2);
                            } else if (document.getElementById("start").clicked === true) {
                                gameOver = false;
                                begin();
                            }
                        }
                        finalPosition.push(pieces)
                    }
                }
            }
            borderX = [];
            borderY = [];
        }

        if (this.y1 === H - sq || this.y2 === H - sq || this.y3 === H - sq || this.y4 === H - sq) {
            this.stop = true;
            borderX = [];
            borderY = [];

            finalPosition.push(pieces)
            console.log(equal)
        }

        else if (this.stop == false) {
            borderX = [];
            borderY = [];

            this.y1 += sq;
            this.y2 += sq;
            this.y3 += sq;
            this.y4 += sq;
        } else if (this.stop === true) {
            finalPosition.push(pieces)
        }
    }

    createPiece() {

        if (this.type == 0) /* T */ {
            this.x1 = 4 * sq;
            this.x2 = 5 * sq;
            this.x3 = 6 * sq;
            this.x4 = 5 * sq;
            this.y1 = 0;
            this.y2 = 0;
            this.y3 = 0;
            this.y4 = sq;
        }
        else if (this.type == 1) /* I */ {
            this.x1 = 3 * sq;
            this.x2 = 4 * sq;
            this.x3 = 5 * sq;
            this.x4 = 6 * sq;
            this.y1 = 0;
            this.y2 = 0;
            this.y3 = 0;
            this.y4 = 0;
        }
        else if (this.type == 2) /* O */ {
            this.x1 = 4 * sq;
            this.x2 = 5 * sq;
            this.x3 = 4 * sq;
            this.x4 = 5 * sq;
            this.y1 = 0;
            this.y2 = 0;
            this.y3 = sq;
            this.y4 = sq;
        }
        else if (this.type == 3) /* L */ {
            this.x1 = 4 * sq;
            this.x2 = 4 * sq;
            this.x3 = 4 * sq;
            this.x4 = 5 * sq;
            this.y1 = 0;
            this.y2 = sq;
            this.y3 = 2 * sq;
            this.y4 = 2 * sq;
        }
        else if (this.type == 4) /* Z */ {
            this.x1 = 4 * sq;
            this.x2 = 5 * sq;
            this.x3 = 5 * sq;
            this.x4 = 6 * sq;
            this.y1 = 0;
            this.y2 = 0;
            this.y3 = sq;
            this.y4 = sq;
        }
        else if (this.type == 5) /* S */ {
            this.x1 = 5 * sq;
            this.x2 = 4 * sq;
            this.x3 = 4 * sq;
            this.x4 = 3 * sq;
            this.y1 = 0;
            this.y2 = 0;
            this.y3 = sq;
            this.y4 = sq;
        }
        else if (this.type == 6) /* J */ {
            this.x1 = 4 * sq;
            this.x2 = 4 * sq;
            this.x3 = 4 * sq;
            this.x4 = 3 * sq;
            this.y1 = 0;
            this.y2 = sq;
            this.y3 = 2 * sq;
            this.y4 = 2 * sq;
        }
        pieceCounter++;
    }

    rotate() {
        if (this.type == 0) {
            if (this.rotation == 0) {
                this.x1 = this.x2
                this.y1 = this.y2 - sq
                this.x3 = this.x2
                this.y3 = this.y2 + sq
                this.x4 = this.x2 - sq
                this.y4 = this.y2
                this.rotation = 1
            } else if (this.rotation == 1) {
                this.x1 = this.x2 - sq
                this.y1 = this.y2
                this.x3 = this.x2 + sq
                this.y3 = this.y2
                this.x4 = this.x2
                this.y4 = this.y2 - sq
                this.rotation = 2
            } else if (this.rotation == 2) {
                this.x1 = this.x2
                this.y1 = this.y2 - sq
                this.x3 = this.x2
                this.y3 = this.y2 + sq
                this.x4 = this.x2 + sq
                this.y4 = this.y2
                this.rotation = 3
            } else if (this.rotation == 3) {
                this.x1 = this.x2 - sq
                this.y1 = this.y2
                this.x3 = this.x2 + sq
                this.y3 = this.y2
                this.x4 = this.x2
                this.y4 = this.y2 + sq
                this.rotation = 0
            }
        }
        if (this.type == 1) {
            if (this.rotation == 0) {
                this.x1 = this.x2;
                this.y1 = this.y2 - sq;
                this.x3 = this.x2;
                this.y3 = this.y2 + sq;
                this.x4 = this.x2;
                this.y4 = this.y2 + 2 * sq;
                this.rotation = 1
            }
            else {
                this.x1 = this.x2 - sq;
                this.y1 = this.y2
                this.x3 = this.x2 + sq;
                this.y3 = this.y2;
                this.x4 = this.x2 + 2 * sq;
                this.y4 = this.y2;
                this.rotation = 0
            }
        }
        if (this.type == 3) {
            if (this.rotation == 0) {
                this.x1 = this.x2
                this.y1 = this.y2 - sq
                this.x3 = this.x2
                this.y3 = this.y2 + sq
                this.x4 = this.x3 - sq
                this.y4 = this.y1
                this.rotation = 1
            } else if (this.rotation == 1) {
                this.x1 = this.x2 - sq
                this.y1 = this.y2
                this.x3 = this.x2 + sq
                this.y3 = this.y2
                this.x4 = this.x3
                this.y4 = this.y1 - sq
                this.rotation = 2
            } else if (this.rotation == 2) {
                this.x1 = this.x2
                this.y1 = this.y2 - sq
                this.x3 = this.x2
                this.y3 = this.y2 + sq
                this.x4 = this.x3 + sq
                this.y4 = this.y3
                this.rotation = 0
            }
        }
        if (this.type == 4) {
            if (this.rotation == 0) {
                this.x1 = this.x2
                this.y1 = this.y2 - sq
                this.x3 = this.x2 - sq
                this.y3 = this.y2 + sq
                this.x4 = this.x2 - sq
                this.y4 = this.y3 - sq
                this.rotation = 1
            } else if (this.rotation == 1) {
                this.x1 = this.x2 + sq
                this.y1 = this.y2
                this.x3 = this.x2 + sq
                this.y3 = this.y2 + sq
                this.x4 = this.x3 + sq
                this.y4 = this.y3
                this.rotation = 0
            }
        }
        if (this.type == 5) {
            if (this.rotation == 0) {
                this.x1 = this.x2
                this.y1 = this.y2 + sq
                this.x3 = this.x2 + sq
                this.y3 = this.y2 + sq
                this.x4 = this.x2 + sq
                this.y4 = this.y3 + sq
                this.rotation = 1
            }
            else if (this.rotation == 1) {
                this.x1 = this.x2 + sq
                this.y1 = this.y2
                this.x3 = this.x2 + sq
                this.y3 = this.y2 - sq
                this.x4 = this.x3 + sq
                this.y4 = this.y3
                this.rotation = 0
            }
        }
        if (this.type == 6) {
            if (this.rotation == 0) {
                this.x1 = this.x2
                this.y1 = this.y2 - sq
                this.x3 = this.x2
                this.y3 = this.y2 + sq
                this.x4 = this.x3 - sq
                this.y4 = this.y3
                this.rotation = 1
            }
            else if (this.rotation == 1) {
                this.x1 = this.x2 - sq
                this.y1 = this.y2
                this.x3 = this.x2 + sq
                this.y3 = this.y2
                this.x4 = this.x1
                this.y4 = this.y2 - sq
                this.rotation = 2
            } else if (this.rotation == 2) {
                this.x1 = this.x2
                this.y1 = this.y2 - sq
                this.x3 = this.x2
                this.y3 = this.y2 + sq
                this.x4 = this.x3 + sq
                this.y4 = this.y1
                this.rotation = 0
            }
        }
    }
}

let pieces = new Array();
function begin() {
    type = Math.floor(Math.random() * 6)
    pieces.push(new Piece(type));
    pieces[pieces.length - 1].createPiece();
}

let seconds = 10

begin();

/* ANIMATION */
function render() {
    frameCounter++

    if (frameCounter % seconds == 0) {
        ctx1.clearRect(0, 0, W, H)

        pieces.forEach(function (piece) {
            piece.draw();
            piece.update();
            if (pieces[pieces.length - 1].stop) {
                begin()
            }
        });
    }
    erase();
}

window.addEventListener('keydown', ArrowPressed);
window.addEventListener('keyup', ArrowReleased);

/* MOVE PIECE TO THE RIGHT AND LEFT */
function ArrowPressed(e) {
    if (e.key == 'ArrowRight' && (pieces[pieces.length - 1].x1 < W - sq || pieces[pieces.length - 1].x2 < W - sq || pieces[pieces.length - 1].x3 < W - sq || pieces[pieces.length - 1].x4 < W - sq && !pieces[pieces.length - 1].rightMargin)) {
        pieces[pieces.length - 1].x1 += sq;
        pieces[pieces.length - 1].x2 += sq;
        pieces[pieces.length - 1].x3 += sq;
        pieces[pieces.length - 1].x4 += sq;
    }

    if (e.key == 'ArrowLeft' && (pieces[pieces.length - 1].x1 > 0 || pieces[pieces.length - 1].x2 > 0 || pieces[pieces.length - 1].x3 > 0 || pieces[pieces.length - 1].x4 > 0 && !pieces[pieces.length - 1].leftMargin)) {
        pieces[pieces.length - 1].x1 -= sq;
        pieces[pieces.length - 1].x2 -= sq;
        pieces[pieces.length - 1].x3 -= sq;
        pieces[pieces.length - 1].x4 -= sq;
    }

    if (e.key == 'ArrowDown') {
        seconds = 2
    }


    if (e.key == 'ArrowUp') {
        pieces[pieces.length - 1].rotate();
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
        seconds = 20
    }
}

let equal = 0;
let contLines;

function erase() {

    for (let i = 0; i < finalPosition.length; i++) {

        /*         if (pieces[i].y1 == 1050 || pieces[i].y2 == 1050 || pieces[i].y3 == 1050 || pieces[i].y4 == 1050)  {
                    contLines++;
                }
                if (contLines == 11) {
                    console.log("apagar");
                } */

        if (finalPosition[i].stop === true) {
            equal++;
            console.log("equal=" + equal)
        }else{
            console.log("MERDA")
        }
    }

}

window.onload = function () {
    timer = window.setInterval(render, 25)
}