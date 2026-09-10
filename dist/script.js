const envelope = document.querySelector("#envelope");
const letter = document.querySelector("#letter");
const openLetter = document.querySelector("#openLetter");
const luck = document.querySelector("#luck");
const toast = document.querySelector("#toast");
const stars = document.querySelector(".stars");

for (let i = 0; i < 24; i += 1) {
  const star = document.createElement("i");
  star.className = "star";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 68}%`;
  star.style.setProperty("--speed", `${2.3 + Math.random() * 3}s`);
  star.style.setProperty("--delay", `${Math.random() * 4}s`);
  stars.appendChild(star);
}

function revealLetter() {
  envelope.classList.add("opened");
  window.setTimeout(() => {
    envelope.hidden = true;
    letter.setAttribute("aria-hidden", "false");
    letter.classList.add("visible");
  }, 480);
}

function celebrate() {
  const colors = ["#fff4c5", "#f4c76c", "#77c4d3", "#f08d83", "#ffffff"];
  for (let i = 0; i < 86; i += 1) {
    const piece = document.createElement("i");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty("--duration", `${2.2 + Math.random() * 2.4}s`);
    piece.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    piece.style.setProperty("--spin", `${360 + Math.random() * 720}deg`);
    piece.style.animationDelay = `${Math.random() * .55}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 5200);
  }
  toast.classList.add("show");
  luck.querySelector("span").textContent = "好运已经收下";
  document.querySelector("#hint").textContent = "愿你今年比去年更开心一点";
  window.setTimeout(() => toast.classList.remove("show"), 3000);
}

openLetter.addEventListener("click", revealLetter);
luck.addEventListener("click", celebrate);
