const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Pedro",
    surname: "Dambrosio",
  };

  res.render("home", { user });
});

app.listen(3000, () => {
  console.log("Está rodando na porta 3000");
});
