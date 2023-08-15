let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let identificadorFormat = identificador.padStart(6, 0);
console.log(identificadorFormat);

/////********* */

let nomeArray = nome.split(" ");

let nomeFormatado = "";

for (let i = 0; i < nomeArray.length; i++) {
  let primeiraLetra = nomeArray[i].slice(0, 1);
  let restanteDoNome = nomeArray[i].slice(1);
  nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}
let nomeformat = nomeFormatado.trim();
console.log(nomeformat);

/////////********* */
let emailFormat = email.trim();
console.log(emailFormat);
