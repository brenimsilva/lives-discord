console.log("Ola Mundo");

function somarDoisNumeros(num1, num2) {
  console.log(num1 + num2);
}

//Exercicio 01
const text = document.querySelector(".text__color");
const btnColor = document.querySelector(".button__color");
const listaCores = [
  "#541690",
  "#FF4949",
  "#FF8D29",
  "#FFCD38",
  "#F806CC",
  "#00FFAB",
  "white",
  "red",
  "blue",
  "crimson",
  "purple",
  "pink",
];

function mudarDeCor(element) {
  element.preventDefault();
  const corAleatoria =
    listaCores[Math.trunc(Math.random() * listaCores.length - 1)];
  text.style.color = corAleatoria;
}

btnColor.addEventListener("click", mudarDeCor);

//Exercicio 02
const num1 = document.querySelector(".input__number1");
const num2 = document.querySelector(".input__number2");
const btnCalc = document.querySelector(".calc__button");
const operator = document.querySelector(".operator__select");
const result = document.querySelector(".result__number");
function calcular() {
  switch (operator.value) {
    case "+":
      result.value = +num1.value + +num2.value;
      break;
    case "-":
      result.value = +num1.value - +num2.value;
      break;
    case "*":
      result.value = +num1.value * +num2.value;
      break;
    case "/":
      result.value = +num1.value / +num2.value;
  }
}

btnCalc.addEventListener("click", calcular);

//Exercicio 03
const secretNumber = document.querySelector(".secret__number");
const inputNumber = document.querySelector(".number__guess");
const btnChutar = document.querySelector(".number__button");
const message = document.querySelector(".message");
const randomSecretNumber = Math.round(Math.random() * 20);
console.log(randomSecretNumber);
function checkNumber() {
  if (inputNumber.value == randomSecretNumber) {
    secretNumber.innerText = randomSecretNumber;
    message.innerText = "ACERTOU!!";
    message.style.color = "green";
  } else {
  }
}

btnChutar.addEventListener("click", checkNumber);
