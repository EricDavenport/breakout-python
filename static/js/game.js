const cancas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let paddleHeight = 10, paddlieWidth = 75, paddleC = (canvas.width - paddlieWidth / 2);
let ballRadius = 10, x = canvas.width / 2, y = canvas.height - 30;
let dx = 2, dy = -2;
let rightPressed = false, leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyUp", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true
    }
}