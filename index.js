document.addEventListener("keydown", (event) => addFromKey(event.key));

//keyboard support functionality

function addFromKey(key) {
  if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    del();
  } else if (key === "c") {
    clearScreen();
  } else if (options.includes(key)) {
    display(key);
  }
}

//variables
var operators = ["+", "-", "*", "/"];
var options = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "/",
  "*",
  "-",
  "+",
  "Enter",
  "Backspace",
];

//elements
var displayElement = document.getElementById("result");

// This function clear all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

//checker functions
function operatorChecker(value) {
  return (
    value.includes("*") ||
    value.includes("/") ||
    value.includes("+") ||
    value.includes("-")
  );
}
function floatChecker(value) {
  return value.includes(".");
}
function divideChecker(value) {
  return value.slice(-1) === "/";
}

//delete function
function del() {
  if (displayElement.value.length > 0) {
    displayElement.value = displayElement.value.slice(0, -1);
  }
}

// This function display values
function display(value) {
  if (operatorChecker(displayElement.value) && operatorChecker(value)) {
    calculate();
    displayElement.value += value;
  } else if (floatChecker(displayElement.value) && floatChecker(value)) {
    alert("Float Already Exists");
  } else if (divideChecker(displayElement.value) && value === "0") {
    alert("cannot divide by 0");
  } else {
    displayElement.value += value;
  }
}

// This function evaluates the expression and returns result
function calculate() {
  var result = eval(displayElement.value);
  // console.log(result.toString().split('.')[1]);
  if (
    result.toString().includes(".") &&
    result.toString().split(".")[1].length > 2
  ) {
    displayElement.value = result.toFixed(2);
  } else displayElement.value = result;
}
