const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "gajopa99", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectou com sucesso");
} catch (err) {
  console.log(`Não conectou: ${err}`);
}

module.exports = sequelize;
