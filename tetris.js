const canvas1 = document.querySelector("#c1");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.querySelector("#c2");
const ctx2 = canvas2.getContext("2d");

context.scale(20, 20);

document.getElementById("start").addEventListener("click", function resetGame() {
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
})

let peça = function (type) {
    if (type === "t") {
        return [
            [0, 0, 0],
            [5, 5, 5],
            [0, 5, 0]
        ]
    } else if (type === "l") {
        return [
            [0, 5, 0],
            [0, 5, 0],
            [0, 5, 0],
            [0, 5, 5],
        ]
    } else if (type === "j") {
        return [
            [0, 5, 0],
            [0, 5, 0],
            [5, 5, 0],
        ]
    } else if (type === "i") {
        return [
            [0, 5, 0],
            [0, 5, 0],
            [0, 5, 0],
        ]
    } else if (type === "o") {
        return [
            [5, 5],
            [5, 5],
        ]
    } else if (type === "s") {
        return [
            [0, 5, 5],
            [5, 5, 0],
            [0, 0, 0],
        ]
    } else if (type === "z") {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ]
    }
}