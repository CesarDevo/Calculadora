let sete = document.getElementById('sete');
let mais = document.getElementById('plus');
let input = document.getElementById('input');
let x = 0;
let y = 0;
let soma = 0;

sete.addEventListener("click", () => {
  input.value = "7";
  x = 7;
});

mais.addEventListener("click", () => {
  soma (x, 1);
});

function soma (x, y) {
  soma = x + y;
  input.value = soma;
}
