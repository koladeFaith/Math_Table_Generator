function generateTable() {
  let rows = parseInt(document.getElementById("rows").value);
  let columns = parseInt(document.getElementById("columns").value);
  let operation = document.getElementById("operation").value;
  let tableHTML = "<table>";

  for (let i = 1; i <= rows; i++) {
    tableHTML += "<tr>";
    for (let j = 1; j <= columns; j++) {
      let value;

      if (operation === "multiply") {
        value = i * j;
      } else if (operation === "add") {
        value = i + j;
      } else if (operation === "subtract") {
        value = i - j;
      } else if (operation === "divide") {
        value = (i / j).toFixed(2);
      }

      tableHTML += `<td>${value}</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";
  document.getElementById("showAnswer").innerHTML = tableHTML;
}


