// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs

function pairs(obj) {
  let list = [];
  for (let object in obj) {
    list.push([object, obj[object]]);
  }
  return list;
}

module.exports = pairs;
