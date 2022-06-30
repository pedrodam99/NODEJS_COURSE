const _ = require("lodash");

const a = [1, 2, 3, 5, 7];
const b = [1, 3, 4, 7, 11];

diff = _.difference(a, b);
console.log(diff);
