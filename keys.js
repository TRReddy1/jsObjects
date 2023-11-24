// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys

function keys(obj) {
  let keyList = [];

  for (let key in obj) {
    keyList.push(key);
  }

  return keyList;

  //return Object.keys(obj);
}

module.exports = keys;
