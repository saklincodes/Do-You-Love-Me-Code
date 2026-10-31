// @saklin_01
const questionContainer = document.querySelector(.question-container);
const resultContainer = document.querySelector(.result-container);
const gifResult = document.querySelector(.gif-result);
const heartLoader = document.querySelector(.cssload-main);
const yesBtn = document.querySelector(.js-yes-btn);
const noBtn = document.querySelector(.js-no-btn);

// Evasive No button functionality for both Desktop (Mouse) and Mobile (Touch)
function escapeNoButton(e) {
  if (e && e.type === touchstart) {
    e.preventDefault();
  }

  const btnWidth = noBtn.offsetWidth || 80;
  const btnHeight = noBtn.offsetHeight || 44;
  const padding = 20;

  const maxX = Math.max(padding, window.innerWidth - btnWidth - padding);
  const maxY = Math.max(padding, window.innerHeight - btnHeight - padding);

  const newX = Math.floor(padding + Math.random() * (maxX - padding));
  const newY = Math.floor(padding + Math.random() * (maxY - padding));

  noBtn.style.position = fixed;
  noBtn.style.left = ${newX}px;
  noBtn.style.top = ${newY}px;
  noBtn.style.right = auto;
  noBtn.style.bottom = auto;
  noBtn.style.zIndex = 999;
}

noBtn.addEventListener(mouseover, escapeNoButton);
noBtn.addEventListener(touchstart, escapeNoButton, { passive: false });
noBtn.addEventListener(pointerdown, escapeNoButton);

// Yes button functionality
yesBtn.addEventListener(click, () => {
  questionContainer.style.display = none;
  noBtn.style.display = none;
  heartLoader.style.display = inherit;

  setTimeout(() => {
    heartLoader.style.display = none;
    resultContainer.style.display = flex;
    gifResult.play();
  }, 2500);
});

// Floating hearts in background
const heartSymbols = [❤️, 💖, 💕, 💗, 💓];

function createBackgroundHeart() {
  const heart = document.createElement(span);
  heart.className = bg-heart;
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = ${Math.random() * 100}vw;
  heart.style.fontSize = ${14 + Math.random() * 20}px;
  const duration = 4 + Math.random() * 4;
  heart.style.animationDuration = ${duration}s;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

setInterval(createBackgroundHeart, 450);

// Cursor trailing hearts
let lastCursorTime = 0;
function spawnCursorHeart(x, y) {
  const now = Date.now();
  if (now - lastCursorTime < 45) return;
  lastCursorTime = now;

  const heart = document.createElement(span);
  heart.className = cursor-heart;
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = ${x}px;
  heart.style.top = ${y}px;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 700);
}

window.addEventListener(mousemove, (e) => {
  spawnCursorHeart(e.clientX, e.clientY);
});

window.addEventListener(touchmove, (e) => {
  if (e.touches && e.touches[0]) {
    spawnCursorHeart(e.touches[0].clientX, e.touches[0].clientY);
  }
});

