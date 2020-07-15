const text = document.getElementById("text");
const container = document.querySelector(".circle");

const full_cycle = 7500;
const half_cycle = (7500 / 5) * 2;
const pause = 7500 / 5;

IntervalFunction();

function IntervalFunction() {
  text.textContent =
    " Two things are infinite: the universe and human stupidity;  ";
  container.className = "circle growing";

  setTimeout(() => {
    text.textContent = "Albert Einstein";
    container.className = "circle shrinking";

    setTimeout(() => {
      text.textContent = "and I'm not sure about the universe.”!";
    }, pause);
  }, half_cycle);
}

setInterval(IntervalFunction, full_cycle);
