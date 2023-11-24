const object = require("../data");
const mapping = require("../mapObject");

function cb(value) {
  return value + value;
}

const result = mapping(object, cb);

console.log(result);
