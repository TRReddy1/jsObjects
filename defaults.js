// Fill in undefined properties that match properties on the `defaultProps` parameter object.
// Return `obj`.
// http://underscorejs.org/#defaults
function defaults(obj, defaultProps) {
  for (let object in obj) {
    if (defaultProps.hasOwnProperty(object) && obj[object] === undefined) {
      obj[object] = defaultProps[object];
    }
  }
  return obj;
}

module.exports = defaults;
