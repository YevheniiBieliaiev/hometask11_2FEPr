"use strict";
/*GENERAL*/
function resetCss() {
  document.querySelector('h1, p').style.margin = 0;
  document.querySelector('h1, p').style.padding = 0;
}
resetCss();

function centring() {
  document.querySelector('.ht-wrapper').style.width = "900px";
  document.querySelector('.ht-wrapper').style.margin = "auto";
}
centring();

function headerTaskColor() {
  let color = document.querySelectorAll(".header-task");
  for (let key of color) {
    key.style.color = "blue";
    key.style.fontSize = "30px";
    key.style.display = "block"
    key.style.margin = "40px 0 0 0";
  }
}
headerTaskColor();

/*1)*/
function styleTag() {
  document.querySelector('#wrapper').style.width = "400px";
  document.querySelector("p:last-of-type").style.background = 'red';
}
styleTag();

function elementOrder() {
  document.querySelector("#wrapper").style.display = "flex";
  document.querySelector("#wrapper").style.flexDirection = "column";
  document.querySelector("#wrapper > div:nth-child(odd)").style.order = 2;
}
elementOrder();



/*2*/
function addImg() {
  if (confirm()) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<img src=\"Bender.png\" alt=\"Bender\">"
    document.querySelector("#img-wrapper").append(newDiv);
  }
}
addImg();



/*3)*/
let userNumber = Number(prompt("Please, enter your number"));

while (!Number.isFinite(userNumber)) {
  userNumber = Number(prompt("Please, enter your number"));
}

function addInput(userNumber) {
  let formArea = document.querySelector("form");

  for (let index = userNumber; index >= 1; index--) {
    let input = document.createElement("input");
    input.className = "input-item";
    input.value = `Input ${index}`;
    formArea.prepend(input);

    if (index % 2 !== 0) {
      input.className += " inp-bkg";
      document.querySelector('.inp-bkg').style.background = "yellow";
    }

    if (index % 3 === 0) {
      input.value = "";
      input.setAttribute("placeholder", "Some text");
    }

    if (index % userNumber === 0)
      document.querySelector("form input:last-child").className = input.className += " margin-zero";
  }
}
addInput(userNumber);



/*4*/
let numberCells = 5;

function createTable(number) {
  /*create tag "table" */
  let tableArea = document.querySelector('.ht-wrapper');
  let table = document.createElement("table");
  table.id = "matrix";
  tableArea.append(table);

  /*create elements of table - our matrix*/
  for (let i = 1; i <= number; i++) {
    let tr = document.createElement("tr");
    table.append(tr);
    for (let y = i; y < number + i; y++) {
      let td = document.createElement("td");
      tr.append(td)
      td.innerHTML = y;
    }
  }
}
createTable(numberCells);

function diagonalColor(number) {//change of bkg color reverse diagonal
  let table = document.querySelector("table");
  for (let j = number - 1; j >= 0; j--) {
    table.rows[j].cells[number - 1 - j].style.background = "blue";
  }
}
diagonalColor(numberCells);


function setTable() {  //styles of cells
  let setTrTd = document.querySelectorAll("tr, td");
  for (let key of setTrTd) {
    key.style.padding = "5px";
    key.style.border = "1px solid black";
  }
}
setTable();