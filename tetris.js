const canvas1 = document.querySelector("#c1");
const ctx1 = canvas1.getContext("2d");
const scoreElement = document.getElementById("score");

const canvas2 = document.querySelector("#c2");
const ctx2 = canvas2.getContext("2d");

const W = canvas1.width;
const H = canvas1.height;

const row = 22;
const col = column = 12;
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

let borderX = []
let borderY = []

class Piece {   	//construtor
    constructor(type) {
        this.type = type;
        this.rotation = 0;
        this.stop = false
        this.leftMargin = false
        this.rightMargin = false
    }

    draw() {
        console.log("desenhei");
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
        console.log("entrei no update")
        borderX.push(this.x1)
        borderY.push(this.y1)
        borderX.push(this.x2)
        borderY.push(this.y2)
        borderX.push(this.x3)
        borderY.push(this.y3)
        borderX.push(this.x4)
        borderY.push(this.y4)

        //NEW CODE
        //VAI AO ARRAY PIECES GUARDA AS POSIÇÕES DA ULTIMA PEÇA QUE FOI CRIADA NAS VARIÁVEIS
        //-----------------------------------------------------------------------------------------//
        if (pieces.length >= 1) {
            for (let j = 0; j < 4; j++) {
                for (let i = 0; i < pieces.length - 1; i++) {
                    if ((((borderY[j] + sq) == pieces[i].y1 && borderX[j] == pieces[i].x1) || ((borderY[j] + sq) == pieces[i].y2 && borderX[j] == pieces[i].x2) ||
                        ((borderY[j] + sq) == pieces[i].y3 && borderX[j] == pieces[i].x3) || ((borderY[j] + sq) == pieces[i].y4 && borderX[j] == pieces[i].x4)) &&
                        this.stop != true) {
                        this.stop = true
                    }
                    if ((((borderY[j]) == pieces[i].y1 - sq && borderX[j] == pieces[i].x1 + sq) || ((borderY[j]) == pieces[i].y2 - sq && borderX[j] == pieces[i].x2 + sq) ||
                        ((borderY[j]) == pieces[i].y3 - sq && borderX[j] == pieces[i].x3 + sq) || (borderY[j] == pieces[i].y4 - sq && borderX[j] == pieces[i].x4 + sq)) &&
                        this.stop != true) {
                        this.leftMargin = false
                    }
                    if ((((borderY[j]) == pieces[i].y1 - sq && borderX[j] == pieces[i].x1 - sq) || ((borderY[j]) == pieces[i].y2 - sq && borderX[j] == pieces[i].x2 - sq) ||
                        ((borderY[j]) == pieces[i].y3 - sq && borderX[j] == pieces[i].x3 - sq) || (borderY[j] == pieces[i].y4 - sq && borderX[j] == pieces[i].x4 - sq)) &&
                        this.stop != true) {
                        this.rightMargin = true
                    }
                    this.rightMargin = false;
                    this.leftMargin = false;
                }
            }
            borderX = [];
            borderY = [];
        }
        //-----------------------------------------------------------------------------------------//

        if (this.y1 === H - sq || this.y2 === H - sq || this.y3 === H - sq || this.y4 === H - sq) {
            this.stop = true;
            borderX = [];
            borderY = [];
        }

        //NEW CODE
        //FAZ A VERIFICAÇÃO EM Y DAS COLISÕES JÁ RESULTA EM ALGUMAS PEÇAS MAS DEPOIS ELAS NÃO PASSAM PORQUE FALTA A COLISÃO
        //COM O X PARA VER SE HÁ UMA PEÇA EM Y E EM X , POSSIVELMENTE VAI TER DE SER NECESSÁRIO FAZER COLISÕES PARA CADA PEÇA
        //-----------------------------------------------------------------------------------------//
        /*  else if ((pos1 == (this.y1 + sq))
             || pos2 == ((this.y2 + sq))
             || pos3 == ((this.y3 + sq))
             || pos4 == ((this.y4 + sq))) {
 
         } */
        //-------------------------------------------------------------------------------------------//        
        else if (this.stop == false) {
            borderX = [];
            borderY = [];

            this.y1 += sq;
            this.y2 += sq;
            this.y3 += sq;
            this.y4 += sq;
        }

        // Reinicar o jogo quando chega ao limite de cima
        if (this.y1 === 0 || this.y2 === 0 || this.y3 === 0 || this.y4 === 0) {
            this.stop == true;
            ctx1.clearRect(0, 0, W, H);
        }
    }

