const x = 10;

if (!Number.isInteger(x)) {
  throw new Error(`${x} isnt a integer. ${x} is a ${typeof x}`);
}
console.log("Continuando......");
