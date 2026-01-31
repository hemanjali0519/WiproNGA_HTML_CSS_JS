// core logic for following actions
// step 1: append values
// Step 2: clear screen
// Step 3: perform calculations

function appendValue(value) {
const el =  document.getElementById("result");
el.value += value;
}

function clearResult() {
document.getElementById("result").value = "";
}

function calculate() {
  const expressions = document.getElementById("result").value;
  try {
  const output = eval(expressions);
  document.getElementById("result").value = output;
} catch (err) {
document.getElementById("result").value = "Error";
console.error("Calculation error:", err);
}
}