    createPiece() {
        console.log(type)
        console.log("entrei no createPiece")

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
        /* pieceCounter++; */
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
        if (this.shape == 1) {
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
        if (this.shape == 3) {
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
        if (this.shape == 4) {
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
        if (this.shape == 5) {
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
        if (this.shape == 6) {
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
    pieces[pieces.length - 1].createPiece()
}

// DESENHAR UM QUADRADO
/* function drawSquare(x, y, color) {
    ctx1.fillStyle = color;
    ctx1.fillRect(x * sq, y * sq, sq, sq);

    ctx1.strokeStyle = "white";
    ctx1.strokeRect(x * sq, y * sq, sq, sq);
} */

// CRIAR O CAMPO
/* let board = [];
for (r = 0; r < row; r++) {
    board[r] = [];
    for (c = 0; c < col; c++) {
        board[r][c] = vacant;
    }
} */

// DESENHAR O CAMPO
/* function drawBoard() {
    for (r = 0; r < row; r++) {
        for (c = 0; c < col; c++) {
            drawSquare(c, r, board[r][c]);
        }
    }
}
 */
/* drawBoard(); */

let seconds = 10

begin();

//ANIMATION
function render() {
    /*    drawBoard(); */
    frameCounter++

    if (frameCounter % seconds == 0) {
        ctx1.clearRect(0, 0, W, H)

        pieces.forEach(function (piece) {
            console.log("entrei");
            piece.draw();
            piece.update();
            if (pieces[pieces.length - 1].stop) {
                /* begin() */
            }
        });

    }

    /* if (y == 1 || y == 20) {
        rnd = randomPiece()
        //FOR THE T PIECE
        if (y == 20 && rnd == 1) {

        }
    } */
    /* drawPiece(x, y, "blue", rnd); */

    /* if (frameCounter == 10) {
        dropPiece(y);
        frameCounter = 0;
    }
    frameCounter++ */
}

document.getElementById("start").addEventListener("click", function resetGame() {
    ctx1.clearRect(0, 0, W, H);
    ctx2.clearRect(0, 0, W, H);
    pieces.push(new Piece(type));
    pieces[0].createPiece();
})

window.addEventListener('keydown', ArrowPressed);
window.addEventListener('keyup', ArrowReleased);

//MOVE PIECE TO THE RIGHT AND LEFT
function ArrowPressed(e) {
    if (e.key == 'ArrowRight' && (pieces[pieces.length - 1].x1 < W - sq || pieces[pieces.length - 1].x2 < W - sq || pieces[pieces.length - 1].x3 < W - sq || pieces[pieces.length - 1].x4 < W - sq && !pieces[pieces.length - 1].rightMargin)) {
        pieces[pieces.length - 1].x1 += sq;
        pieces[pieces.length - 1].x2 += sq;
        pieces[pieces.length - 1].x3 += sq;
        pieces[pieces.length - 1].x4 += sq;
        console.log("direita")
    }

    if (e.key == 'ArrowLeft' && (pieces[pieces.length - 1].x1 > 0 || pieces[pieces.length - 1].x2 > 0 || pieces[pieces.length - 1].x3 > 0 || pieces[pieces.length - 1].x4 > 0 && !pieces[pieces.length - 1].leftMargin)) {
        pieces[pieces.length - 1].x1 -= sq;
        pieces[pieces.length - 1].x2 -= sq;
        pieces[pieces.length - 1].x3 -= sq;
        pieces[pieces.length - 1].x4 -= sq;
        console.log("esquerda")
    }

    if (e.key == 'ArrowUp') {

        if (rotCounter == 4) {

            rotCounter = 0;
        }
        rotCounter++;
        rnd = rotCounter;
        console.log("rnd" + " " + rnd)
        console.log("rotCounter" + " " + rotCounter)
    }

    if (e.key == 'ArrowDown') {
        seconds = 2
        console.log("desci")
    }


    if (e.key == 'ArrowUp') {
        pieces[pieces.length - 1].rotate();
        console.log("rodei")
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

//FUNÇÃO PARA A PEÇA CAIR
/* function dropPiece(e) {
    if (y < 20) {
        y++
    }
} */

window.onload = function () {
    timer = window.setInterval(render, 25)
}

//FUNÇÃO PARA A CAIR UMA PEÇA RANDOM
/* function randomPiece() {
    return Math.floor(Math.random() * 0) + 1;
} */

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
