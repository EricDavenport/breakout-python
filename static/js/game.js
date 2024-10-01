const cancas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let paddleHeight = 10, paddlieWidth = 75, paddleC = (canvas.width - paddlieWidth / 2);
let ballRadius = 10, x = canvas.width / 2, y = canvas.height - 30;
let dx = 2, dy = -2;