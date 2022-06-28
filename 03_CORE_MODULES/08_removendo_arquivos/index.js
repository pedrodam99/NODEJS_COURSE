const fs = require("fs");

fs.unlink("texto.txt", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Arquivo Removido");
});
