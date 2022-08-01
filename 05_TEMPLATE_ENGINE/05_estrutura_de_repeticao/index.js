const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["Item A", "Item B", "Item C"];

  res.render("dashboard", { items });
});

app.get("/", (req, res) => {
  const user = {
    name: "Pedro",
    surname: "Dambrosio",
  };
  //mock de autentifacao
  const auth = true;

  res.render("home", { user, auth });
});

app.listen(3000, () => {
  console.log("Está rodando na porta 3000");
});
