const fs = require("fs");

fs.rename("texto.txt", "newTexto.txt", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Nome alterado com sucesso");
});
