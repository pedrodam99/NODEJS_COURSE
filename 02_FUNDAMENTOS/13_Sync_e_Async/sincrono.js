const fs = require("fs");

console.log("inicio");
fs.writeFileSync("arquivo.txt", "Oi");
console.log("Fim");
