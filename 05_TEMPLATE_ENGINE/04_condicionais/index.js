const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.get("/", (req, res) => {
  const user = {
    name: "Pedro",
    surname: "Dambrosio",
  };
  //mock de autentifacao
  const auth = false;

  res.render("home", { user, auth });
});

app.listen(3000, () => {
  console.log("Está rodando na porta 3000");
});
