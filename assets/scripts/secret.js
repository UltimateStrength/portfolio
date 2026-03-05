const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let running = true;
let gameOver = false;

// Bola
let x, y, dx, dy;
const ballRadius = 7;

// Paddle
const paddleWidth = 80;
const paddleHeight = 10;
let paddleX;

// Blocos
const rows = 4;
const cols = 6;
const brickWidth = 65;
const brickHeight = 18;
const padding = 10;
const offsetTop = 30;
const offsetLeft = 25;
let bricks;

// UI
const btnPause = document.getElementById("btnPause");
const btnRestart = document.getElementById("btnRestart");
const gameMessage = document.getElementById("gameMessage");

// Init / Reset
function initGame() {
  x = canvas.width / 2;
  y = canvas.height - 40;
  dx = 2;
  dy = -2;

  paddleX = (canvas.width - paddleWidth) / 2;

  bricks = [];
  for (let c = 0; c < cols; c++) {
    bricks[c] = [];
    for (let r = 0; r < rows; r++) {
      bricks[c][r] = { status: 1, x: 0, y: 0 };
    }
  }

  running = true;
  gameOver = false;
  btnPause.textContent = "Pause";
  gameMessage.classList.add("hidden");
}

initGame();

// Input
let left = false;
let right = false;

document.addEventListener("keydown", e => {
  if (e.key === "ArrowLeft") left = true;
  if (e.key === "ArrowRight") right = true;
});
document.addEventListener("keyup", e => {
  if (e.key === "ArrowLeft") left = false;
  if (e.key === "ArrowRight") right = false;
});

// Botões
btnPause.onclick = () => {
  if (gameOver) return;

  running = !running;
  btnPause.textContent = running ? "Pause" : "Resume";
};

btnRestart.onclick = () => {
  initGame();
};

// Draw
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
}

function drawPaddle() {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(
    paddleX,
    canvas.height - paddleHeight - 8,
    paddleWidth,
    paddleHeight
  );
}

function drawBricks() {
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      if (bricks[c][r].status) {
        const bx = c * (brickWidth + padding) + offsetLeft;
        const by = r * (brickHeight + padding) + offsetTop;
        bricks[c][r].x = bx;
        bricks[c][r].y = by;

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(bx, by, brickWidth, brickHeight);
      }
    }
  }
}

// Collision
function collision() {
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const b = bricks[c][r];
      if (
        b.status &&
        x > b.x &&
        x < b.x + brickWidth &&
        y > b.y &&
        y < b.y + brickHeight
      ) {
        dy *= -1;
        b.status = 0;
      }
    }
  }
}

// Loop
function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBricks();
  drawBall();
  drawPaddle();

  if (!running || gameOver) {
    requestAnimationFrame(loop);
    return;
  }

  collision();

  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) dx *= -1;
  if (y + dy < ballRadius) dy *= -1;
  else if (y + dy > canvas.height - ballRadius - 18) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy *= -1;
    } else {
      gameOver = true;
      running = false;
      gameMessage.classList.remove("hidden");
      btnPause.textContent = "Pause";
    }
  }

  if (right && paddleX < canvas.width - paddleWidth) paddleX += 5;
  if (left && paddleX > 0) paddleX -= 5;

  x += dx;
  y += dy;

  requestAnimationFrame(loop);
}

loop();
