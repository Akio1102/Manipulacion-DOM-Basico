const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

form.addEventListener("submit", SumarInputValues);

function SumarInputValues(event) {
  event.preventDefault();
  const Suma = parseInt(input1.value) + parseInt(input2.value);
  result.innerText = "Resultado: " + Suma;
}
