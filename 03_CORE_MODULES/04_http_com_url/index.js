const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;
  const age = urlInfo.query.age;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (!name) {
    res.end(
      `<h1>Preencha o formulario</h1>
        <form method="GET">
            <input type="text" name="name" placeholder="Digite seu nome"/>
            <input type="text" name="age" placeholder="Digite sua idade"/>
            <input type="submit" value="Enviar"/>
        </form>
    `
    );
  } else {
    if (age >= 18) {
      res.end(`Seja bem-vindo ao clube ${name}!`);
    } else {
      res.end(
        `Ops! Parece que o ${name} tem ${age} anos e nao eh maior de idade`
      );
    }
  }
});

server.listen(port, () => console.log("Esta rodando....."));
