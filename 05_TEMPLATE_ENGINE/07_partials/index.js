const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/post", (req, res) => {
  const post = {
    title: "Aprendendo Nodejs",
    category: "javascript",
    content: "Nodejs é um runtime de javascript blablabla blablabla",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/dashboard", (req, res) => {
  const items = ["Item A", "Item B", "Item C"];

  res.render("dashboard", { items });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender NodeJS",
      category: "javascript",
      body: "teste",
      comments: 4,
    },
    {
      title: "Aprender PHP",
      category: "php",
      body: "teste",
      comments: 0,
    },
    {
      title: "Aprender Java",
      category: "java",
      body: "teste",
      comments: 12,
    },
  ];

  res.render("blog", { posts });
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
