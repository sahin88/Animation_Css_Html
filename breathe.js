const text = document.getElementById("text");
const container = document.querySelector(".circle");

const full_cycle = 7500;
const half_cycle = (7500 / 5) * 2;
const pause = 7500 / 5;

IntervalFunction();

function IntervalFunction() {
  text.textContent = " Hakiki Mürsit Bilimdedir! ";
  container.className = "circle growing";

  setTimeout(() => {
    text.textContent = "M.Kemal Atatürk";
    container.className = "circle shrinking";

    setTimeout(() => {
      text.textContent = "If my words are aginst Science,choose Science!";
    }, pause);
  }, half_cycle);
}

setInterval(IntervalFunction, full_cycle);
