const container = document.querySelector("#container");

function createGrid(squaresPerSide) {
  let size = 640 / squaresPerSide;

  for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    const singleDiv = document.createElement("div");
    singleDiv.classList.add("single");
    container.appendChild(singleDiv)
    singleDiv.style.width = singleDiv.style.height = size + "px";
    singleDiv.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "yellow");
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

