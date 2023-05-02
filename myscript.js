const inputValue = document.getElementById("input-value");
const maxValue = document.getElementById("max-value");
const barFill = document.getElementById("bar-fill");

inputValue.addEventListener("input", updateGraph);
maxValue.addEventListener("input", updateGraph);

function updateGraph() {
  const input = parseInt(inputValue.value);
  const max = parseInt(maxValue.value);

  if (input > max) {
    showError("Input value cannot be greater than max value");
    return;
  }

  hideError();

  const fillPercentage = (input / max) * 100;
  const percentageString = fillPercentage + "%";
  const remainingpercentageString = parseInt(100 - fillPercentage) + "%";
  barFill.style.height = percentageString;
  barFill.style.width = "100%";
  document.getElementById("graph1label").innerText = percentageString;
  document.getElementById("graph2label").innerText = percentageString;
  document.getElementById("graph3label").innerText = percentageString;

  document.getElementById(
    "pie-chart"
  ).style.backgroundImage = `radial-gradient(circle closest-side,transparent 66%, white 0),conic-gradient(#008CFF 0,#008CFF ${percentageString},#C2E3FF 0,#C2E3FF ${remainingpercentageString})`;
  document.getElementById(
    "bar-chart2"
  ).style.background = `linear-gradient(0deg, rgba(0,140,255,1) ${percentageString} , rgba(194,227,255,1) ${remainingpercentageString} )`;
}

function showError(message) {
  const error = document.createElement("div");
  error.classList.add("alert");
  error.innerText = message;

  const container = document.querySelector(
    "label[for='input-value']"
  ).parentElement;
  container.appendChild(error);
}

function hideError() {
  const error = document.querySelector(".alert");
  if (error) {
    error.remove();
  }
}

