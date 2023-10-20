const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const text = document.querySelector(".text");

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  if (pipePosition <= 120 && pipePosition > -10 && marioPosition <= 67) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    text.innerHTML = "Game Over";
    text.style.top = "50%";
    text.style.left = "32%";
    text.style.transform = "translate(-50%, -50%)";
    text.style.position = "absolute";
    text.style.color = "darkgoldenrod";

    clearInterval();
  }
}, 10);

document.addEventListener("keydown", jump);
