const cpf = "12345678900";
// const cnpj = "12345678900";
const cnpj = "12345678000199";

function verificarCpf() {
  let primeiraParte = cpf.slice(0, 3);
  let segundaParte = cpf.slice(3, 6);
  let terceiraParte = cpf.slice(6, 9);
  let ultimaParte = cpf.slice(9, 11);
  cpfFormatado =
    primeiraParte +
    "." +
    segundaParte +
    "." +
    terceiraParte +
    "-" +
    ultimaParte;

  cpfPronto = cpfFormatado.trim();

  if (cpf.length !== 11) {
    console.log("CPF Inválido");
  } else if (cpf.length === 11) {
    console.log(cpfPronto);
  }
}
verificarCpf(cpf);
function verificarCnpj() {
  let primeiraParte = cnpj.slice(0, 2);
  let segundaParte = cnpj.slice(2, 5);
  let terceiraParte = cnpj.slice(5, 8);
  let quartaParte = cnpj.slice(8, 12);
  let ultimaParte = cnpj.slice(12, 14);
  cnpjFormatado =
    primeiraParte +
    "." +
    segundaParte +
    "." +
    terceiraParte +
    "/" +
    quartaParte +
    "-" +
    ultimaParte;

  cnpjPronto = cnpjFormatado.trim();

  if (cnpj.length !== 14) {
    console.log("CNPJ Inválido");
  } else if (cnpj.length === 14) {
    console.log(cnpjPronto);
  }
}
verificarCnpj(cnpj);
