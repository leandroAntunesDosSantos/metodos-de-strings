const nome = "Guido Cerqueira";

function criandoApelido(nome) {
  let nomeMinusculo = nome.toLowerCase();
  let nomeMinusculoSemEspaco = nomeMinusculo.replace(" ", "");
  let nomeMinusculoSemEspacoArray = nomeMinusculoSemEspaco.split("");

  nomeMinusculoSemEspacoArray.unshift("@");

  let nomeEditado = "";

  for (let item of nomeMinusculoSemEspacoArray) {
    nomeEditado += item;
  }

  let apelido = nomeEditado.trim().slice(0, 13);
  console.log(apelido);
}
criandoApelido(nome);
