const express = require("express");
const exphbs = require("express-handlebars");

const port = "3000";
const app = express();

const conn = require("./db/conn");

const Task = require("./models/Task");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

conn
  .sync()
  .then()
  .catch((err) => console.log(err));
