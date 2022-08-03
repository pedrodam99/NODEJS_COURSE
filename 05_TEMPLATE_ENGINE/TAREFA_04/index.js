const express = require("express");
const exphbs = require("express-handlebars");

const port = 3000;

const app = express();

//-----------MOCK DOS PRODUTOS-----------------
const products = [
  {
    id: 1,
    name: "Samsung A70",
    category: "Celular",
    brand: "Samsung",
    price: "R$ 1800.00",
  },
  {
    id: 2,
    name: "Iphone XR",
    category: "Celular",
    brand: "Apple",
    price: "R$ 2400.00",
  },
  {
    id: 3,
    name: "Xiaomi 38",
    category: "Celular",
    brand: "Xiaomi",
    price: "R$ 730.00",
  },
];
//-----------MOCK DOS PRODUTOS-----------------

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.get("/product/:id", (req, res) => {
  const id = parseInt(req.params.id) - 1;
  const product = products[id];

  res.render("product", { product });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
