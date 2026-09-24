const container = document.querySelector("#container");


for (let i = 0; i < 256; i++) {
  const singleDiv = document.createElement("div");
  singleDiv.classList.add("single");
  container.appendChild(singleDiv);

  singleDiv.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = "red";
  })
}

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener('click', () => {
  let userInput = prompt("Please enter the number of squares per side for new grid: ")
  if (parseInt(userInput) > 100) {
    alert("Too big, try another.");
  } else {
    container.innerHTML = '';

    for (let i = 0; i < userInput * userInput; i++) {
      const singleDiv = document.createElement("div");
      singleDiv.classList.add("single");
      container.appendChild(singleDiv);
      let gridSize = parseInt(userInput);
      let size = 640 / gridSize;
      singleDiv.style.width = size + "px";
      singleDiv.style.height = size + "px";

      singleDiv.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "red";
      })
    }
  }
})