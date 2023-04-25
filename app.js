const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const h = document.querySelector("h1");

let interval = null;

h.addEventListener("mouseover", function (event) {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    const randomLetters = event.target.innerText.split("").map((letter, index) => {
      if (index < iteration) {
        return event.target.dataset.value[index];
      }

      return letters[Math.floor(Math.random() * 26)];
    });

    event.target.innerText = randomLetters.join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 60);
});
