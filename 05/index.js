const numeroCartao = "1111222233334444";

let primeiro4Digitos = numeroCartao.slice(0, 4);
let ultimos4Digitos = numeroCartao.slice(-4);
let numeroCartaoAsterisco = primeiro4Digitos.padEnd(
  numeroCartao.length - 4,
  "*"
);

let cartaoEditado = numeroCartaoAsterisco + ultimos4Digitos;

console.log(cartaoEditado);
