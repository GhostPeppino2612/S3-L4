const submit = document.getElementsByClassName("start-btn")[0];
const form = document.forms[0];
const inputOfNum = document.getElementById("number-of-tables");
const controls = document.getElementsByClassName("stop-draw-btn")[0];
const stopBtn = document.getElementsByClassName("stop")[0];
const drawBtn = document.getElementsByClassName("draw")[0];
const tombola = document.getElementsByClassName("tombola")[0];
const tableSec = document.getElementsByClassName("tables-sec")[0];
let output = document.getElementById("output");

const obj = {
  ciao: "ciao"
}

let arrayOfNum = [];

for (let i = 1; i <= 76; i++) {
  arrayOfNum.push(i);
}
console.log("Array iniziale dove pescare");
console.log(arrayOfNum);

for (let i = arrayOfNum.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arrayOfNum[i], arrayOfNum[j]] = [arrayOfNum[j], arrayOfNum[i]];
}
console.log("Array finale shuffled dove pescare");
console.log(arrayOfNum);

const validateLength = (input) => {
  if (input.value.length > 1 || input.value > 3) {
    input.value = input.value > 3 ? 3 : input.value.slice(0, 1);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  submit.style.display = "none";
  controls.style.display = "block";
  inputOfNum.disabled = true;

  numOfTables = parseInt(inputOfNum.value);
  for (let i = 0; i < numOfTables; i++) {
    const table = document.createElement("div");
    table.classList.add("table");
    generateTables(table);
  }
});

stopBtn.addEventListener("click", (e) => {
  location.reload();
});

const generateTables = (table) => {
  const tableArray = [];
  for (let i = 1; i <= 76; i++) {
    tableArray.push(i);
  }
  console.log("Tabella prima di shuffle");
  console.log(tableArray);

  for (let i = tableArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tableArray[i], tableArray[j]] = [tableArray[j], tableArray[i]];
  }
  let newTable = tableArray.slice(0, 30);
  console.log("Tabella dopo shuffle e slice");
  console.log(newTable);

  for (let i = 0; i < newTable.length; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = newTable[i];
    table.appendChild(cell);
  }
  tableSec.appendChild(table);
};

drawBtn.addEventListener("click", (e) => {
  let numberDrawn = arrayOfNum[arrayOfNum.length - 1];
  output.innerHTML =
    arrayOfNum.length > 0 ? `Hai pescato: ${numberDrawn}` : "Numeri Finiti";
  numberOut = arrayOfNum.pop();
  console.log(arrayOfNum);

  highlightNumberInTombola(numberOut);

  highlightNumberInTables(numberOut);

  verifyAmboTernoQuaternaCinquinaTombola(numberDrawn);
});

const highlightNumberInTombola = (numberOut) => {
  const tombolaCells = document.querySelectorAll(".tombola .cell");
  tombolaCells.forEach((cell) => {
    if (parseInt(cell.innerHTML) === numberOut) {
      cell.classList.add("draw-cell");
    }
  });
};

const highlightNumberInTables = (numberOut) => {
  const tableCells = document.querySelectorAll(".tables-sec .cell");
  tableCells.forEach((cell) => {
    if (parseInt(cell.innerHTML) === numberOut) {
      cell.classList.add("draw-cell");
    }
  });
};

const verifyAmboTernoQuaternaCinquinaTombola = (number) => {
  const tombolaCells = document.querySelectorAll(".tombola .cell");
  const tableCells = document.querySelectorAll(".tables-sec .cell");

  tombolaCells.forEach((cell) => {});
};
