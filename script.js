function handle_drag(event) {
  event.dataTransfer.setData("text/plain", event.target.id)
}

function handle_drop(event) {
  event.preventDefault();
  const target_id = event.dataTransfer.getData("text")
  const target = document.getElementById(target_id)
  const current = event.target

  let temp = current.style.backgroundColor
  current.style.backgroundColor = target.style.backgroundColor
  target.style.backgroundColor = temp
}

function allow_drop(event) {
  event.preventDefault()
}

function create_box(color, x, y) {
  const box = document.createElement("div")
  box.setAttribute("draggable", "true")
  box.classList.add("box-item")
  box.id = `box-${x}-${y}`
  box.style.backgroundColor = color

  box.addEventListener("dragover", allow_drop)
  box.addEventListener("dragstart", handle_drag)
  box.addEventListener("drop", handle_drop)

  return box
}

function create_box_wrapper() {
  const row = document.createElement("div")
  row.classList.add("box-row")

  return row
}

const color_map = [
  ["#FFCCCC", "#FFE6CC", "#FFFFCC", "#E6FFCC", "#CCFFCC", "#CCFFE6", "#CCFFFF", "#CCE5FF"],
  ["#FF9999", "#FFCC99", "#FFFF99", "#CCFF99", "#99FF99", "#99FFCC", "#99FFFF", "#99CCFF"],
  ["#FF6666", "#FFB366", "#FFFF66", "#B3FF66", "#66FF66", "#66FFB3", "#66FFFF", "#66B2FF"],
  ["#FF3333", "#FF9933", "#FFFF33", "#99FF33", "#33FF33", "#33FF99", "#33FFFF", "#3399FF"],
  ["#FF0000", "#FF8000", "#FFFF00", "#80FF00", "#00FF00", "#00FF80", "#00FFFF", "#007FFF"],
  ["#CC0000", "#CC6600", "#CCCC00", "#66CC00", "#00CC00", "#00CC66", "#00CCCC", "#0066CC"],
  ["#990000", "#994C00", "#999900", "#4D9900", "#009900", "#00994D", "#009999", "#004C99"],
  ["#660000", "#663300", "#666600", "#336600", "#006600", "#006633", "#006666", "#003366"],
]

window.onload = function() {
  const root = document.getElementById("root")
  for (let i = 0; i < color_map.length; i++) {
    const row = create_box_wrapper()
    for (let j = 0; j < color_map[0].length; j++) {
      const box = create_box(color_map[i][j], i, j)
      row.appendChild(box)
    }
    root.appendChild(row)
  }
}