const fs = require("fs");

if (!fs.existsSync("./minhapasta")) {
  console.log("Criaremos agora");
  fs.mkdirSync("minhapasta");
} else {
  console.log("Agora existe.");
}
