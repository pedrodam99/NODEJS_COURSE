const express = require("express");
const exhbs = require("express-handlebars");
const conn = require("./db/conn");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exhbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Servidor aberto na porta ${port}`);
});
