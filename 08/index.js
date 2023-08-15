const cpf = "011.022.033-44";

function modificacaoCpf(cpf) {
  let numeroCpf = cpf;

  while (numeroCpf !== numeroCpf.replace(".", "")) {
    numeroCpf = numeroCpf.replace(".", "");
  }
  while (numeroCpf !== numeroCpf.replace("-", "")) {
    numeroCpf = numeroCpf.replace("-", "");
  }

  console.log(numeroCpf);
}
modificacaoCpf(cpf);
