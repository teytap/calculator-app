const screen = document.getElementById("screen");
const nineEl = document.getElementById("nine-el");
const eightEl = document.getElementById("eight-el");
const sevenEl = document.getElementById("seven-el");
const sixEl = document.getElementById("six-el");
const fiveEl = document.getElementById("five-el");
const fourEl = document.getElementById("four-el");
const threeEl = document.getElementById("three-el");
const twoEl = document.getElementById("two-el");
const oneEl = document.getElementById("one-el");
const zeroEl = document.getElementById("zero-el");
const plusEl = document.getElementById("plus-el");
const minusEl = document.getElementById("minus-el");
const divideEl = document.getElementById("divide-el");
const multiplyEl = document.getElementById("multiply-el");
const pointEl = document.getElementById("point-el");
const resetEl = document.getElementById("reset-el");
const deleteEl = document.getElementById("del-el");
const equalEl = document.getElementById("equal-el");

let num = 0;
let num1;
let num2;
let result;
nineEl.addEventListener("click", function () {
  num = 9;
  screen.innerHTML += num;
});
eightEl.addEventListener("click", function () {
  num = 8;
  screen.innerHTML += num;
});
sevenEl.addEventListener("click", function () {
  num = 7;
  screen.innerHTML += num;
});
sixEl.addEventListener("click", function () {
  num = 6;
  screen.innerHTML += num;
});
fiveEl.addEventListener("click", function () {
  num = 5;
  screen.innerHTML += num;
});
fourEl.addEventListener("click", function () {
  num = 4;
  screen.innerHTML += num;
});
threeEl.addEventListener("click", function () {
  num = 3;
  screen.innerHTML += num;
});
twoEl.addEventListener("click", function () {
  num = 2;
  screen.innerHTML += num;
});
oneEl.addEventListener("click", function () {
  num = 1;
  screen.innerHTML += num;
});
zeroEl.addEventListener("click", function () {
  num = 0;
  screen.innerHTML += num;
});

pointEl.addEventListener("click", function () {
  num = ".";
  screen.innerHTML += num;
});
plusEl.addEventListener("click", function () {
  num = "+";
  screen.innerHTML += num;
});
minusEl.addEventListener("click", function () {
  num = "-";
  screen.innerHTML += num;
});
divideEl.addEventListener("click", function () {
  num = "/";
  screen.innerHTML += num;
});
multiplyEl.addEventListener("click", function () {
  num = "*";
  screen.innerHTML += num;
});
resetEl.addEventListener("click", function () {
  num = "";
  screen.innerHTML = num;
});
deleteEl.addEventListener("click", function () {
  let text = screen.innerHTML.toString().slice(0, -1);
  screen.innerHTML = text;
  num = Number(text);
});
equalEl.addEventListener("click", function () {});
