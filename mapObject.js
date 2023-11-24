// Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
// http://underscorejs.org/#mapObject

function mapObject(obj, cb) {
  let mapped = {};

  for (let key in obj) {
    // if (obj.hasOwnProperty(key)) {
    let value = obj[key];
    mapped[key] = cb(value);
    //}
  }
  return mapped;
}

module.exports = mapObject;
