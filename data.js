const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

module.exports = testObject;

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well

/*
    Create a function for each problem in a file called
        keys.js
        values.js
        pairs.js
    and so on in the root of the project.

    Ensure that the functions in each file is exported and tested in its own file called
        testKeys.js
        testValues.js
        testPairs.js
    and so on in a folder called test.

    Create a new git repo on gitlab for this project, ensure that you commit after you complete each problem in the project.
    Ensure that the repo is a public repo.

    When you are done, send the gitlab url to your mentor
*/

/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
}

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
}
