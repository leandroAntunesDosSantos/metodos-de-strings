const email = "aluno@cubos.academy";

function verificadorEmail(email) {
  let emailArray = email.split("");
  let temArroba = emailArray.includes("@");
  let temPonto = emailArray.includes(".");
  let naoComecaComPonto = false;
  let naoTerminaComPonto = false;

  if (emailArray[0] !== ".") {
    naoComecaComPonto = true;
  }
  if (emailArray[emailArray.length - 1] !== ".") {
    naoTerminaComPonto = true;
  }
  if (temArroba && temPonto && naoComecaComPonto && naoTerminaComPonto) {
    console.log("E-mail válido");
  } else {
    console.log("E-mail inválido");
  }
}

verificadorEmail(email);
