const nomeArquivo = "Foto da Familia.pdf";

function verificandoTipoDeArquivo(nomeArquivo) {
  let nomeArquivoMinusculo = nomeArquivo.toLowerCase().trim();

  let nomeArquivoMinusculoTamanho = nomeArquivoMinusculo.length;

  let verificandoArquivo = nomeArquivoMinusculo.indexOf(".");

  let tipoDeArquivo = nomeArquivoMinusculo.slice(
    verificandoArquivo - nomeArquivoMinusculoTamanho + 1
  );

  if (
    tipoDeArquivo === "jpg" ||
    tipoDeArquivo === "jpeg" ||
    tipoDeArquivo === "gif" ||
    tipoDeArquivo === "png"
  ) {
    console.log("Arquivo válido");
  } else {
    console.log("Arquivo inválido");
  }
}

verificandoTipoDeArquivo(nomeArquivo);
