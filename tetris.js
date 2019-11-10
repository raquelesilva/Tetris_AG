const canvas1 = document.querySelector("#c1");
const ctx1 = canvas1.getContext("2d");

const canvas2 = document.querySelector("#c2");
const ctx2 = canvas2.getContext("2d");

document.getElementById("reset").addEventListener("click", function resetGame(){
    ctx1.clearRect(0, 0, canvas1.width, canvas1.height)
})