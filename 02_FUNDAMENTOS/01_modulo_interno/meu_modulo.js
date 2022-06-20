//atribuir diretamente no objeto module.exports
module.exports = {
  soma(a = 0, b = 0) {
    console.log(a + b);
  },
};

//atribuir de forma literal
module.exports.multiplica = (a, b) => {
  console.log(a * b);
};
