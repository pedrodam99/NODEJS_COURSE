const path = require("path");

//mostra o path a partir do nome do arquivo
console.log(path.resolve("teste.txt"));

//formar o path de forma dinamica
const midFolder = "relatorios";
const filename = "relatorio1.txt";

const finalPath = path.join(
  "/",
  "arquivos",
  midFolder,
  "mes_de_abril",
  filename
);

console.log(finalPath);
