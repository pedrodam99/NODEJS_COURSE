const express = require("express");
const exhbs = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User");
const Address = require("./models/Address");
const { raw } = require("express");

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
  try {
    const id = req.params.id;
    const user = await User.findOne({ include: Address, where: { id: id } });

    res.render("edituser", { user: user.get({ plain: true }) });
  } catch (error) {
    console.log(error);
  }
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
  console.log(userData);
  res.redirect("/");
});

app.post("/address/create", async (req, res) => {
  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    UserId,
    street,
    number,
    city,
  };

  await Address.create(address);

  res.redirect(`/users/edit/${UserId}`);
});

app.post("/address/delete", async (req, res) => {
  const id = req.body.id;
  const UserId = req.body.UserId;

  await Address.destroy({ where: { id: id } });

  res.redirect(`/users/edit/${UserId}`);
});

app.get("/address", async (req, res) => {
  const address = await Address.findAll({ raw: true });

  res.render("address", { address: address });
});

conn
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
