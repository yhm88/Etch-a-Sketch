const container = document.querySelector("#container");

function getRandomInt() {
  return Math.floor(Math.random() * 255);
}

function createGrid(squaresPerSide) {
  let size = 640 / squaresPerSide;

  for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    let r = getRandomInt();
    let g = getRandomInt();
    let b = getRandomInt();

    const singleDiv = document.createElement("div");
    singleDiv.classList.add("single");
    container.appendChild(singleDiv)
    singleDiv.style.width = singleDiv.style.height = size + "px";

    singleDiv.style.opacity = 0;
    singleDiv.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      let currentOpacity = parseFloat(e.target.style.opacity);
      e.target.style.opacity = currentOpacity + 0.1;
    });
  }
}

createGrid(16);

const clearButton = document.querySelector("#clearButton");

clearButton.addEventListener('click', () => {
  let userInput = prompt("Please enter the number of squares per side for new grid: ")
  if (parseInt(userInput) > 100) {
    alert("Too big, try another.");
  } else {
    container.innerHTML = '';
    let gridSize = parseInt(userInput);
    createGrid(gridSize);
  }
})

