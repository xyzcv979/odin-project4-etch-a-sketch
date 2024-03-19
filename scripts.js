let userInput = 16;

// Create 16x16 grid of square divs using javascript
function createGrid(size) {
    let grid = new Array(size)
    const gridContainer = document.querySelector("#grid-container");
    for (let i = 0; i < grid.length; i++) {
        const gridRow = document.createElement('div');
        gridRow.id = "row" + i;
        gridRow.className = "row";
        grid[i] = new Array(size);
        for (let j = 0; j < grid[i].length; j++){
            const gridCol = document.createElement('div');
            gridCol.className = "square";
            // Add hover over effect
            // Mouse hover should highlight the square
            // Leave the square highlighted
            gridCol.addEventListener("mouseenter", (event) => {
                gridCol.style.backgroundColor = "yellow";
            });
            gridRow.appendChild(gridCol);
        }
        gridContainer.appendChild(gridRow);
    }
}

function deleteGrid(grid) {
    while (grid.firstChild) {
        while (grid.firstChild.firstChild) {
            grid.firstChild.firstChild.remove();
        }
        grid.firstChild.remove();
    }
}

function deleteAndCreateGrid() {
    // delete old grid
    const oldGrid = document.querySelector("#grid-container");
    deleteGrid(oldGrid);
    createGrid(parseInt(userInput));
}

// First create 16x16 grid
createGrid(userInput);

// Then create grid based off of user input:
const setBtn = document.querySelector("#set-btn");
setBtn.addEventListener("click", () => {
    userInput = prompt("Set number of squares per side (max 100): ");
    if (userInput > 100) {
        alert("Size can't be greater than 100!");
        return;
    }
    deleteAndCreateGrid();
});

// Reset button
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
    deleteAndCreateGrid();
});
