const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    { name: "p1", message: "Qual seu nome?" },
    { name: "p2", message: "Qual sua idade?" },
  ])
  .then((answers) => {
    if (!answers.p1 || !answers.p2) {
      throw new Error("Os campos sao obrigatorios!");
    }
    const resp = `Sou o ${answers.p1} e tenho ${answers.p2} anos`;
    console.log(chalk.bgYellow.black(resp));
  })
  .catch((err) => console.log(err));
