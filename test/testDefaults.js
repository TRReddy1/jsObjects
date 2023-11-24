const defaultProps = require("../data");
const defaults = require("../defaults");

let input = { name: "ravindra", age: undefined };

const result = defaults(input, defaultProps);

console.log(result);
