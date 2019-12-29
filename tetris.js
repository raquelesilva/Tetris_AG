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

let frameCounter = 0;
const T = 1; // vai ser o tipo
let rotCounter = 1;
let rnd;
let type = Math.floor(Math.random() * 6)
let pieceCounter = 0

class Piece {   	//construtor
    constructor(type) {
        this.type = type;
        this.stop = false;
    }

    draw() {
        if (this.type == 0) { // T
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
        else if (this.type == 1) { //I
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
        else if (this.type == 2) { // 0
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
        else if (this.type == 3) { // L
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
        else if (this.type == 4) { // Z
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
        else if (this.type == 5) { // S
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
        else if (this.type == 6) { // J
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


        var pos1 = 0;
        var pos2 = 0;
        var pos3 = 0;
        var pos4 = 0;
        var pos5 = 0;
        var pos6 = 0;
        var pos7 = 0;
        var pos8 = 0;
        var count = 0;

        //NEW CODE
        //VAI AO ARRAY PIECES GUARDA AS POSIÇÕES DA ULTIMA PEÇA QUE FOI CRIADA NAS VARIÁVEIS
        //-----------------------------------------------------------------------------------------//
        for (let index = 0; index < pieces.length; index++) {



            if (index >= 1) {

                pos1 = pieces[index - 1].y1
                pos2 = pieces[index - 1].y2
                pos3 = pieces[index - 1].y3
                pos4 = pieces[index - 1].y4
                pos5 = pieces[index - 1].x1
                pos6 = pieces[index - 1].x2
                pos7 = pieces[index - 1].x3
                pos8 = pieces[index - 1].x4

            }

        }
        //-----------------------------------------------------------------------------------------//

        if (this.y1 === H - sq || this.y2 === H - sq || this.y3 === H - sq || this.y4 === H - sq) {
            this.stop = true;

        }
        //NEW CODE
        //FAZ A VERIFICAÇÃO EM Y DAS COLISÕES JÁ RESULTA EM ALGUMAS PEÇAS MAS DEPOIS ELAS NÃO PASSAM PORQUE FALTA A COLISÃO
        //COM O X PARA VER SE HÁ UMA PEÇA EM Y E EM X , POSSIVELMENTE VAI TER DE SER NECESSÁRIO FAZER COLISÕES PARA CADA PEÇA
        //-----------------------------------------------------------------------------------------//
        else if ((pos1 == (this.y1 + sq))
            || pos2 == ((this.y2 + sq))
            || pos3 == ((this.y3 + sq))
            || pos4 == ((this.y4 + sq))) {


            if (pieceCounter > 1) {

                for (let index = 0; index < pieces.length; index++) {

                    if ((pos5 == this.x1 + sq) || (pos6) == this.x2 + sq || (pos7) == this.x3 + sq || (pos8) == this.x4 + sq)  {

                        this.stop = true;
                    }
                }


            }


        }
        //-------------------------------------------------------------------------------------------//        
        else if (this.stop == false) {
            this.y1 += sq;
            this.y2 += sq;
            this.y3 += sq;
            this.y4 += sq;
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

}

let pieces = new Array();
pieces.push(new Piece(type));
pieces[0].createPiece()

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

    if (pieces[pieces.length - 1].stop) {
        console.log(pieces)
        type = Math.floor(Math.random() * 6)
        pieces.push(new Piece(type));
        pieces[pieces.length - 1].createPiece()
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

window.addEventListener('keydown', ArrowPressed);
window.addEventListener('keyup', ArrowReleased);

//MOVE PIECE TO THE RIGHT AND LEFT
function ArrowPressed(e) {
    if (e.key == 'ArrowRight' && (pieces[pieces.length - 1].x1 < W - sq || pieces[pieces.length - 1].x2 < W - sq || pieces[pieces.length - 1].x3 < W - sq || pieces[pieces.length - 1].x4 < W - sq)) {
        pieces[pieces.length - 1].x1 += sq;
        pieces[pieces.length - 1].x2 += sq;
        pieces[pieces.length - 1].x3 += sq;
        pieces[pieces.length - 1].x4 += sq;
        console.log("direita")
    }

    if (e.key == 'ArrowLeft' && (pieces[pieces.length - 1].x1 > 0 || pieces[pieces.length - 1].x2 > 0 || pieces[pieces.length - 1].x3 > 0 || pieces[pieces.length - 1].x4 > 0)) {
        pieces[pieces.length - 1].x1 -= sq;
        pieces[pieces.length - 1].x2 -= sq;
        pieces[pieces.length - 1].x3 -= sq;
        pieces[pieces.length - 1].x4 -= sq;
        console.log("esquerda")
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
        pieces[pieces.length - 1].y1 += sq;
        pieces[pieces.length - 1].y2 += sq;
        pieces[pieces.length - 1].y3 += sq;
        pieces[pieces.length - 1].y4 += sq;
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
    timer = window.setInterval(render, 300)
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
