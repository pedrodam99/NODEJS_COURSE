const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual sua linguagem favorita? ", (language) => {
  if (language == "python") console.log("Mas isso nem eh linguagem");
  else console.log(`Minha linguagem favorita eh ${language}`);
  readline.close();
});
