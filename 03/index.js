const texto = "Aprenda programar do zero na Cubos Academy";

let textoCubos = texto.toLowerCase();

while (textoCubos !== textoCubos.replace(" ", "-")) {
  textoCubos = textoCubos.replace(" ", "-");
}

console.log(textoCubos);
