const canvas1 = document.querySelector("#c1");
const ctx = canvas1.getContext("2d");
const scoreElement = document.getElementById("score");

const canvas2 = document.querySelector("#c2");
const ctx2 = canvas2.getContext("2d");

context.scale(20, 20);

document.getElementById("start").addEventListener("click", function resetGame() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
})

let b = new Array();
function creatPiece() {
    b.push(new piece(x, y, vel, color, r))
}

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
