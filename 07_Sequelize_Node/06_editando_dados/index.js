const express = require("express");
const exhbs = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exhbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });

  res.render("home", { users: users });
});

app.get("/users/create", (req, res) => {
  res.render("addUser");
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newletter = req.body.newsletter;

  newletter === "on" ? (newletter = true) : (newletter = false);

  await User.create({ name, occupation, newletter });
  res.redirect("/");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({ raw: true, where: { id: id } });
  res.render("userview", { user });
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;
  await User.destroy({ where: { id: id } });

  res.redirect("/");
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("edituser", { user });
});

app.post("/users/update", async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newletter = req.body.newletters;

  newletter === "on" ? (newletter = true) : (newletter = false);

  const userData = {
    id,
    name,
    occupation,
    newletter,
  };

  await User.update(userData, { where: { id: id } });

  res.redirect("/");
});

conn
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
