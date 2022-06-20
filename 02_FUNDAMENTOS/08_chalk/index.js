const chalk = require("chalk");

let nota = 3;

if (nota >= 7) {
  console.log(chalk.green(`Voce tirou ${nota}. Aprovado!`));
} else if (nota >= 5 && nota < 7) {
  console.log(chalk.yellow(`Voce tirou ${nota}. Recuperacao!`));
} else {
  console.log(chalk.red(`Voce tirou ${nota}. Reprovado!`));
}
