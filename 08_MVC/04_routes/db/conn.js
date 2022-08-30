const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "gajopa99", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectou ao MySql");
} catch (err) {
  console.loo(`Não foi possivel conectar: ${err}`);
}

module.exports = sequelize;
