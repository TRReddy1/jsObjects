// Returns a copy of the object where the keys have become the values and the values the keys.
// Assume that all of the object's values will be unique and string serializable.
// http://underscorejs.org/#invert
function invert(obj) {
  let inverted = {};

  for (let object in obj) {
    let key = object;
    let value = obj[object];
    inverted[value] = key;
    //inverted[obj[object]] = object;
  }
  return inverted;
}

module.exports = invert;
