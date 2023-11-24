// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

function values(obj) {
  let valueList = [];
  for (let value in obj) {
    valueList.push(obj[value]);
  }
  return valueList;
  //return Object.values(obj);
}

module.exports = values;
