const comentario = "Esse COVID é muito perigoso!";

let comentarioMinusculo = comentario.toLocaleLowerCase();

let comentarioArray = comentarioMinusculo.split(" ");

if (comentarioArray.includes("covid") || comentarioArray.includes("pandemia")) {
  console.log("Comentário bloqueado por conter palavras proibidas");
} else {
  console.log("Comentário autorizado");
}
