import "./board.css";
export function createGridBoard(containerId, title = "Your grid") {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const battlefield = document.createElement("div");
  battlefield.className = "battlefield flex-col";

  const label = document.createElement("div");
  label.className = "battlefield-label";
  label.textContent = title;
  battlefield.appendChild(label);

  const grid = document.createElement("div");
  grid.className = "grid-board";

  const cols = 10;
  const rows = 10;
  const colLabels = "ABCDEFGHIJ".split("");

  // Top-left empty corner
  const corner = document.createElement("div");
  corner.className = "cell marker";
  grid.appendChild(corner);

  // Top row (A-J)
  for (let x = 0; x < cols; x++) {
    const cell = document.createElement("div");
    cell.className = "cell marker";
    cell.textContent = colLabels[x];
    grid.appendChild(cell);
  }

  for (let y = 0; y < rows; y++) {
    // Left column (1-10)
    const rowMarker = document.createElement("div");
    rowMarker.className = "cell marker row-marker";
    rowMarker.textContent = y + 1;
    grid.appendChild(rowMarker);

    // Cells (empty for now)
    for (let x = 0; x < cols; x++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.row = y;
      cell.dataset.col = x;
      grid.appendChild(cell);
    }
  }

  battlefield.appendChild(grid);
  container.appendChild(battlefield);
  return container;
}
