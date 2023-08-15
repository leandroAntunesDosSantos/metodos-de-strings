const celular = 7199918888;

function editNumeroTelefone(celular) {
  let celularEdit = celular.toString();

  let celularDdd = celularEdit.slice(0, 2);

  let celularTelefone = celularEdit.slice(-8);

  let celularComDddFormatado = `( ${celularDdd} ) 9 ${celularTelefone} `;

  let celularSemDdd = `9 ${celularTelefone}`;

  if (celularEdit.length === 10) {
    console.log(celularComDddFormatado);
  } else if (celularEdit.length === 8) {
    console.log(celularSemDdd);
  }
}
editNumeroTelefone(celular);
