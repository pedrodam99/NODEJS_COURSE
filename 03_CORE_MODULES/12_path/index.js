const path = require("path");

const customPath = "/relatorios/relatorios_abril/relatorio1.exe";

// caminho
console.log(path.dirname(customPath));
// ultima parte
console.log(path.basename(customPath));
//extensao do arquivo
console.log(path.extname(customPath));
